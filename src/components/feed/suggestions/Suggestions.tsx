import { OfficeBuildingIcon, UserGroupIcon } from "@heroicons/react/solid";
import { BriefcaseIcon, HomeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Suggestion = (
        { icon, helptext, suggestionCategory, buttonAction, category } : 
        {
            icon: JSX.Element, 
            helptext: string,
            suggestionCategory: string,
            buttonAction: (category?: string) => void, 
            category?: string}
    ) => {
        return (
            <div className='flex items-center justify-between mt-3'>
                {/* Some logo or image or title */}
                {icon}
                <div className="flex-1 ml-4">
                    <h2>{helptext}</h2>
                </div>
                <button 
                  className={
                      category === suggestionCategory ? "text-gray-400 text-xs font-semibold" : "text-blue-400 text-xs font-semibold"
                  } 
                  disabled={category === suggestionCategory}
                  onClick={() => {buttonAction(suggestionCategory)}}
                  >
                        VIEW
                </button>
                {/* Description */}
                {/* Action Button */}
            </div>
        );
}

const Suggestions = ({ category, setCategory } : { category: string, setCategory: (category: string) => void }) => {

    const i = <HomeIcon className="suggestion-icon"/>
    const j = <OfficeBuildingIcon className="suggestion-icon" />;
    const k = <UserGroupIcon className="suggestion-icon" />;
    return (
        <div className="mt-4 ml-10">
            <h3 className="text-md font-semibold text-gray-400">
                Navigate
            </h3>
            <Suggestion 
                icon={i}
                buttonAction={setCategory}
                suggestionCategory="home"
                category={category}
                helptext="Landing page."
            />
            <Suggestion
                icon={j}
                buttonAction={setCategory}
                suggestionCategory="experience"
                category={category}
                helptext="Work Experience."
            />
            <Suggestion
                icon={k}
                buttonAction={setCategory}
                suggestionCategory="service"
                category={category}
                helptext="Service and Leadership."
            />
        </div>
    );
}

export default Suggestions;
