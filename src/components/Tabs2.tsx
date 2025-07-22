import React, { useState, useEffect } from "react";

type Tab = {
    id: number;
    label: string;
    sublabel: string;
    heading: string;
    subheading: string;
    boxHeading: string;
    box2Heading: string;
    listItems: string[];
    listItems2: string[];
};

type TabsProps = {
    tabs: Tab[];
    autoSwitchInterval?: number; // Time in milliseconds
};

const Tabs: React.FC<TabsProps> = ({ tabs, autoSwitchInterval = 3000 }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
        }, autoSwitchInterval);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [tabs.length, autoSwitchInterval]);

    return (
        <div className="flex flex-col md:flex-row justify-center py-5 sm:py-[60px] lg:pt-[60px] lg:pb-[140px]">
            <div className="relative min-w-[50%] sm:gap-[40px] flex flex-col md:items-end items-center before:content-[''] before:absolute before:w-[100%] md:before:w-[1px] 
before:h-[1px] md:before:h-[100%] before:bottom-0 md:before:right-0 before:border-t before:md:border-r before:border-[#6e6a6a] pb-12 md:pb-0 md:pe-[70px] hidden sm:block">
                {tabs.map((tab, index) => (
                    <button
                        className={
                            activeTab === index ? "navTabs activeTabs" : "navTabs"
                        }
                        key={tab.id}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                        <span className="md:text-[32px] text-[24px] font-normal ms-2 ">
                            {tab.sublabel}
                        </span>
                    </button>
                ))}
            </div>
            <div className="md:p-4 p-10 md:ps-12 max-w-[1000px]">
                <p
                    className="text-[20px] font-bold mb-[16px]"
                    dangerouslySetInnerHTML={{
                        __html: tabs[activeTab].heading,
                    }}
                />

                <p
                    className="text-[18px] font-normal mb-[24px]"
                    dangerouslySetInnerHTML={{
                        __html: tabs[activeTab].subheading,
                    }}
                />

                <div className="bg-[#373737] p-[12px] mb-[24px]">
                    <p
                        className="text-[20px] font-bold mb-[12px]"
                        dangerouslySetInnerHTML={{
                            __html: tabs[activeTab].boxHeading,
                        }}
                    />
                    <ul className="list-disc pl-5 space-y-2">
                        {tabs[activeTab]?.listItems?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#373737] p-[12px]">
                    <p
                        className="text-[20px] font-bold mb-[12px]"
                        dangerouslySetInnerHTML={{
                            __html: tabs[activeTab].box2Heading,
                        }}
                    />
                    <ul className="list-disc pl-5 space-y-2">
                        {tabs[activeTab]?.listItems2?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Tabs;
