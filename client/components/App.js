/**
 * Created by koyexes on 13/09/2017.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Greetings from './Greetings';
import SignUpPage from './SignUpPage';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavigationBar/>
        <div className="container">
          <FlashMessagesList />
          <Switch>
            <Route path="/greetings" component={Greetings}/>
            <Route path="/signup" component={SignUpPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;