import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, selectedPlace, SELECT_PLACE } from '../actions/actionTypes'
import image from '../../assets/lisbon.jpg';
const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                        key: Math.random().toString(),
                        placeName: action.placeName,
                        image
                    })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(({ key }) => {
                    return key != action.key;
                }
                )
            }

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(({ key }) => {
                    return key === action.key;
                })
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }

};

export default reducer;