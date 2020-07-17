import React from 'react'

export const Beer = (props) => {
    const {abv, name, description, servingTemperature, available, style, labels} = props.beer;

    return (
        <div className="beer transition shadow duration-300 ease-in-out transform hover:shadow-lg">
            <div className="text-gray-800 border-4 border-orange-900 bg-yellow-300 rounded overflow-hidden shadow-lg px-6 py-4">
                <div className="mb-2">
                    <p className="font-bold text-xl">{name}</p>
                    <p className="italic text-orange-600">{style ? style.name : null}</p>
                </div>
                <div className="beer-op">
                    { labels ? <img src={labels.medium} alt={`${name} icon`} className="w-8/12 sm:w-6/12 mx-auto px-2 py-2"  /> : null}
                    <ul>
                        {abv ? <li><strong>abv: {abv}</strong></li> : null}
                        {servingTemperature ? <li className="text-blue-500"><strong>best served: {servingTemperature}</strong></li> : null}
                    </ul>
                    {description ? <p className="text-md-3">{description}</p> : null}
                    {available ? <p className="text-md-3">{available.description}</p> : null}
                </div>
            </div>
        </div>
    )
}
