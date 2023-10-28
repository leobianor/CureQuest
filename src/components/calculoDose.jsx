import React, { useState, useEffect } from 'react';
import CalcFuncaoRenal from '@/components/calcFuncaoRenal';


const MedicationCalculator = () => {
    const [sliderValue, setSliderValue] = useState(41);
    const [is12HourMode, setIs12HourMode] = useState(false);
    const [isInsuficienciaRenalSelected, setIsInsuficienciaRenalSelected] = useState(false);
    const [showCalcFuncaoRenal, setShowCalcFuncaoRenal] = useState(false);

    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value, 10));
    };

    const select24HourMode = () => {
        setIs12HourMode(false);
    };

    const select12HourMode = () => {
        setIs12HourMode(true);
    };

    const selectInsuficienciaRenal = () => {
        setIsInsuficienciaRenalSelected(!isInsuficienciaRenalSelected);
        setShowCalcFuncaoRenal(!showCalcFuncaoRenal); // Mostra ou esconde o CalcFuncaoRenal ao clicar no botão
    };

    useEffect(() => {
        const adjustedSliderValue = is12HourMode
            ? Math.min(sliderValue, 149)
            : isInsuficienciaRenalSelected
                ? Math.min(sliderValue, 149)
                : Math.min(sliderValue, 99);
        setSliderValue(adjustedSliderValue);
    }, [is12HourMode, sliderValue, isInsuficienciaRenalSelected]);

    useEffect(() => {
        calculateHours();
    }, [sliderValue, is12HourMode, isInsuficienciaRenalSelected]);

    const calculateHours = () => {
        const multiplier = is12HourMode ? 1 : isInsuficienciaRenalSelected ? 1 : 1.5;
        const result = Math.floor(sliderValue * multiplier);
        return result;
    };



    return (
        <div className="flex flex-col items-center bg-white rounded-xl px-8 py-6 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">

            <div className={` ${isInsuficienciaRenalSelected ? 'bg-red-500' : 'bg-orange-500'} rounded-lg text-white `}>
                <h1 className="text-lg text-center items-start font-medium px-14 mt-4">
                    Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar
                </h1>
                <div className='border-b mx-6 mt-1'></div>
                <div className='my-20'>
                    <p className='text-center font-medium text-2xl'>Enoxaparina</p>
                    <p className='text-center text-3xl font-semibold mt-2' id="resultado">{calculateHours()} mg</p>
                </div>
            </div>
            <div className="flex mt-8 pl-4 justify-center items-center border-2 rounded-full border-purple-500 appearance-none dark:text-white dark-border-gray-600 dark-focus-border-purple-500 focus-outline-none focus-ring-0 focus-border-purple-600 peer">
                <input
                    type="range"
                    className="accent-purple-700 w-full rounded-full bg-gray-200  cursor-pointer dark-bg-gray-700"
                    min="41"
                    max={isInsuficienciaRenalSelected ? '149' : is12HourMode ? '149' : '99'}
                    step="1"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
                <div className="relative ml-2">
                    <input
                        type="number"
                        id="floating_outlined"
                        className="block px-4 pb-2.5 pt-4 w-full rounded-full text-sm text-gray-900 bg-transparent appearance-none border-0 dark:text-white focus-outline-none focus-ring-0  peer"
                        min="41"
                        max={isInsuficienciaRenalSelected ? '149' : is12HourMode ? '149' : '99'}
                        step="1"
                        value={sliderValue}
                        onChange={(event) => setSliderValue(parseFloat(event.target.value))}
                    />
                    <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-purple-500 dark-text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark-bg-gray-900 px-2 peer-focus-px-2 peer-focus-text-purple-600 peer-focus-dark-text-purple-500 peer-placeholder-shown-scale-100 peer-placeholder-shown--translate-y-1/2 peer-placeholder-shown-top-1/2 peer-focus-top-2 peer-focus-scale-75 peer-focus--translate-y-4 left-3"
                    >
                        Kg
                    </label>
                </div>
            </div>
            <div className="flex mt-4 gap-2 ">
                <button
                    className={`flex-grow border-2 rounded-full px-3 py-2 ${!is12HourMode && !isInsuficienciaRenalSelected
                        ? 'bg-purple-500 text-white'
                        : 'border-purple-500'}`}
                    onClick={select24HourMode}
                >
                    24h
                </button>
                <button
                    className={`flex-grow border-2 rounded-full px-3 py-2 ${is12HourMode
                        ? 'bg-purple-500 text-white'
                        : 'border-purple-500'}`}
                    onClick={select12HourMode}
                >
                    12h
                </button>
            </div>
            <button
                className={`flex border-2 rounded-full px-4 py-2 mt-4 ${isInsuficienciaRenalSelected
                    ? 'bg-red-500 text-white'
                    : 'border-red-500'}`}
                onClick={selectInsuficienciaRenal}
            >
                Insuficiencia Renal Grave
            </button>
            <div className='w-full'>

                {showCalcFuncaoRenal && <CalcFuncaoRenal />}

            </div>
        </div>
    );
};

export default MedicationCalculator;
