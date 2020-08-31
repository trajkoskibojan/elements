import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Box,
  Typography,
  useTheme,
  TableCell,
  Divider,
} from '@material-ui/core';

import { v4 as uuid } from 'uuid';
import Label from 'components/Label/Label';
import Cell from 'components/Cell/Cell';
import {Context} from 'context/context'

const useStyles = makeStyles((theme) => ({
  rootCell: {
    verticalAlign: 'bottom',
    padding: 0,
    borderBottom: 'none',
  },
}));

const Legend = (props) => {
  const classes = useStyles();
  const theme = useTheme(); 
  const { dataLanguage } = useContext(Context);

  const emptyCellMid = [];
  const emptyCellEnd = [];
  const svgIcons = [];

  for (let i = 2; i < 12; i++) {
    svgIcons.push(
      <Label
        key={uuid()}
        icon={i}
        number={i + 1}
        label={props.label}
        margin={{ margin: '-2.8rem auto 0 auto' }}
      />
    );
  }
  emptyCellMid.push(
    <TableCell
      key={uuid()}
      classes={{ root: classes.rootCell }}
      colSpan={10}
      rowSpan={2}
    >
      <Box container component={Grid} justify="center" p="0 1.5rem">
        <Typography variant="h5" color="primary" gutterBottom>
          {dataLanguage.legend}
        </Typography>
        <Divider
          style={{
            backgroundColor: theme.palette.grey[800],
            marginBottom: '1rem',
            width: '100%',
          }}
        />
        <Grid container>
          <Grid item container direction="column" spacing={1} sm>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals} 
                    bgcolor="rgb(51, 153, 153)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.alcaliMetals}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor=" rgb(243, 243, 237)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.otherMetals}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={1} sm>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor="rgb(51, 204, 204)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.alcaliEarth}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor="rgb(204, 153, 153)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.metaloids}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={1} sm>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor=" rgb(243, 243, 237)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.transMetals}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor=" rgb(204, 102, 51)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.nonMetals}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={1} sm>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor="rgb(243, 243, 237)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.lanthanides}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor="rgb(255, 255, 255)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.halogens}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={1} sm>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor="rgb(153, 153, 153)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.actinides}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Box
                    className={props.metals}
                    bgcolor=" rgb(204, 204, 204)"
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {dataLanguage.legend}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </TableCell>
  );

  for (let i = 11; i < 16; i++) {
    emptyCellEnd.push(
      <Cell
        key={uuid()}
        cellHeight={false}
        colSpan={1}
        rowSpan={1}
      >
        <Label key={uuid()} icon={i + 1} number={i + 2} label={props.label} />
      </Cell>
    );
  }

  return (
    <Fragment>
      {emptyCellMid}
      {emptyCellEnd}
    </Fragment>
  );
};
export default Legend;
