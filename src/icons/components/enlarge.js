import React from 'react';
import Icon from './icon';

function Enlarge(props){
  return(
    <Icon {...props}>

      <title>enlarge</title>
      <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
      <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
      <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
      <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
    </Icon>
  )
}

export default Enlarge