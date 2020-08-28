import React, { Fragment } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { v4 as uuid } from 'uuid';

const Overview = ({
  properties,
  paddingTop,
  title,
  classDivider,
  curElement,
}) => {
  const propVal = (element) => {
    switch (element) {
      case 'Симбол':
        element = 'Symbol';
        break;
      case 'Атомска маса':
        element = 'Atomic mass';
        break;
      case 'Откриена година':
        element = 'Year discovered';
        break;
      case 'Ван дел валс радиус':
        element = 'Van del waals radius';
        break;
      case 'Стандардна состојба':
        element = 'Standard state';
        break;
      case 'Состојба на оксидација':
        element = 'Oxidation states';
        break;
      case 'Име':
        element = 'Name';
        break;
      case 'Точка на топење':
        element = 'Melting point';
        break;
      case 'Енергија за јонизација':
        element = 'Ionization energy';
        break;
      case 'Јонски радиус':
        element = 'Ion radius';
        break;
      case 'Групен блок':
        element = 'Group block';
        break;
      case 'Електронска конфигурација':
        element = 'Electronic configuration';
        break;
      case 'Електронегативност':
        element = 'Electronegativity';
        break;
      case 'Електронски афинитет':
        element = 'Electron affinity';
        break;
      case 'Атомски број':
        element = 'Atomic number';
        break;
      case 'Атомски радиус':
        element = 'Atomic radius';
        break;
      case 'Точка на вриење':
        element = 'Boiling point';
        break;
      case 'Вид на сврзување':
        element = 'Bonding type';
        break;
      case 'Срк хексадец боја':
        element = 'Cpk hex color';
        break;
      case 'Густина':
        element = 'Density';
        break;
      default:
        break;
    }
    const el = element.split(' ');
    if (el.length === 1) {
      el[0] = el[0].charAt(0).toLowerCase() + el[0].slice(1);
    } else {
      for (let i = 0; i < el.length; i++) {
        el[0] = el[0].charAt(0).toLowerCase() + el[0].slice(1);
        el[i] = el[i].charAt(0).toUpperCase() + el[i].slice(1);
      }
    }
    return el.join('');
  };

  return (
    <Fragment>
      {properties.length > 0 && (
        <Fragment>
          <Typography variant="subtitle1" gutterBottom style={paddingTop}>
            {title}
          </Typography>
          <Divider className={classDivider} />
        </Fragment>
      )}
      {properties.map((el, i) => (
        <Grid key={uuid()} item container>
          <Grid item xs={8}>
            <Typography variant="subtitle1" style={{ padding: '0 1.44rem' }}>
              {el}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">
              {curElement[`${propVal(el)}`]
                ? curElement[`${propVal(el)}`]
                : 'N/A'}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );
};
export default Overview;
