import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NoFoundPage from 'components/no-found-page/no-found-page';
import { AppRoute } from 'const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route path={`${AppRoute.Quest}:id`}>
            <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Main}>
          <Home />
        </Route>
        <Route path={AppRoute.NoFoundScreen}>
          <NoFoundPage />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
