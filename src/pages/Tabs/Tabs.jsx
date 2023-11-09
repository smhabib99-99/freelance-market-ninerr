import { useState } from "react";





const Tabs = () => {

    const [activeTab, setActiveTab] = useState('web');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

    const tabs = [
        { label: 'Web Development', value: 'web' },
        { label: 'Digital Marketing', value: 'digital' },
        { label: 'Graphics Design', value: 'design' },
      ];

    return (
        <div className="flex space-y-5 justify-center items-center my-5">
            <div className="space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => handleTabClick(tab.value)}
                        className={`${activeTab === tab.value ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                            } p-2 rounded-md`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;