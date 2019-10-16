import React, {Component} from 'react';

import Routes from '~/routes';

export default class App extends Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(NavigationActions.navigate({routeName: 'Home'}));
  }
  render() {
    return (
      <Routes
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
