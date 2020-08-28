import React, { useContext, Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 as uuid } from 'uuid';
import Cell from 'components/Cell/Cell';
import Image from 'assets/mobBackground.gif';

import { Box, Typography, Grid, useMediaQuery } from '@material-ui/core';

import Social from 'components/Social/Social';
import Legend from 'components/Legend/Legend';
import Element from 'components/Element/Element';
import { Context } from 'context/context';
import Label from 'components/Label/Label';
import SearchHome from 'components/SearchHome/SearchHome';
import { withStyles } from '@material-ui/styles';
import DialogWiki from 'components/DialogWiki/DialogWiki';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  spaceRow: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: '0.8rem 0',
    verticalAlign: 'middle',
    borderBottom: 'none',
  },
  label: {
    transform: 'rotate(90deg)',
    width: '1.875rem',
    display: 'block',
    margin: '-2.4rem auto 0 auto',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'rotate(90deg) scale(1.2) translateX(-.3rem)',
    },

    '@media(max-width:950px)': {
      width: '2rem',
    },
  },
  rootCell: {
    verticalAlign: 'bottom',
    padding: 0,
    borderBottom: 'none',
    width: 'calc((100vw - 54px) / 18)',
    height: '4.7rem',
    '@media(max-width:840px)': {
      height: '6rem',
    },
    '@media(max-width:700px)': {
      width: 'calc((100vw - 10px) / 18)',
    },
  },
  bottomCell: {
    padding: 0,
    borderBottom: 'none',
    width: '11%',
  },
  rootCellMode: {
    verticalAlign: 'bottom',
    padding: 0,
    borderBottom: 'none',
    position: 'relative',
    transition: 'all .2s ease-in-out',
    width: 'calc((100vw - 54px) / 18)',
    '@media(max-width:700px)': {
      width: 'calc((100vw - 10px) / 18)',
    },
  },
  cell: {
    width: '100%',
    height: '100%',
    position: 'relative',
    padding: '.2rem .3rem',
    transition: 'all .2s ease-in-out',
    minWidth: '36px',
    '&:hover': {
      transform: 'translateY(-.2rem)',
      position: 'relative',
      zIndex: '1200',
      background: 'black',
      border: '2px solid white',
    },
    '&:hover > div:not(:last-child)': {
      opacity: 0,
    },
    '&:hover > div:last-child': {
      color: 'white',
    },
  },
  front: {
    position: 'relative',
    zIndex: '1200',
    '@media(max-width:840px)': {
      fontSize: '4px',
    },
  },
  metals: {
    width: '1rem',
    height: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    html: {
      fontSize: '.5rem',
    },
  },
  imageMob: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: '100vh',
  },
  container: {
    background: 'transparent',
    overflow: 'unset',
    '@media(max-width:840px)': {
      marginBottom: '1rem',
    },
  },
}));

export const styles = () => ({
  '@global': {
    '@media(max-width:1280px)': {
      html: {
        fontSize: (props) => (props.isSmall ? '.7rem!important' : undefined),
      },
    },
    '@media(max-width:950px)': {
      html: {
        fontSize: (props) => (props.isSmall ? '.6rem!important' : undefined),
      },
    },
    '@media(max-width:840px)': {
      html: {
        fontSize: (props) => (props.isSmall ? '.45rem!important' : undefined),
      },
    },
  },
});

