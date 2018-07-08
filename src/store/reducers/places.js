import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE, MAKE_CHOICE, DELETE_ALL } from '../actions/actionTypes'
import image from '../../assets/lisbon.jpg';
const initialState = {
    places: [],
    selectedPlace: null
}

const selectRandomPlace = (places) => {
    let size = places.length;
    let randomPlace = 0;
    if (size > 0) {
        randomPlace = Math.floor(Math.random() * (size));
    } else {
        return null;
    }
    return places[randomPlace]
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
            };

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(({ key }) => {
                    return key === action.key;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        case MAKE_CHOICE:
            return {
                ...state,
                selectedPlace: selectRandomPlace(state.places)
            };
        case DELETE_ALL:
        return {
            ...state,
            places: []
        }
        default:
            return state;
    }

};

export default reducer;