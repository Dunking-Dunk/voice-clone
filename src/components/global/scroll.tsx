"use client"

import Lenis from 'lenis'
import React, { useEffect } from 'react'
import { useRef } from 'react'

const state = {
    top: 0,
    progress: 0,
}

type Props = {
    children: React.ReactNode
}

export default function Scroll({ children }: Props) {
    const content: any = useRef(null)
    const wrapper: any = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            wrapper: wrapper.current,
            content: content.current,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            syncTouch: true,
            touchMultiplier: 1,
            infinite: false
        })

        lenis.on('scroll', ({ scroll, progress }: { scroll: number, progress: number }) => {
            state.top = scroll
            state.progress = progress
            wrapper.current.setAttribute('data-progress', progress)
            wrapper.current.setAttribute('data-scroll', scroll)
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const id = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(id)
            lenis.destroy()
        }
    }, [])

    return (
        <div
            ref={wrapper}
            id='scroll-element'
            style={{
                position: 'absolute',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                top: 0,
            }}>
            <div
                ref={content}
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                }}>
                {children}
            </div>
        </div>
    )
}

