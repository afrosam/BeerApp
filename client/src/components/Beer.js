import React from 'react'

export const Beer = (props) => {
    const {abv, name, description, servingTemperature, available, style, labels} = props.beer;

    return (
        <div className="transition shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div className="text-gray-800 border-4 border-orange-900 bg-yellow-300 rounded overflow-hidden shadow-lg">
                { labels ? <img src={labels.medium} alt={`${name} icon`} className="w-8/12 sm:w-6/12 mx-auto px-2 py-2"  /> : null}
                <div className="px-6 py-4">
                    <div className="mb-2">
                        <p className="font-bold text-xl">{name}</p>
                        <p className="italic text-orange-600">{style ? style.name : null}</p>
                        
                    </div>
                    <ul>
                        <li><strong>abv: {abv}</strong></li>
                        {servingTemperature ? <li className="text-blue-500"><strong>best served: {servingTemperature}</strong></li> : null}
                    </ul>
                    {description ? <p className="text-md-3">{description}</p> : null}
                    {available ? <p className="text-md-3">{available.description}</p> : null}
                </div>
            </div>
        </div>
    )
}
