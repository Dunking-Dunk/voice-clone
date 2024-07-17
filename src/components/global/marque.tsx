"use client"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

type Props = {
    duration: number
}

const Marque = ({ duration }: Props) => {
    const marRef: any = useRef()

    useGSAP(() => {


        gsap.to(marRef.current, {
            left: '-100%',
            repeat: -1,
            duration: duration,
            yoyo: true
        })

    }, [])

    return (
        <div className="flex flex-row w-[2000%] relative bottom-0 -left-10 text-primary border-4 border-secondary py-4 gap-20 " ref={marRef}>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
            <h3 className="text-7xl" >UNFAZED STUDIO</h3>
        </div>
    )
}

export default Marque