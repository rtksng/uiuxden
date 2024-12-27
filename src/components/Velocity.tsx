"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";

import { cn } from "../lib/utils";
import AbstractImg from '../assets/abstract.svg'

interface VelocityScrollProps {
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
    default_velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
    point1,
    point2,
    point3,
    point4,
    point5,
    default_velocity = 5,
    className,
}: VelocityScrollProps) {
    function ParallaxText({
        children,
        baseVelocity = 100,
        className,
    }: ParallaxProps) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });

        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const [repetitions, setRepetitions] = useState(1);
        const containerRef = useRef<HTMLDivElement>(null);
        const textRef = useRef<HTMLSpanElement>(null);

        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && textRef.current) {
                    const containerWidth = containerRef.current.offsetWidth;
                    const textWidth = textRef.current.offsetWidth;
                    const newRepetitions = Math.ceil(containerWidth / textWidth) + 1;
                    setRepetitions(newRepetitions);
                }
            };

            calculateRepetitions();

            window.addEventListener("resize", calculateRepetitions);
            return () => window.removeEventListener("resize", calculateRepetitions);
        }, [children]);

        const x = useTransform(baseX, (v) => `${wrap(-250 / repetitions, 0, v)}%`);

        const directionFactor = React.useRef<number>(1);
        useAnimationFrame(( delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        });

        return (
            <div
                className="w-full overflow-hidden whitespace-nowrap"
                ref={containerRef}
            >
                <motion.div className={cn("inline-block", className)} style={{ x }}>
                    {Array.from({ length: repetitions }).map((_, i) => (
                        <span key={i} ref={i === 0 ? textRef : null}>
                            {children}{" "}
                        </span>
                    ))}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="relative w-full">
            <ParallaxText baseVelocity={default_velocity} className={className}>
                <div className="flex min-w-[1920px] justify-between">
                    <span className="inline-flex items-center gap-[126px] font-normal"><img src={AbstractImg} alt="Start Img" />
                        {point1}
                    </span>
                    <span className="inline-flex items-center gap-[126px] font-normal"><img src={AbstractImg} alt="Start Img" />
                        {point2}
                    </span>
                    <span className="inline-flex items-center gap-[126px] font-normal"><img src={AbstractImg} alt="Start Img" />
                        {point3}
                    </span>
                    <span className="inline-flex items-center gap-[126px] font-normal"><img src={AbstractImg} alt="Start Img" />
                        {point4}
                    </span>
                    <span className="inline-flex items-center gap-[126px] font-normal"><img src={AbstractImg} alt="Start Img" />
                        {point5}
                    </span>

                </div>
         
            </ParallaxText>
        </div>
    );
}
