import { ADD_PLACE, DELETE_PLACE, MAKE_CHOICE, DELETE_ALL} from './actionTypes'

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        key
    };
};

export const makeChoice = () => {
    return {
        type: MAKE_CHOICE
    }
}

// export const selectPlace = (key) => {
//     return {
//         type: SELECT_PLACE,
//         key
//     };
// };

// export const deselectPlace = () => {
//     return {
//         type: DESELECT_PLACE
//     };
// };

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}