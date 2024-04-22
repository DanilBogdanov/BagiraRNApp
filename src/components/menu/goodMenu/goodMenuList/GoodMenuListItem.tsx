import {View, Text, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'constants/theme';

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
              size={20}
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
    padding: 5,
    fontSize: 17,
    color: COLORS.secondary,
  },
  active: {
    color: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
  },
  expandedButton: {
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryLight,
    alignSelf: 'center',
    borderRadius: 10,
  },
  expanded: {
    backgroundColor: COLORS.primaryLight,
  },
});

export default GoodMenuListItem;
