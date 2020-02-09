import { GET_COCKTAILS } from '../constants/index';

const initialState = {
    cocktails : []
};

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COCKTAILS:
            return {
                ...state,
                cocktails : []
            };
        default:
            return state;
    }
}

export default cocktailsReducer;