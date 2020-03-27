/**
 * 布局文件
 */
import React from 'react';
import { Link } from 'react-router-dom';
const Layout = ({children}) => {
  return(
    <div>
      <div>
        <Link to='/index' style={{margin: 8}}>首页</Link>
        <Link to='/home' style={{margin: 8}}>Home</Link>
        <Link to='/list' style={{margin: 8}}>List</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}
export default Layout;