import React from 'react';
import './App.scss';
import { Main } from './components/';
import { Home } from './pages';

//redux
import { connect } from 'react-redux';
import setSweaters from './actions/sweaters';

//react-router
import {Route, BrowserRouter, Switch, Redirect, withRouter} from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/sweatshots.json').then((resp) => resp.json()).then(json => {
      this.props.setSweaters(json.sweatshots.map(sweat => sweat))
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/main' component={ Main } />
            <Route path='/home' component = { Home } />
            <Redirect to="/main" />
          </Switch>
        </div>
      </BrowserRouter>
  );
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setSweaters: (items) => dispatch(setSweaters(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
