import './App.css';
import { Route, Switch } from 'react-router-dom';
import CategoriesNotLogin from './components/CategoriesNotLogin';
import { Main, Login, Join, MyPage, Networking } from './index';


function App() {
  return (
    <div>
      <div className="Categories">
        <CategoriesNotLogin />
      </div>
      <div className="contents">
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/networking">
            <Networking />
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
