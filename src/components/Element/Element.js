import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';

import { v4 as uuid } from 'uuid';
import { Context } from 'context/context';

const useStyles = makeStyles((theme) => ({
  number: {
    fontWeight: 700,
    fontSize: '.75rem',
    lineHeight: 1,
  },
  config: {
    fontWeight: 600,
    fontSize: '.47rem',
    padding: '.08rem 0',
    lineHeight: 1,
    textAlign: 'right',
    '@media(max-width:840px)': {
      fontSize: '4px',
    },
  },
  symbol: {
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '1.3',
  },
  name: {
    fontWeight: 600,
    fontSize: '.5625rem',
    '@media(max-width:840px)': {
      fontSize: '4px',
    },
  },
  mass: {
    fontWeight: 600,
    fontSize: '.5rem',
    lineHeight: '1',
    '@media(max-width:840px)': {
      fontSize: '4px',
    },
  },
  innerSymbol: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: '998',
  },
  spanConfig: {
    display: 'block',
    marginBottom: 3,
    '@media(max-width:840px)': {
      marginBottom: 1,
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
  },
  leftSpan: {
    height: '100%',
    position: 'relative',
    zIndex: '998',
  },
}));

const Element = (props) => {
  const classes = useStyles(props);  

  const { onMouseEnterSoundHandler, language } = useContext(Context);

  const number = props.number; 

  return (
    <Link
      className={classes.link}
      to={language ? '/element/en/' + number : '/елемент/мк/' + number}
      onMouseEnter={onMouseEnterSoundHandler}
      onClick={props.onClickHandler}
    >
      <Box
        component={Grid}
        container
        border={1}
        className={props.cell}
        bgcolor={props.bgcolor}
        color={props.color}
      >
        <Grid
          item
          container
          direction="column"
          xs={9}
          justify="space-between"
          className={classes.leftSpan}
        >
          <Grid className={classes.number}>{props.atomicNumber}</Grid>
          <Grid item className={classes.mass}>
            {parseInt(props.atomicMass).toFixed(2)}
          </Grid>
        </Grid>

        <Grid item className={classes.config} xs={3}>
          {props.electronicConfiguration.split(' ').map((el) => (
            <span key={uuid()} className={classes.spanConfig}>
              {el}
            </span>
          ))}
        </Grid>
        <Grid item container direction="column" className={classes.innerSymbol}>
          <Grid item className={classes.symbol}>
            {props.symbol}
          </Grid>
          <Grid item className={classes.name}>
            {props.name}
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
export default Element;
