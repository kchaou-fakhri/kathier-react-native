import {ComponentsState} from '@comman/progress/configuration/state';
import {SplashState} from '@contexts/splash/configuration/state';

export interface AppState {
  componentsState: ComponentsState;
  splashState: SplashState;
}
