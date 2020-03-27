
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getMovieList, getList,changeName} from './reducer';
// import fetch from 'node-fetch';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

const Index = (props) => {

  useEffect(() => {
    //判断当前的数据是否已经从服务端获取
    //要知道，如果是首次渲染的时候就渲染了这个组件，则不会重复发请求
    //若首次渲染页面的时候未将这个组件渲染出来，则一定要执行异步请求的代码
    //这两种情况对于同一组件是都是有可能发生的
    if (!props.data.list.length) {
      props.getMovieList();
    }
  },[]);

  return(
    <div>
      <p>Indexhei页面</p>
      <p onClick={props.changeName}>
        {props.data.name}
      </p>
      {props.data.list.map((item,index) => <p key={index}>{`${item.Title}:${item.Year}`}</p>)}
    </div>
  )
}
Index.loadData = (store) => {
  return store.dispatch(getMovieList());
}
const mapStateToProps = state => {
  return{
    data: state.index,
  }
}

const mapDispatchToProps = dispatch => ({
  getMovieList(){
    dispatch(getMovieList())
  },
  getList(list){
    dispatch(getList(list))
  },
  changeName() {
    dispatch(changeName());
  }
})
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Index);