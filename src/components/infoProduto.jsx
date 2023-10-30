import React from 'react';

const infoProduto = ({ title, content, link }) => {
    return (
        <div className="max-w-xs p-6 bg-white rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">
            <a href={link}>
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{content}</p>
            <a href={link} className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover-bg-purple-700 dark:focus:ring-purple-800">
                Leia Mais
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    );
};

export default infoProduto;
