import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Beer} from './Beer';

export const BeerList = () => {
    const {beerResults, isEmpty} = useContext(GlobalContext);

    useEffect(() => {
        
    }, [beerResults])

    const showResults = (list) => {
        return !list ? <p className="text-center text-md sm:text-xl text-red-600">Sorry, no results found.</p>
        : (
            <>{list.map((beer) => {
                return <Beer key={beer.id} beer={beer} />
            })}</>
        )
    }

    return (
        <div className={`beer-grid-row grid grid-cols-1 sm:grid-cols-3 gap-4`}>
            {isEmpty ? null : showResults(beerResults)}
        </div>
    )
}
