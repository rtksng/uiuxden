import React, { useState, useEffect } from "react";

type Tab = {
    id: number;
    label: string;
    sublabel: string;
    content: string;
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
        <div className="flex flex-col md:flex-row justify-center py-5 sm:py-[60px] lg:py-[140px]">
            <div className="relative min-w-[50%] sm:gap-[40px] flex flex-col md:items-end items-center before:w-[100%] md:before:w-[1px] before:bg-white md:before:h-[100%] before:h-[1px] before:absolute md:before:right-0 before:bottom-0 pb-12 md:pb-0 md:pe-[70px]">
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
            <div className="md:p-4 p-10 md:ps-12">
                <p
                    className="text-center md-text-start md:text-[40px] sm:text-[30px] text-[20px] font-thin"
                    dangerouslySetInnerHTML={{
                        __html: tabs[activeTab].content,
                    }}
                />
            </div>
        </div>
    );
};

export default Tabs;
