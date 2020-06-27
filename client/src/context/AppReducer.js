export default (state, action) => {
    switch(action.type) {
        case 'BEER_LIST':
            return {
                ...state,
                beerResults: action.payload,
                isEmpty: false
            };
        default:
            return state;
    }
}