import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TableCell,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootCellMode: {
    verticalAlign: 'bottom',
    padding: 0,
    borderBottom: 'none',
    width: 'calc((100vw - 54px) / 18)',
    height: '35px',
    position: 'relative',
    transition: 'all .2s ease-in-out',

    '&:hover::after': {
      backgroundColor: 'rgb(120, 120, 120)',
      content: 'attr(data-text)',
      height: '10000px',
      left: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      transform: 'translateY(.55rem)',
      overflow: 'hidden',
    },
  },
}));

const Cell = (props) => {
  const classes = useStyles(props);
  return (
    <TableCell classes={{ root: classes.rootCellMode }}>
      {props.children}
    </TableCell>
  );
};
export default Cell;
