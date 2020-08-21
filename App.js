
import React from 'react';
import ContactHome from './screens/ContactHome';
import ContactDetail from './screens/ContactDetail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

function App() {
  return (
    <AppContainer />
  );
}

const RootStack = createStackNavigator(
  {
    Contacts: ContactHome,
    Details: ContactDetail
  },
  {
    initialRouteName: 'Contacts'
  }
)

const AppContainer = createAppContainer(RootStack);


export default App