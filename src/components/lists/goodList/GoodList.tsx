import GoodCard from 'components/cards/GoodCard';
import {useGoodsQuery} from 'queries/goodQuery';
import {FlatList, StyleSheet} from 'react-native';
import {useGoodMenuStore} from 'store/goodMenuStore';

const GoodList = () => {
  const selectedAnimal = useGoodMenuStore(state => state.selectedAnimal);
  const selectedGroup = useGoodMenuStore(state => state.selectedGroup);

  const getRequest = () => {
    if (selectedGroup === null) {
      return {};
    }

    return {groupId: selectedGroup};
  };

  const {data: goodResponse, isSuccess: isGoodsSuccess} = useGoodsQuery(
    selectedAnimal,
    getRequest(),
  );

  return (
    <>
      {isGoodsSuccess && (
        <FlatList
          data={goodResponse.results}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <GoodCard goodData={item} />}
          numColumns={2}
          columnWrapperStyle={styles.listRow}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listRow: {
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default GoodList;
