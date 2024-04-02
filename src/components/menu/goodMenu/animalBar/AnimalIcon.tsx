import {Pressable, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        color={active ? '#4F8EF7' : '#c9c9c9'}
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
  text: {color: '#c9c9c9'},
  active: {color: '#4F8EF7', backgroundColor: '#f0f6ff'},
});

export default AnimalIcon;
