import React, { useState } from 'react';
const withStyle = (props, styles) => {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss());
  }
}
export default withStyle;