const initialState={
    movies : [
      {
        name : "Dark Comedy (Black Comedy)",
        year : "1998",
        genre: "Comedy",
        description: "Dark comedy (or Black Comedy) is defined by using attitudes",
        rating : "9"
    }]
}

const MovieReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_MOVIE":
            return {
                ...state,
                movies : [...state.movies,action.payload]
            }
        default : 
             return state;
    }
}
export default MovieReducer;