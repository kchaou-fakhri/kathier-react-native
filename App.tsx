import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@configNavigation/rootNavigation';
import {COLORS} from '@utils/colors';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