const Home = (props) => {
  const classes = useStyles(props);
  const matchesSM = useMediaQuery('(max-width:815px)');

  const { dataGet, language, dataLanguage, orientation } = useContext(Context);

  useEffect(() => {
   console.log('render');
  }, [])

  const dataCopy = [...dataGet];
  let bottomDataOne = dataCopy.splice(56, 15);
  let bottomDataTwo = dataCopy.splice(73, 15);
  const rows = [];
  const cell = [];
  const svgs = [];

  let rowCur;
  let cellCur;
  let n = -1;

  for (let i = 10; i < 20; i++) {
    svgs.push(
      <Cell key={uuid()} colSpan={1} rowSpan={1}>
        <Label label={classes.label} icon={i - 8} number={i - 7} />
      </Cell>
    );
  }

  for (let j = 0; j < dataCopy.length; j++) {
    if (j === 54) {
      cellCur = (
        <TableCell
          key={uuid()}
          classes={{ root: classes.rootCell }}
          data-text=""
        >
          <Box
            component={Grid}
            container
            direction="column"
            border={1}
            className={classes.cell}
            bgcolor="#232323"
            justify="center"
            alignItems="center"
          >
            <Box component="span" color="white" className={classes.front}>
              57-71
            </Box>
            <Typography
              variant="caption"
              align="center"
              className={classes.front}
            >
              {language ? 'Lanthanoids' : 'Лантаноиди'}
            </Typography>
          </Box>
        </TableCell>
      );
    } else if (j === 72) {
      cellCur = (
        <TableCell key={uuid()} classes={{ root: classes.rootCell }}>
          <Box
            component={Grid}
            container
            direction="column"
            border={1}
            className={classes.cell}
            bgcolor="#232323"
            justify="center"
            alignItems="center"
          >
            <Box component="span" color="white" className={classes.front}>
              89-103
            </Box>
            <Typography
              variant="caption"
              align="center"
              className={classes.front}
            >
              {language ? 'Actinoids' : 'Актиноиди'}
            </Typography>
          </Box>
        </TableCell>
      );
    } else {
      let el = j >= 55 && j < 73 ? j + 1 : j >= 73 ? j : j + 2;
      cellCur = (
        <TableCell key={uuid()} classes={{ root: classes.rootCell }}>
          <Element
            cell={classes.cell}
            label={classes.label}
            bgcolor={dataCopy[el].bgcolor}
            atomicNumber={dataCopy[el].atomicNumber}
            symbol={dataCopy[el].symbol}
            name={dataCopy[el].name}
            atomicMass={dataCopy[el].atomicMass}
            electronicConfiguration={dataCopy[el].electronicConfiguration}
            number={dataCopy[el].atomicNumber}
            selection={dataCopy[el].selection}
          />
        </TableCell>
      );
    }
    cell.push(cellCur);
  }

  cell.splice(10, 0, svgs);

  for (let i = 1; i < 8; i++) {
    if (i === 1) {
      rowCur = <TableRow key={uuid()}>{cell.slice(0, 8)}</TableRow>;
    } else if (i === 2) {
      rowCur = <TableRow key={uuid()}>{cell.slice(8, 17)}</TableRow>;
    } else {
      let tabRow = cell.slice((i - 2) * 17 + n - 1, (i - 1) * 18 - 1);
      rowCur = <TableRow key={uuid()}>{tabRow}</TableRow>;
    }
    rows.push(rowCur);
    n++;
  }

  return (
    <Fragment>
      <DialogWiki />
      {matchesSM && orientation ? (
        <Grid container className={classes.imageMob}>
          <img
            src={Image}
            alt="img"
            style={{ width: '100%', height: '50vh' }}
          />
        </Grid>
      ) : (
        <Box p={matchesSM ? '.7rem 2px 2rem 2px' : '.7rem 27px 2rem 27px'}>
          <SearchHome context={props.context} />
          <Box align="center" mt={'4rem'}>
            <Typography variant="h1">{dataLanguage.periodic}</Typography>
          </Box>
          <TableContainer
            component={Paper}
            style={{ background: 'transparent', overflow: 'unset' }}
            elevation={0}
          >
            <Table
              className={classes.table}
              aria-label="simple table"
              style={{ marginTop: '2rem', overflow: 'hidden' }}
            >
              <TableBody>
                <TableRow style={{ height: '45px' }}>
                  <Cell>
                    <Label label={classes.label} icon={0} number={1} />
                  </Cell>
                  <TableCell
                    classes={{ root: classes.rootCellMode }}
                    colSpan={16}
                    rowSpan={1}
                  ></TableCell>

                  <Cell>
                    <Label label={classes.label} icon={17} number={18} />
                  </Cell>
                </TableRow>
                <TableRow key={uuid()}>
                  <TableCell classes={{ root: classes.rootCell }}>
                    <Element
                      cell={classes.cell}
                      label={classes.label}
                      bgcolor={dataGet[0].bgcolor}
                      atomicNumber={dataGet[0].atomicNumber}
                      symbol={dataGet[0].symbol}
                      name={dataGet[0].name}
                      atomicMass={dataGet[0].atomicMass}
                      electronicConfiguration={
                        dataGet[0].electronicConfiguration
                      }
                      number={dataGet[0].atomicNumber}
                      selection={dataGet[0].selection}
                    />
                  </TableCell>
                  <Cell colSpan={1} rowSpan={1}>
                    <Label label={classes.label} icon={1} number={2} />
                  </Cell>
                  <Legend
                    rootCellMode={classes.rootCellMode}
                    label={classes.label}
                    metals={classes.metals}
                    context={props.context}
                  />
                  <TableCell classes={{ root: classes.rootCell }}>
                    <Element
                      cell={classes.cell}
                      label={classes.label}
                      bgcolor={dataGet[1].bgcolor}
                      atomicNumber={dataGet[1].atomicNumber}
                      symbol={dataGet[1].symbol}
                      name={dataGet[1].name}
                      atomicMass={dataGet[1].atomicMass}
                      electronicConfiguration={
                        dataGet[1].electronicConfiguration
                      }
                      number={dataGet[1].atomicNumber}
                      selection={dataGet[1].selection}
                    />
                  </TableCell>
                </TableRow>
                {rows}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            className={classes.container}
            elevation={0}
          >
            <Table
              className={classes.table}
              aria-label="simple table"
              style={{ marginTop: '2rem' }}
            >
              <TableBody>
                <TableRow>
                  <TableCell
                    colSpan={2}
                    rowSpan={1}
                    classes={{ root: classes.bottomCell }}
                  >
                    <Typography variant="body1" align="center">
                      {language ? 'Lanthanoids' : 'Лантаноиди'}
                    </Typography>
                  </TableCell>
                  {bottomDataOne.map((cell) => (
                    <TableCell
                      key={uuid()}
                      classes={{ root: classes.rootCell }}
                    >
                      <Element
                        cell={classes.cell}
                        label={classes.label}
                        bgcolor={cell.bgcolor}
                        atomicNumber={cell.atomicNumber}
                        symbol={cell.symbol}
                        name={cell.name}
                        atomicMass={cell.atomicMass}
                        electronicConfiguration={cell.electronicConfiguration}
                        number={cell.atomicNumber}
                        selection={cell.selection}
                      />
                    </TableCell>
                  ))}
                  <TableCell classes={{ root: classes.rootCell }}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={2}
                    rowSpan={1}
                    classes={{ root: classes.bottomCell }}
                  >
                    <Typography variant="body1" align="center">
                      {language ? 'Actinoids' : 'Актиноиди'}
                    </Typography>
                  </TableCell>
                  {bottomDataTwo.map((cell) => (
                    <TableCell
                      key={uuid()}
                      classes={{ root: classes.rootCell }}
                    >
                      <Element
                        cell={classes.cell}
                        label={classes.label}
                        bgcolor={cell.bgcolor}
                        atomicNumber={cell.atomicNumber}
                        symbol={cell.symbol}
                        name={cell.name}
                        atomicMass={cell.atomicMass}
                        electronicConfiguration={cell.electronicConfiguration}
                        number={cell.atomicNumber}
                        selection={cell.selection}
                      />
                    </TableCell>
                  ))}
                  <TableCell classes={{ root: classes.rootCell }}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Social
            left={{ left: matchesSM ? '1rem' : '-1rem' }}
            right={{ right: '-1rem' }}
            homeIcon={true}
          />
        </Box>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(Home);
