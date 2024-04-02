import {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import GoodMenuListItem from './GoodMenuListItem';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {useGoodMenuQuery} from 'queries/goodMenuQuery';
import {GoodMenuData} from 'types/goodMenu';

const GoodMenuList = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGroup = useGoodMenuStore(state => state.selectedGroup);
  const setSelectedGroup = useGoodMenuStore(state => state.setSelectedGroup);
  const expanded = useGoodMenuStore(state => state.expanded);
  const setExpanded = useGoodMenuStore(state => state.setExpanded);
  const {
    data: goodMenuData,
    isSuccess: isGoodMenuDataSuccess,
    isLoading: isGoodMenuDataLoading,
  } = useGoodMenuQuery(selectedAnimal);

  useEffect(() => setExpanded([]), [selectedAnimal, setExpanded]);

  const getList = (items: GoodMenuData[]) => {
    return (
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          const isExpanded = expanded.includes(item.id);

          return (
            <View style={styles.menuItem}>
              <GoodMenuListItem
                title={item.name}
                isActive={item.id === selectedGroup}
                canExpand={!!item.children}
                isExpanded={isExpanded}
                onPressTitle={() => setSelectedGroup(item.id)}
                onPressExpand={() =>
                  isExpanded
                    ? setExpanded(expanded.filter(value => value !== item.id))
                    : setExpanded([...expanded, item.id])
                }
              />
              {item.children &&
                expanded.includes(item.id) &&
                getList(item.children)}
            </View>
          );
        }}
      />
    );
  };

  return (
    <>
      {isGoodMenuDataLoading && <ActivityIndicator size={'large'} />}
      {isGoodMenuDataSuccess && getList(goodMenuData)}
    </>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    paddingLeft: 10,
    paddingBottom: 3,
    borderLeftWidth: 1,
    borderLeftColor: '#c9c9c9',
  },
  text: {
    fontSize: 16,
    color: '#c9c9c9',
  },
});

export default GoodMenuList;
