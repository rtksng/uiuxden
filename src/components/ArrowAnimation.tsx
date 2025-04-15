import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../index.css';

// Define props type for height and width
interface ArrowAnimationProps {
    width?: number; // Optional width
    height?: number; // Optional height
    stroke?: number; // Optional height
    nameOfClass?: string; // Optional height
}

const ArrowAnimation: React.FC<ArrowAnimationProps> = ({ width = 194, height = 114, stroke = 2, nameOfClass = "svg-container" }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        
    });
    console.log("Arrow inView:", inView);

    return (
        <div className={nameOfClass} >

            <svg
                ref={ref}
                width={width}
                height={height}
                viewBox="0 0 186 100"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`path-animation ${inView ? 'active' : ' '}`}
            >

                <path d="M12.3338 21.2365C9.87256 27.3477 7.35278 33.2603 4.65126 40.0025C0.838092 38.1519 0.059484 35.0279 0.903475 32.1066C3.43541 23.3428 6.22511 14.4894 9.90519 5.76459C11.9855 0.771209 17.3163 -0.424027 21.223 2.70813C27.8533 7.85049 34.0266 13.3706 40.4577 18.8012C40.8326 19.109 41.3656 19.4713 41.3245 19.8141C41.418 21.0956 41.0956 22.4121 40.9314 23.7832C39.5255 23.8337 37.7212 24.4606 36.8719 23.9892C33.8495 22.4113 31.1844 20.5998 28.4198 18.9323C26.8793 18.0441 25.5966 17.0662 22.5681 16.914C23.1125 19.2433 23.5574 21.7168 24.1018 24.0462C38.0361 71.3273 89.5166 98.0072 152.367 90.9523C160.468 89.9988 168.494 88.3054 176.636 87.0092C179.489 86.5654 182.242 86.2658 185.095 85.8221C185.37 86.2739 185.388 86.8154 185.663 87.2672C184.292 88.4006 182.939 90.0754 181.234 90.5582C175.663 92.3844 170.092 94.2106 164.345 95.4408C107.194 107.852 51.9339 90.0413 26.8391 50.6895C22.0603 43.1518 19.1268 34.6444 15.4786 26.6044C14.694 24.906 14.3252 23.1726 13.7983 21.3847C13.5815 21.1314 13.0075 21.1119 12.3338 21.2365Z" fill="#3abf880"
                    stroke="#67D17E"
                    strokeWidth={stroke}
                />
            </svg>

        </div>
    );
};

export default ArrowAnimation;
