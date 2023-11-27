import {SplashScreen} from '@contexts/splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {RootNavigation};
