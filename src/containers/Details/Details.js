import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Link,
  useMediaQuery,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';

import Social from 'components/Social/Social';
import Slider from 'components/Slider/Slider';
import Element from 'components/Element/Element';
import Overview from 'components/Overview/Overview';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import { Context } from 'context/context';

const useStyles = makeStyles((theme) => ({
  card: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  },
  list: {
    margin: 0,
    padding: 0,
    color: 'white',
    fontSize: '.7rem',
  },
  cardRight: {
    backgroundColor: 'black',
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '.5rem',
  },
  details: {
    backgroundColor: 'black',
    padding: '.3rem',
    borderRadius: '5px',
  },
  column: {
    marginBottom: '2rem',
    height: 550,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      height: 450,
      alignItems: 'center',
    },
  },

  searchBox: {
    padding: '0 1rem',
    height: '439px',
    overflow: 'auto',
    color: '#00000000',
    transition: 'color 0.3s',

    '&::-webkit-scrollbar': {
      width: 14,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundClip: 'content-box',
      border: '4px solid transparent',
      borderRadius: 7,
      boxShadow: 'inset 0 0 0 10px',
    },
    '&::-webkit-scrollbar-button': {
      width: 0,
      height: 0,
      display: 'none',
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },

    '&:hover': {
      color: '#666666FF',
    },
  },

  divider: {
    backgroundColor: theme.palette.grey[800],
    marginBottom: '1rem',
    width: '100%',
  },
  cell: {
    width: '7rem',
    height: '7rem',
    padding: '.4rem',
    borderRadius: 5,
    cursor: 'text',
  },
}));

const Details = (props) => {
  const classes = useStyles();
  const matchesSM = useMediaQuery('(max-width:600px)');

  const {
    onSearchDetailsHandler,
    propEl,
    dataGet,
    dataLanguage,
    language,
  } = useContext(Context);

  const curElement = dataGet.find(
    (el) => el.atomicNumber === +props.match.params.number
  );
  const onClickHandler = (e) => {
    e.preventDefault();
  };

  let image;
  let pdfElement;
  console.log(curElement.atomicNumber);
  try {
    image = require(`assets/img/${curElement.atomicNumber}-1.jpg`);
  } catch {
    image = require(`assets/img/1-1.jpg`);
  }

  try {
    pdfElement = language
      ? require(`assets/pdf/en/${curElement.atomicNumber}.pdf`)
      : require(`assets/pdf/mk/${curElement.atomicNumber}.pdf`);
  } catch (err) {
    pdfElement = require(`assets/pdf/en/elements.pdf`);
  }

 
  return (
    <Box
      className={classes.section}
      component="section"
      p={matchesSM ? '4rem 1.5rem' : '6rem 8rem 3rem 8rem'}
    >
      <Grid container spacing={2}>
        <Grid item container direction="column" className={classes.column} md>
          <Grid item>
            <Grid item container spacing={2}>
              <Grid item style={{ position: 'relative' }}>
                <Element
                  cell={classes.cell}
                  color="white"
                  atomicNumber={curElement.atomicNumber}
                  symbol={curElement.symbol}
                  name={curElement.name}
                  atomicMass={curElement.atomicMass}
                  electronicConfiguration={curElement.electronicConfiguration}
                  onClickHandler={onClickHandler}
                />
              </Grid>
              <Grid item style={{ alignSelf: 'flex-end' }}>
                <Typography variant="h3">{curElement.name}</Typography>
              </Grid>
            </Grid>

            <Grid item container style={{ margin: '.8rem 0' }}>
              <Grid item style={{ marginRight: '4rem' }}>
                <Typography variant="subtitle2">
                  {dataLanguage.atomicMass}
                </Typography>
                <Typography variant="subtitle2">
                  {dataLanguage.density}
                </Typography>
                <Typography variant="subtitle2">
                  {dataLanguage.meltingPoint}
                </Typography>
                <Typography variant="subtitle2">
                  {dataLanguage.boilingPoint}
                </Typography>
              </Grid>
              <Grid item>
                <ul className={classes.list}>
                  <li>
                    {curElement.atomicMass ? curElement.atomicMass : 'N/A'}
                  </li>
                  <li>{curElement.density ? curElement.density : 'N/A'}</li>
                  <li>
                    {curElement.meltingPoint ? curElement.meltingPoint : 'N/A'}
                  </li>
                  <li>
                    {curElement.boilingPoint ? curElement.boilingPoint : 'N/A'}
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.card}>
            <Box height={200} display="flex" alignItems="flex-end">
              <img className={classes.image} src={image} alt="slide1" />
            </Box>
          </Grid>
        </Grid>

        <Grid item container direction="column" className={classes.column} md>
          <Grid item>
            <Grid item container direction="column">
              <Grid item className={classes.cardRight}>
                <Grid item container direction="column">
                  <Grid item style={{ alignSelf: 'flex-end' }}>
                    <MoreHorizIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {curElement.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              className={classes.details}
              justify="flex-end"
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                align="right"
                style={{ marginRight: '.3rem' }}
              >
                {dataLanguage.elDetails}
              </Typography>

              <Link
                href={pdfElement}
                target="_blank"
                style={{ display: 'flex' }}
              >
                <PictureAsPdfOutlinedIcon color="error" />
              </Link>
            </Grid>
          </Grid>
          <Slider
            images={curElement.image ? curElement.image : dataGet[0].image}
          />
        </Grid> 

        <Grid item container direction="column" md>
          <Box className={classes.card} style={{ padding: '1rem' }}>
            <Grid item>
              <TextField
                label={dataLanguage.search}
                onChange={(e) => onSearchDetailsHandler(e.target.value)}
                fullWidth
                style={{ marginBottom: '.8rem' }}
                className={classes.inputSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" style={{ fontSize: 30 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item className={classes.searchBox}>
              {propEl.map((el) => (
                <Overview
                  key={uuid()}
                  properties={Object.values(el)[0]}
                  title={Object.keys(el)}
                  paddingTop={{ paddingTop: '1rem' }}
                  classDivider={classes.divider}
                  curElement={curElement}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Social
        left={{ left: matchesSM ? 0 : '-6rem' }}
        right={{ right: matchesSM ? 0 : '-6rem' }}
      />
    </Box>
  );
};
export default Details;
