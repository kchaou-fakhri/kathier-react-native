import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@configNavigation/rootNavigation';
import {COLORS} from '@utils/colors';
import {Provider} from 'react-redux';
import {store} from '@reduxConfig/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
