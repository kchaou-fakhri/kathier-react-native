import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@configNavigation/rootNavigation';
import {COLORS} from '@utils/colors';
import {Provider} from 'react-redux';
import {store} from '@reduxConfig/store';
import {GlobalStyles} from '@comman/index';

const App = (): JSX.Element => {
  return (
    // Wrap the entire app with the Redux Provider to connect it with the Redux store
    <Provider store={store}>
      <SafeAreaView style={GlobalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
        {/* Use NavigationContainer to manage navigation state */}
        <NavigationContainer>
          {/* Render the root navigation component */}
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
