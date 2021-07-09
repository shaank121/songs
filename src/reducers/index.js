import { combineReducers } from 'redux';
const songsReducer = () => {
return [
    {title: 'Mere pyare watan',duration:'4.05'},
    {title: 'BackStreet Boyrs',duration:'4.35'},
    {title: 'A;ll Star',duration:'4.65'}

];
};
const selectedSongReducer = (selectedSong = null,action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});