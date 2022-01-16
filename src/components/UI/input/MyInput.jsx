import React from 'react';
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
  return (
    <textarea ref={ref} className={classes.myInput} {...props}/>
  );
});

export default MyInput;