import MovieReducer from './AddMovieReducer';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    movieData : MovieReducer,
    
});

export default allReducers;