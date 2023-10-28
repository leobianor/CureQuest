import React from 'react';

const CheckboxItem = ({ label, value, onChange }) => {
    return (
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor="vue-checkbox" className="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            </div>
        </li>
    );
};

export default CheckboxItem;
