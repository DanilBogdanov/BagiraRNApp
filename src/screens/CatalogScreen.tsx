import {Pressable, StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoodMenu from 'components/menu/goodMenu/GoodMenu';
import GoodList from 'components/lists/goodList/GoodList';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {COLORS, SIZES} from 'constants/theme';

const CatalogScreen = () => {
  const isDrawerOpened = useGoodMenuStore(state => state.isDrawerOpened);
  const setIsDrawerOpened = useGoodMenuStore(state => state.setIsDrawerOpened);

  return (
    <Drawer
      open={isDrawerOpened}
      onOpen={() => setIsDrawerOpened(true)}
      onClose={() => setIsDrawerOpened(false)}
      renderDrawerContent={() => {
        return <GoodMenu />;
      }}>
      <View>
        <Pressable
          style={styles.listButtonContainer}
          onPress={() => setIsDrawerOpened(true)}>
          <View style={styles.listButton}>
            <Ionicons color={COLORS.white} size={30} name={'list-outline'} />
          </View>
        </Pressable>
        <GoodList />
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  listButtonContainer: {
    position: 'absolute',
    left: SIZES.sm,
    top: SIZES.sm,
    zIndex: 10,
  },
  listButton: {
    padding: SIZES.s,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: SIZES.s,
  },
});

export default CatalogScreen;
