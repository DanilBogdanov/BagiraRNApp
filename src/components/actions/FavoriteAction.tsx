import {Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFavoriteStore} from 'store/favoriteStore';
import {SIZES, COLORS} from 'constants/theme';

type FavoriteActionProps = {
  goodId: number;
  isFavorite: boolean;
  absolute?: boolean;
  isInactiveOutline?: boolean;
  inactiveColor?: string;
};

const FavoriteAction = ({
  goodId,
  isFavorite,
  absolute,
  isInactiveOutline,
  inactiveColor = COLORS.secondaryLight,
}: FavoriteActionProps) => {
  const addFavorite = useFavoriteStore(state => state.add);
  const removeFavorite = useFavoriteStore(state => state.remove);

  const onFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(goodId);
    } else {
      addFavorite(goodId);
    }
  };

  const iconName = !isFavorite && isInactiveOutline ? 'heart-outline' : 'heart';

  return (
    <Pressable style={[absolute && styles.absolute]} onPress={onFavoritePress}>
      <Ionicons
        name={iconName}
        size={SIZES.md}
        color={isFavorite ? COLORS.primary : inactiveColor}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: SIZES.xs,
    right: SIZES.xs,
  },
});

export default FavoriteAction;
