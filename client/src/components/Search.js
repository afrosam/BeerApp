import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

import axios from 'axios';

export const Search = () => {
    const { getBeers } = useContext(GlobalContext);

    const handleClick = () => {
          let submit = document.getElementsByClassName('submit')[0];
          submit.classList.add('handleClick');
          setTimeout(250);
          submit.classList.remove('handleClick');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const beerName = data.get('name').trim();

        if (beerName) {
            axios.get(`/beers/${beerName}`)
            .then(res => res.data)
            .catch(err => window.alert(err))
            .then(data => {
                getBeers(data)
            });
        }
    }

    return (
      <div className="text-center mb-6 transition duration-1000 ease-in-out">
        <h3 className="text-2xl sm:text-5xl text-yellow-700 px-2">Search for a Beer</h3>
        <form onSubmit={handleSubmit}>
          <input className="shadow-md px-3 outline-none focus:bg-yellow-100 text-2md sm:text-2xl text-black rounded-l-md h-10 sm:h-12 w-8/12 sm:w-8/12" name="name" type="text" />
          <input onClick={handleClick} className="shadow-md h-10 sm:h-12 w-3/12 sm:w-2/12 text-2md sm:text-2xl text-black border-yellow-800 rounded-r-md outline-none bg-yellow-600 submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
}
