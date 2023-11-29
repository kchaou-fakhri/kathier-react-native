import {Home} from '@contexts/home/ui';
import {SplashScreen} from '@contexts/splash/adapter';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * RootNavigation is the main navigation component that defines the navigation stack.
 * It includes screens for the SplashScreen and Home.
 *
 * @returns {JSX.Element} The RootNavigation component.
 */
const RootNavigation = (): JSX.Element => {
  return (
    // Stack.Navigator contains the stack of screens in the application

    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {RootNavigation};
