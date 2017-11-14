import { combineReducers } from 'redux';


const cities = (state = [], action) => {
    switch (action.type) {
        case 'SET_CITIES':
            return action.cities;
        default:
            return state;
    }
};

const categories = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.categories;
        default:
            return state;
    }
};

const reducers = combineReducers({
    cities,
    categories,
});

export default reducers;