import React from 'react'

type IdData = {
    imagePath: string;
    mainheading: string;
    subheading: string;
    idBoxText?: string;
    lastText: string;
};

type IdProps = {
    allData: IdData[];
    boxData: BoxData[][];
};

type BoxData = {
    boxText: string;
    boxNumber: string;
};

const IdentifyCard: React.FC<IdProps> = ({ allData, boxData }) => {

    return (
        <div className="identify-card flex flex-col gap-10">
            {allData.map((innerData, index) => (
                <div className="flex flex-col items-center sm:items-start lg:flex-row gap-10 pb-10 last:border-0 border-[2px] border-t-0 border-l-0 border-r-0 border-dashed" key={index}>
                    <div className="imgbox">
                        <img src={innerData.imagePath} alt="SVG Icon" />
                    </div>
                    <div className="data-sec w-full">
                        <p className="text-[30px] text-white text-center sm:text-start mb-5 sm:mb-0 font-bold">{innerData.mainheading}</p>
                        <p className="font-light text-white text-center sm:text-start mb-8">{innerData.subheading}</p>
                        <div className="grid grid-cols-12">
                            {boxData[index]?.map((box, innerIndex) => (
                                <div
                                    key={innerIndex}
                                    className="col-span-full sm:col-span-6 md:col-span-3 id-box last:border-0 border-[2px] border-t-0 border-l-0 md:border-b-0 border-dashed p-7 flex flex-col gap-5  items-center justify-center"
                                >
                                    <p className='text-white text-center text-xl font-semibold'>
                                        {box.boxText}
                                    </p>
                                    <p className='text-green-400 text-center text-3xl font-bold'>
                                        {box.boxNumber}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="font-light text-white text-center sm:text-start mt-8">{innerData.lastText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default IdentifyCard
