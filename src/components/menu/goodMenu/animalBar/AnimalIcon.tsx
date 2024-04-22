import {Pressable, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from 'constants/theme';

type AnimalIconProps = {
  name: string;
  title: string;
  active: boolean;
  onPress: () => void;
};

const AnimalIcon = ({name, title, active, onPress}: AnimalIconProps) => {
  return (
    <Pressable
      style={[styles.container, active && styles.active]}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={name}
        size={30}
        color={active ? COLORS.primary : COLORS.secondary}
      />
      <Text style={[styles.text, active && styles.active]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 60,
    padding: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {color: COLORS.secondary},
  active: {color: COLORS.primary, backgroundColor: COLORS.primaryLight},
});

export default AnimalIcon;
