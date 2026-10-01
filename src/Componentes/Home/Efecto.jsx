import { useEffect, useRef } from 'react'

export default function Efecto({
    src,
    retraso = 1500,   // ms que la imagen se ve completa antes de empezar
    duracion = 3000,  // ms que dura la desintegración
    paso = 3,         // tamaño de la partícula en px (más grande = más rápido)
    onFin,
}) {
    const canvasRef = useRef(null)
    const onFinRef = useRef(onFin)
    onFinRef.current = onFin

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        const img = new Image()
        let raf
        let timeoutId
        let cancelado = false

        const animar = (particulas) => {
            const inicio = performance.now()
            const total = 1.3 // 0.9 de retraso máximo + 0.4 de vida de cada partícula

            const cuadro = (ahora) => {
                if (cancelado) return
                const t = ((ahora - inicio) / duracion) * total
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                for (const p of particulas) {
                    const local = (t - p.delay) / 0.4
                    if (local >= 1) continue // ya desapareció
                    const k = Math.max(local, 0)
                    ctx.globalAlpha = 1 - k
                    ctx.fillStyle = p.color
                    ctx.fillRect(p.x + p.vx * k, p.y + p.vy * k, paso, paso)
                }
                ctx.globalAlpha = 1

                if (t < total) {
                    raf = requestAnimationFrame(cuadro)
                } else {
                    onFinRef.current?.()
                }
            }
            raf = requestAnimationFrame(cuadro)
        }

        img.onload = () => {
            if (cancelado) return
            const escala = Math.min(1, 400 / img.naturalWidth)
            canvas.width = Math.round(img.naturalWidth * escala)
            canvas.height = Math.round(img.naturalHeight * escala)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

            const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const particulas = []
            for (let y = 0; y < canvas.height; y += paso) {
                for (let x = 0; x < canvas.width; x += paso) {
                    const i = (y * canvas.width + x) * 4
                    if (data[i + 3] < 10) continue // píxel transparente
                    particulas.push({
                        x,
                        y,
                        color: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
                        delay: (x / canvas.width) * 0.6 + Math.random() * 0.3,
                        vx: 40 + Math.random() * 120,
                        vy: -(20 + Math.random() * 100),
                    })
                }
            }
            timeoutId = setTimeout(() => animar(particulas), retraso)
        }
        img.src = src

        return () => {
            cancelado = true
            clearTimeout(timeoutId)
            cancelAnimationFrame(raf)
        }
    }, [src, retraso, duracion, paso])

    return <canvas ref={canvasRef} />
}