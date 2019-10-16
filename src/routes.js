import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from '~/Pages/Home';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);

export default Routes;
