import {Home} from '@contexts/home';
import {SplashScreen} from '@contexts/splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = (): JSX.Element => {
  return (
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
