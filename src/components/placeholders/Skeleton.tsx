import {StyleSheet, View, ViewStyle} from 'react-native';

type SkeletonProps = {
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  radius?: ViewStyle['borderRadius'];
};

const Skeleton = ({width, height, radius = 10}: SkeletonProps) => {
  return (
    <View style={[styles.container, {width, height, borderRadius: radius}]} />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});

export default Skeleton;
