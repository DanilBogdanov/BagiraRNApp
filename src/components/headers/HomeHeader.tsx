import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PHONE_NUMBER} from 'constants/general';
import {COLORS} from 'constants/theme';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.img}
          source={require('assets/img/bagira-logo.jpg')}
        />
        <Text style={styles.title}>Багира</Text>
      </View>
      <Pressable
        onPress={() => {
          Linking.openURL(`tel:${PHONE_NUMBER}`);
        }}>
        <Ionicons name="call" size={25} color={COLORS.black} />
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
    width: 60,
    height: 40,
    objectFit: 'contain',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.black,
  },
});

export default HomeHeader;
