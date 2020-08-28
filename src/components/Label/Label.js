import React, { useContext } from 'react';

import { Context } from 'context/context';

const Label = (props) => {
  const {
    showDialog
  } = useContext(Context);
 
  return (
    <img
      onClick={() => showDialog(props.number)}
      src={require(`assets/icons/label${props.icon}.svg`)}
      alt="img_svg"
      className={props.label}
      style={props.margin}
    />
  );
};
export default Label
