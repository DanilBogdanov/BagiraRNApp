import {View, Text, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from 'constants/theme';

type GoodMenuListItemProps = {
  title: string;
  isActive: boolean;
  canExpand: boolean;
  isExpanded: boolean;
  onPressTitle: () => void;
  onPressExpand: () => void;
};

const GoodMenuListItem = ({
  title,
  isActive,
  canExpand,
  isExpanded,
  onPressTitle,
  onPressExpand,
}: GoodMenuListItemProps) => {
  return (
    <View style={[styles.container]}>
      <Pressable onPress={onPressTitle} style={styles.shrink}>
        <Text style={[styles.text, isActive && styles.active]}>
          {title.trim()}
        </Text>
      </Pressable>
      {canExpand && (
        <Pressable onPress={onPressExpand}>
          <View style={[styles.expandedButton, isExpanded && styles.expanded]}>
            <Ionicons
              color={isExpanded ? COLORS.primary : COLORS.secondary}
              size={SIZES.m}
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shrink: {
    flexShrink: 1,
  },
  text: {
    padding: SIZES.xs,
    fontSize: SIZES.h4,
    color: COLORS.secondary,
  },
  active: {
    color: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.s,
  },
  expandedButton: {
    padding: SIZES.xs,
    marginHorizontal: SIZES.xs,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryLight,
    alignSelf: 'center',
    borderRadius: SIZES.s,
  },
  expanded: {
    backgroundColor: COLORS.primaryLight,
  },
});

export default GoodMenuListItem;
