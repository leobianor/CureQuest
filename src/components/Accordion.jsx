import React, { useState } from "react";
import 'flowbite';

function Accordion({ items }) {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    return (
        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
            {items.map((item, index) => (
                <div key={index}>
                    <h2>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border ${index === 0 ? "rounded-t-xl" : "border-b-1"} border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800`}
                            data-accordion-target={`#accordion-color-body-${index}`}
                            aria-expanded={activeAccordion === index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 rotate-${activeAccordion === index ? "0" : "180"} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id={`accordion-color-body-${index}`} className={activeAccordion === index ? "" : "hidden"} aria-labelledby={`accordion-color-heading-${index}`}>
                        <div className="p-5 border border-b-1 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
