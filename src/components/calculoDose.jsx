import React, { useState } from "react";

function MedicationCalculator() {
    const [barValue, setBarValue] = useState(41);
    const [mode12h, setMode12h] = useState(false);

    const handleBarChange = (e) => {
        setBarValue(parseInt(e.target.value));
        calcularHoras(e.target.value, mode12h);
    };

    const handleModeToggle = () => {
        setMode12h(!mode12h);
        ajustarBarra(barValue, !mode12h);
        calcularHoras(barValue, !mode12h);
    };

    const mostrarValorBarra = (value) => {
        return (
            <div className="slider-container flex items-center">
                <input
                    type="range"
                    id="barra"
                    min="41"
                    max={mode12h ? "149" : "99"}
                    value={barValue}
                    onChange={handleBarChange}
                    className="flex-grow"
                />
                <span id="valorBarra" className="ml-4">
                    {value}
                </span>
            </div>
        );
    };

    const ajustarBarra = (value, modo12h) => {
        const barra = document.getElementById("barra");

        if (modo12h) {
            // Se o modo de 12 horas for selecionado, ajuste os limites da barra.
            barra.min = "41";
            barra.max = "149";
            if (value > 149) {
                setBarValue(149);
                barra.value = 149;
            }
        } else {
            // Se o modo de 24 horas for selecionado, ajuste os limites da barra de volta.
            barra.min = "41";
            barra.max = "99";
            if (value > 99) {
                setBarValue(99);
                barra.value = 99;
            }
        }
    };

    const calcularHoras = (value, modo12h) => {
        let multiplicador = 1.5;
        if (modo12h) {
            multiplicador = 1;
        }

        const resultado = Math.floor(value * multiplicador);
        document.getElementById("resultado").textContent = resultado;
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-800 min-h-screen p-8">
            <p className="text-lg font-semibold mb-4">
                Dose para tratamento do tromboembolismo venoso com ou sem embolia
                pulmonar
            </p>
            <div className="mb-4">
                <p>
                    Resultado: Enoxaparina <span id="resultado">61</span>
                </p>
            </div>
            {mostrarValorBarra(barValue)}
            <label className="inline-block mr-4">24h</label>
            <label className="switch">
                <input
                    type="checkbox"
                    id="modoToggle"
                    onChange={handleModeToggle}
                    checked={mode12h}
                />
                <span className="slider"></span>
            </label>
            <label className="inline-block ml-4">12h</label>
        </div>
    );
}

export default MedicationCalculator;
