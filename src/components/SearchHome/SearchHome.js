import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context/context';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, TextField, InputAdornment } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  searchSuggestion: {
    maxHeight: '20rem',
    textAlign: 'left',
    backgroundColor: 'black',
    border: `1px solid ${theme.palette.grey[900]}`,
    borderTop: 0,
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
  suggestions: {
    padding: '.2rem',
    '&:hover': {
      backgroundColor: theme.palette.common.iconGrey,
      cursor: 'pointer',
    },
  },
  alignSearch: {
    position: 'relative',
    zIindex: 999,
    display: 'flex',
    justifyContent: 'flex-end',

  },
}));

const SearchHome = ({ context }) => {
  const classes = useStyles();

  const ref = useRef(null);
  const [focused, setFocused] = useState(false);

  const {
    searchData,
    onSearchHomeHandler,
    resetDataHandler,
    language,
  } = useContext(Context);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setFocused(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  
  return (
    <Box align="right" mb="2rem" className={classes.alignSearch}>
      <Box width={'15rem'} style={{ position: 'absolute', zIndex: '999' }}>
        <TextField
          id="serch"
          label={context.search}
          onFocus={() => setFocused(true)}
          ref={ref}
          onChange={(e) => onSearchHomeHandler(e.target.value)}
          color="primary"
          style={{ width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="primary" style={{ fontSize: 30 }} />
              </InputAdornment>
            ),
          }}
        />
        {focused && (
          <Box p={1} className={classes.searchSuggestion}>
            {searchData.length > 0 ? (
              searchData.map((el) => (
                <Link
                  key={uuid()}
                  className={classes.link}
                  to={
                    language
                      ? '/element/en/' + el.atomicNumber
                      : '/елемент/мк/' + el.atomicNumber
                  }
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    onClick={resetDataHandler}
                    className={classes.suggestions}
                  >
                    {el.name}
                  </Typography>
                </Link>
              ))
            ) : (
              <Typography
                variant="h4"
                gutterBottom
                onClick={resetDataHandler}
                className={classes.suggestions}
              >
                ... no such a file
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default SearchHome;
