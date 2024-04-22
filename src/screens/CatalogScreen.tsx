import {Pressable, StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoodMenu from 'components/menu/goodMenu/GoodMenu';
import GoodList from 'components/lists/goodList/GoodList';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {COLORS} from 'constants/theme';

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
    left: 20,
    top: 20,
    zIndex: 10,
  },
  listButton: {
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 10,
    elevation: 10,
    opacity: 15,
  },
});

export default CatalogScreen;
