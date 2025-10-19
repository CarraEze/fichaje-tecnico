import { StyleSheet, View, Text, FlatList } from 'react-native';

export const RegTable = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{props.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        {(props.data) ?
        (<FlatList
          data={props.data}
          renderItem={({item})=> <Item title={item.location + item.clock_in_ts + item.clock_out_ts}></Item> }
          keyExtractor={item => item.id}/>)
        : (<Text style={{color: 'white', textAlign: 'center'}}>No hay datos</Text>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: '#1b1b1bff',
    borderRadius: '10%',
  },
  header: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
    headerContainer: {
        backgroundColor: '#3b3b3bff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 12,
    },
});
