import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PHONE_NUMBER} from 'constants/general';
import {ASSETS, COLORS, SIZES} from 'constants/theme';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={ASSETS.bagiraLogo} />
        <Text style={styles.title}>Багира</Text>
      </View>
      <Pressable
        onPress={() => {
          Linking.openURL(`tel:${PHONE_NUMBER}`);
        }}>
        <Ionicons name="call" size={SIZES.m} color={COLORS.black} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 30,
    objectFit: 'contain',
  },
  title: {
    marginLeft: SIZES.s,
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.black,
  },
});

export default HomeHeader;
