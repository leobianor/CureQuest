import React, { useState, useEffect } from 'react';

const MedicationCalculator = () => {
    const [sliderValue, setSliderValue] = useState(41);
    const [is12HourMode, setIs12HourMode] = useState(false);

    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value, 10));
    };

    const select24HourMode = () => {
        setIs12HourMode(false);
    };

    const select12HourMode = () => {
        setIs12HourMode(true);
    };

    useEffect(() => {
        const adjustedSliderValue = is12HourMode ? Math.min(sliderValue, 149) : Math.min(sliderValue, 99);
        setSliderValue(adjustedSliderValue);
    }, [is12HourMode, sliderValue]);

    useEffect(() => {
        calculateHours();
    }, [sliderValue, is12HourMode]);

    const calculateHours = () => {
        const multiplier = is12HourMode ? 1 : 1.5;
        const result = Math.floor(sliderValue * multiplier);
        return result;
    };


    return (
        <div className="flex flex-col items-center bg-white rounded-xl p-5 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">
            <h1 className="text-2xl text-center font-semibold uppercase">Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar</h1>

            <div className='mt-5 bg-orange-500 p-6 rounded-lg text-white'>
                <span id="resultado">{calculateHours()} mg de Enoxaparina</span>

            </div>
            <div className="flex mt-5 justify-center items-center">

                <input
                    type="range"
                    className="accent-purple-700 w-full rounded-full bg-gray-200 cursor-pointer dark:bg-gray-700"
                    min="41"
                    max={is12HourMode ? '149' : '99'}
                    step="1"
                    value={sliderValue}
                    onChange={handleSliderChange}

                />
                <div class="relative ml-2">
                    <input
                        type="number"
                        id="floating_outlined"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                        min="41"
                        max={is12HourMode ? '149' : '99'}
                        step="1"
                        value={sliderValue}
                        onChange={(event) => setSliderValue(parseFloat(event.target.value))}
                    />
                    <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                        Kg
                    </label>
                </div>
            </div>


            <div className="flex mt-5 gap-3">
                <button
                    className={`flex-grow border rounded p-2 ${!is12HourMode ? 'bg-purple-500 text-white' : 'border-purple-500'
                        }`}
                    onClick={select24HourMode}
                >
                    24h
                </button>
                <button
                    className={`flex-grow border rounded p-2 ${is12HourMode ? 'bg-purple-500 text-white' : 'border-purple-500'
                        }`}
                    onClick={select12HourMode}
                >
                    12h
                </button>
            </div>
        </div>
    );
};

export default MedicationCalculator;
