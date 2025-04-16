import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../index.css';

// Define props type for height and width
interface SVGAnimationProps {
    width?: number; // Optional width
    height?: number; // Optional height
    stroke?: number; // Optional height
    nameOfClass?: string; // Optional height
}

const SVGAnimation: React.FC<SVGAnimationProps> = ({ width = 194, height = 114, stroke = 5, nameOfClass = "svg-container" }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <div className={nameOfClass} >
            <svg
                ref={ref}
                width={width}
                height={height}
                viewBox="0 0 194 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`path-animation ${inView ? 'active' : ''}`}
            >
                <path
                    d="M152.5 64.6345C143.5 78.6353 125 86.1353 84.9998 90.6346C39.7415 95.7253 -15.1675 73.1353 8.49982 37.6345C31.4998 3.13477 123.5 -9.36591 161.5 17.6345C199.822 44.8638 187.5 93.5009 94.5 107.134C47.5 114.024 19 107.134 8.49979 102.5"
                    stroke="#67D17E"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                />

            </svg>
        </div>
    );
};

export default SVGAnimation;
