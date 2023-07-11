import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload]
      };

    case REMOVE_FAV:
      let copy = state.myFavorites.filter((char) => {
        return parseInt(char.id) !== parseInt(payload);
      });
        return {
          ...state,
          myFavorites: copy,
          allCharacters: copy
        }; 
    
    case FILTER:
      let copyFilter = [...state.allCharacters];
        if (payload === "") {
          return {
            ...state,
            myFavorites: copyFilter
          };
        }
        let filterGender = copyFilter.filter((char) => {
          return char.gender === payload
        })
          return {
            ...state,
            myFavorites: filterGender
          }; 

    case ORDER:
      let copyOrder = [...state.allCharacters];
        return {
          ...state,
          myFavorites: copyOrder.sort((a,b) => {
            return payload === "A" ? a.id - b.id : b.id - a.id;
          })
        }

    default:
      return {...state};
    }
};

export default rootReducer;