import {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import GoodMenu from 'components/menu/goodMenu/GoodMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoodList from 'components/lists/goodList/GoodList';

const CatalogScreen = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

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
            <Ionicons color={'#fff'} size={30} name={'list-outline'} />
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
    backgroundColor: 'red',
    borderRadius: 10,
    elevation: 10,
    opacity: 15,
  },
});

export default CatalogScreen;
