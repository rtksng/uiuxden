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

const ArrowAnimation: React.FC<ArrowAnimationProps> = ({ width = 194, height = 114, stroke = 5, nameOfClass = "svg-container" }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.8,

    });
    console.log("Arrow inView:", inView);

    return (
        <div className={nameOfClass} >

            {/* <svg
                ref={ref}
                width={width}
                height={height}
                viewBox="0 0 186 100"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`path-animation arrowanimation ${inView ? 'active' : ''}`}
            >

                <path
                    d="M12.3338 21.2365C9.87256 27.3477 7.35278 33.2603 4.65126 40.0025C0.838092 38.1519 0.059484 35.0279 0.903475 32.1066C3.43541 23.3428 6.22511 14.4894 9.90519 5.76459C11.9855 0.771209 17.3163 -0.424027 21.223 2.70813C27.8533 7.85049 34.0266 13.3706 40.4577 18.8012C40.8326 19.109 41.3656 19.4713 41.3245 19.8141C41.418 21.0956 41.0956 22.4121 40.9314 23.7832C39.5255 23.8337 37.7212 24.4606 36.8719 23.9892C33.8495 22.4113 31.1844 20.5998 28.4198 18.9323C26.8793 18.0441 25.5966 17.0662 22.5681 16.914C23.1125 19.2433 23.5574 21.7168 24.1018 24.0462C38.0361 71.3273 89.5166 98.0072 152.367 90.9523C160.468 89.9988 168.494 88.3054 176.636 87.0092C179.489 86.5654 182.242 86.2658 185.095 85.8221C185.37 86.2739 185.388 86.8154 185.663 87.2672C184.292 88.4006 182.939 90.0754 181.234 90.5582C175.663 92.3844 170.092 94.2106 164.345 95.4408C107.194 107.852 51.9339 90.0413 26.8391 50.6895C22.0603 43.1518 19.1268 34.6444 15.4786 26.6044C14.694 24.906 14.3252 23.1726 13.7983 21.3847C13.5815 21.1314 13.0075 21.1119 12.3338 21.2365Z"
                    fill="#3abf880"
                    stroke="#3ABF88"
                     
                />
            </svg> */}

            <svg 
                ref={ref}
                width={width}
                height={height}
                viewBox="0 0 186 100"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`path-animation arrow2 overflow-visible ${inView ? 'active' : ''}`}
            >
                <path d="M2.60802 53.6714C19.3519 52.2276 37.2306 49.1399 45.7595 32.9273C48.7484 27.2457 54.0245 17.7025 49.2245 11.4901C44.3024 5.11973 40.351 14.4442 38.6415 20.4828C36.7948 27.0061 37.4429 33.0401 41.507 38.801C51.9768 53.642 75.5369 36.6815 85.5106 29.1296C91.4907 24.6017 100.135 14.2322 98.4653 6.25097C96.5269 -3.01407 88.9303 8.1445 87.5537 10.8957C78.9412 28.1089 94.2226 41.4459 109.96 42.5925C126.928 43.8287 142.601 38.3812 159.06 35.881C167.825 34.5497 176.182 31.7866 184.955 30.454C187.416 30.0803 194.363 28.3831 191.94 27.8164C185.807 26.3822 180.902 22.5577 175.282 20.3063C173.247 19.4914 187.718 23.921 191.216 24.6902C197.855 26.15 202.673 24.7603 194.698 30.1357C189.331 33.7537 182.486 38.3245 180.462 44.5791" stroke="#606060" stroke-width="5" stroke-linecap="round" strokeWidth={stroke} />
            </svg>


        </div>
    );
};

export default ArrowAnimation;