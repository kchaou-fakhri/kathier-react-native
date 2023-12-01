import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '@comman/index';
import {Header} from '@components/header/header';
import {STRINGS} from '@mainAssets/index';
import {useEffect, useState} from 'react';
import {Swiper} from '@components/swiper/swiper';
import {COLORS} from '@utils/colors';
import {ListItems} from '@components/index';
import {getSowraInfo} from '@services/index';
import {getDeviceDimensions} from '@utils/deviceInfo';

export const Home = () => {
  const [isMarked, setIsMarked] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await getSowraInfo();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <View>
        <Header title={STRINGS.home}>
          <Header.leftComponent
            isSearch={true}
            isMarked={isMarked}
            onBookMarkClicked={() => {
              setIsMarked(!isMarked);
            }}
          />
        </Header>
      </View>
      <View style={styles.swiperContainer}>
        <Swiper
          items={[STRINGS.qor2en, STRINGS.eya, STRINGS.sowra]}
          onEyaPressed={() => {}}
          onSowraPressed={() => {}}
          onQor2enPressed={() => {}}
        />
      </View>
      <View style={[GlobalStyles.container, styles.sowraContainer]}>
        {data.length > 0 ? <ListItems items={data} /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  swiperContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sowraContainer: {
    backgroundColor: COLORS.white,
    marginTop: 25,
  },
});
