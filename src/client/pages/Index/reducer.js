//constants.js
// const CHANGE_LIST = 'CHANGE_LIST';
// import fetch from 'node-fetch';
import axios from 'axios';
const GET_LIST = 'GET_LIST';
const CHANGE_NAME = 'CHANGE_NAME';

export const getMovieList = () => {
  return (dispatch) => {
    return axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
      .then((jsonResponse) => {
        dispatch(getList(jsonResponse.data.Search));
      });
  }
}

export const getList = (list) => {
  return{
    type: GET_LIST,
    list
  }
}
export const changeName = () => ({
  type: CHANGE_NAME,
})

const defaultState = {
  name: '',
  list: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_NAME:
      return{
        ...state,
        name: '张老kkkkk变'
      }
    case GET_LIST:
      return{
        ...state,
        name: '服务端',
        list: action.list
      }
    default:
      return state;
  }
}
