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
        <div className='flex flex-col items-center bg-white rounded-xl p-5 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]'>
            <h1 className='text-2xl text-center font-semibold uppercase'>Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar</h1>

            <div className='mt-5 bg-orange-500 p-6 rounded-lg text-white'>
                <span id="resultado">{calculateHours()} mg de Enoxaparina</span>

            </div>
            <div className="relative mt-5">
                <input
                    type="range"
                    className="w-full h-7 rounded-full bg-gray-200 p-1 appearance-none cursor-pointer dark:bg-gray-700"
                    min="41"
                    max={is12HourMode ? '149' : '99'}
                    step="1"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    
                />
                <span
                    className="absolute left-1/2 transform -translate-x-1/2 -mt-8"
                    
                >
                    <input
                    type="number"
                    className="w-16 text-center border rounded ml-2"
                    min="41"
                    max={is12HourMode ? '149' : '99'}
                    step="1"
                    value={sliderValue}
                    onChange={(event) => setSliderValue(parseFloat(event.target.value))}
                />
                </span>
                
            </div>


            <div className="flex mt-5">
                <button
                    className={`flex-grow border rounded p-2 ${!is12HourMode ? 'bg-blue-500 text-white' : 'border-blue-500'
                        }`}
                    onClick={select24HourMode}
                >
                    24h
                </button>
                <button
                    className={`flex-grow border rounded p-2 ${is12HourMode ? 'bg-blue-500 text-white' : 'border-blue-500'
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
