// //异步加载组件的高阶函数

// import AsyncBundle from './async-bundle';
// import React from 'react';
// const AsyncLoader = (loader) => {
//   const asyncFn = (props) => {
//     console.log('---11---',props);
//     return <AsyncBundle load={loader} >
//       {/* {(Comp) => <Comp {...props}/>} */}
//       {(Comp) => <div>横说竖说间距</div>}

//     </AsyncBundle>
//   }
//   asyncFn.__IS_ASYNC_COMP_FLAG__ = true;
//   return asyncFn;
// }
// export default AsyncLoader;


//参考代码
import React from 'react';
import Loadable from 'react-loadable';

//loading 组件
const Loading =()=>{
    return (
        <div>loading...</div>
    ) 
}

//导出组件
// export default Loadable({
//     loader:import('../index'),
//     loading:Loading
// });

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader,loading = Loading)=>{
  return Loadable({
      loader,
      loading
  });
}