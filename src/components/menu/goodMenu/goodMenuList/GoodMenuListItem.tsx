import {View, Text, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              color={isExpanded ? '#4F8EF7' : '#c9c9c9'}
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
    color: '#999',
  },
  active: {
    color: '#4F8EF7',
    backgroundColor: '#f0f6ff',
    borderRadius: 10,
  },
  expandedButton: {
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
    alignSelf: 'center',
    borderRadius: 10,
  },
  expanded: {
    backgroundColor: '#f0f6ff',
  },
});

export default GoodMenuListItem;
