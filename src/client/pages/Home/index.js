import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import withStyle from '../../styleHook';
import styles from  './style.css';
const Home = (props) => {
  withStyle(props, styles);
  return(
    <Fragment>
      <Helmet>
        <title>这是liner的技术博客，分享前端知识</title>
        <meta name='description' content='这是Liner的技术博客，分享前端知识'/>
      </Helmet>
      <div className='home'>
        Home 哈哈哈页面
      </div>
    </Fragment>
  )
}
export default Home;