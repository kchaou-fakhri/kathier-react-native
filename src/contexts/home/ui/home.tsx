import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '@comman/index';
import {Header} from '@components/header/header';
import {STRINGS} from '@mainAssets/index';
import {useState} from 'react';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
