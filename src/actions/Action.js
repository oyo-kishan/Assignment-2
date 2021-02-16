const addMovies=(data)=>{
    return {
        type : "ADD_MOVIE",
        payload:data
    }
}

export const deleteMovies=(id)=>{
    console.log("delete movie called");
    return{
        type : "DELETE_MOVIE",
        payload : id
    }
}

export  default addMovies;
