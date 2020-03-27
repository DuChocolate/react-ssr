import React, { Fragment } from 'react';
import withStyle from '../../styleHook';
import { Helmet } from 'react-helmet';

import styles from  './style.css';

const List = (props) => {
  withStyle(props, styles);

  return(
    <Fragment>
    <Helmet>
      <title>这是liner的技术博客，list页面</title>
      <meta name='description' content='这是Liner的技术博客，list页面哈哈识'/>
    </Helmet>
    <div className='list'>
      List列表页
    </div>
    </Fragment>
  )
}
export default List;