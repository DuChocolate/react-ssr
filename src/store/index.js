
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import indexReducer from '../client/pages/Index/reducer';

//合并项目组件中store的reducer
const reducer = combineReducers({
  index: indexReducer
});


//服务端的store创建函数
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}
//客户端的store创建函数
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}