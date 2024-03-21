import {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import GoodMenu from 'components/menu/goodMenu/GoodMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  listButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  listButton: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    borderRadius: 10,
    elevation: 10,
    opacity: 5,
    zIndex: 1000,
  },
});

export default CatalogScreen;
