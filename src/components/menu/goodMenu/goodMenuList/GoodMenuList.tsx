import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import GoodMenuListItem from './GoodMenuListItem';
import {useGoodMenuStore} from 'store/goodMenuStore';
import {useGoodMenuQuery} from 'queries/goodMenuQuery';
import {GoodMenuData} from 'types/goodMenu';
import {COLORS} from 'constants/theme';

const GoodMenuList = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGroup = useGoodMenuStore(state => state.selectedGoodGroup);
  const setSelectedGroup = useGoodMenuStore(
    state => state.setSelectedGoodGroup,
  );
  const expanded = useGoodMenuStore(state => state.expanded);
  const setExpanded = useGoodMenuStore(state => state.setExpanded);
  const {
    data: goodMenuData,
    isSuccess: isGoodMenuDataSuccess,
    isLoading: isGoodMenuDataLoading,
  } = useGoodMenuQuery(selectedAnimal);

  const getList = (items: GoodMenuData[]) => {
    return (
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        fadingEdgeLength={20}
        renderItem={({item}) => {
          const isExpanded = expanded.includes(item.id);

          return (
            <View style={styles.menuItem}>
              <GoodMenuListItem
                title={item.name}
                isActive={item.id === selectedGroup?.id}
                canExpand={!!item.children}
                isExpanded={isExpanded}
                onPressTitle={() =>
                  setSelectedGroup({id: item.id, name: item.name})
                }
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
    borderLeftWidth: 0.5,
    borderLeftColor: COLORS.secondary,
  },
});

export default GoodMenuList;
