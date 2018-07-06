import { createStore, combineReducers } from 'redux';
import placesReducers from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducers
});


export default  ()=>{
    return createStore(rootReducer);
};