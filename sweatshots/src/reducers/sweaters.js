const initialState = {
    items: [],
    isLoaded: false
}

const sweaters = (state = initialState, action) => {
    if (action.type === 'SET_SWEATS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state;
}

export default sweaters;