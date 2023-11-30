import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '@comman/index';
import {Header} from '@components/header/header';
import {STRINGS} from '@mainAssets/index';
import {useState} from 'react';
import {Swiper} from '@components/swiper/swiper';
import {COLORS} from '@utils/colors';

export const Home = () => {
  const [isMarked, setIsMarked] = useState(false);
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
});
