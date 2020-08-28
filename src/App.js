import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { ThemeProvider, CssBaseline,} from '@material-ui/core';
import theme from 'theme/theme';
import Home from 'containers/Home/Home';
import Details from 'containers/Details/Details';
import Error from 'containers/Error/Error';
import { Context } from 'context/context';

const App = () => {
  const { dataLanguage, language } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} context={dataLanguage} isSmall="true" />
              )}
            />
            <Route
              path={language ? '/element/en/:number' : '/елемент/мк/:number'}
              render={(props) => <Details {...props} context={dataLanguage} />}
            />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
