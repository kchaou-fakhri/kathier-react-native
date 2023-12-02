import {loadMetaDataSuccess} from '@contexts/splash/useCases/actionsTypes';
import {getSowraInfo} from '@services/index';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch();
export const useMetaData = async () => {
  await getSowraInfo().then(data => {
    dispatch(loadMetaDataSuccess(data));
  });
};
