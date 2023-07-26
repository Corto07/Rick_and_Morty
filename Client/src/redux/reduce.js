import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../redux/action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

function reducer (state = initialState, action, payload){
  switch(action.type){
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload }

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

export default reducer;