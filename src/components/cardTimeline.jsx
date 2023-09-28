import React from 'react';


export default function cardTimeline ({titulo_card, texto_card, card_icon}) {
    return (
        <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">
                            <h3 className="font-semibold text-lg mb-1">{titulo_card}</h3>
                            <p className="leading-tight text-justify">
                            {texto_card}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-purple-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                {card_icon}
                </div>
            </div>
        </div>
    );
};



