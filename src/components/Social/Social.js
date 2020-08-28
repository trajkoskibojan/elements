import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Fab,
  Typography,
  Link,
  useMediaQuery,
} from '@material-ui/core';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Github from 'assets/icons/github-logo.svg';
import Linkedin from 'assets/icons/linkedin-logo.svg';
import { useContext } from 'react';
import { Context } from 'context/context';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: '.2rem',
    backgroundColor: '#232323',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
  leftIcon: {
    position: 'absolute',
    margin: ' 1rem',
  },
  rightIcon: {
    position: 'absolute',
    margin: ' 1rem',
  },
  sizesLG: {
    width: '1.5em',
    height: '1.5em',
  },
  sizesMD: {
    width: '1.8em',
    height: '1.8em',
  },
  sizesSM: {
    width: '2em',
    height: '2em',
  },
  linkBox: {
    height: '1.3rem',
    width: '1.3rem',
  },
}));

const Social = (props) => {
  const classes = useStyles();
  const { play, onPlayHandler, language, changeLanguage } = useContext(Context);
  const matchesLG = useMediaQuery('(max-width:1280px)');
  const matchesMD = useMediaQuery('(max-width:950px)');
  const matchesSM = useMediaQuery('(max-width:840px)');

  const classIcon = clsx({
    [classes.sizesLG]: matchesLG,
    [classes.sizesMD]: matchesMD,
    [classes.sizesSM]: matchesSM,
  });

  return (
    <Box position="relative">
      <Grid item className={classes.leftIcon} style={props.left}>
        <Fab size="small" className={classes.margin}>
          <Link
            href="https://github.com/trajkoskibojan"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={[classes.linkBox, props.homeIcon && classIcon].join(' ')}
          >
            <img src={Github} alt="github" />
          </Link>
        </Fab>
        <Fab size="small" className={classes.margin}>
          <Link
            href="https://www.linkedin.com/in/bojan-trajkoski/"
            target="_blank"
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={[classes.linkBox, props.homeIcon && classIcon].join(' ')}
          >
            <img src={Linkedin} alt="linkedin" />
          </Link>
        </Fab>
        <Fab size="small" className={classes.margin}>
          <Link
            href="https://bojantrajkoski.com/"
            target="_blank"
            style={{ display: 'flex' }}
          >
            <MoreHorizIcon
              color="primary"
              className={props.homeIcon && classIcon}
            />
          </Link>
        </Fab>
      </Grid>
      <Grid item className={classes.rightIcon} style={props.right}>
        <Fab size="small" className={classes.margin} onClick={onPlayHandler}>
          {play ? (
            <VolumeUpIcon
              color="primary"
              className={props.homeIcon && classIcon}
            />
          ) : (
            <VolumeOffIcon
              color="primary"
              className={props.homeIcon && classIcon}
            />
          )}
        </Fab>
        <Fab
          size="small"
          className={classes.margin}
          onClick={() => changeLanguage(props)}
        >
          <Typography color="primary" style={{ fontSize: 16 }}>
            {language ? 'EN' : 'MK'}
          </Typography>
        </Fab>
      </Grid>
    </Box>
  );
};
export default withRouter(Social);
