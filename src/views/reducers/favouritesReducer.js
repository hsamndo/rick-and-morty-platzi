export const initialStateFavourites = {
    favourites: []
}

export const favouritesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_FAVOURITES":
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case "REMOVE_FAVOURITES":
            return {
                ...state,
                favourites: state.favourites.filter(e => e !== action.payload)
            }
        default:
            return {...state};
    }
};