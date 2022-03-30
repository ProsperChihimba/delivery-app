import { StyleSheet, TouchableOpacity, Image, FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootTabScreenProps } from '../types';
import { icons, images, COLORS, FONTS, SIZES } from '../constants';
import HomePage from '../components/HomePage';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
});
