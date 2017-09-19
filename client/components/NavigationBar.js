/**
 * Created by koyexes on 13/09/2017.
 */
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import css from './css/NavigationBar.css'

export default class NavigationBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <NavLink className={"navbar-brand " + css.navHeader} to="/">Reddice</NavLink>
        <Route exact path="/" render={() => <NavLink className={css.signUpBtn} to="/signup" >Sign Up </NavLink> } />
      </nav>
    )
  }
};

