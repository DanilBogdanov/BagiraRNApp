import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS, SIZES} from 'constants/theme';

type SkeletonProps = {
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  radius?: ViewStyle['borderRadius'];
};

const Skeleton = ({width, height, radius = SIZES.s}: SkeletonProps) => {
  return (
    <View style={[styles.container, {width, height, borderRadius: radius}]} />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryLight,
  },
});

export default Skeleton;
