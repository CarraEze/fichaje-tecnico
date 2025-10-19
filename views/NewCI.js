import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';

export const NewClockIn = (props) => {

  const handlePress = () => {
    props.setClockInTS( new Date(Date.now()).toISOString());
    props.nav();
  }
  
  return (
    <View>
      <Text style={styles.text}>Nueva Fichada</Text>
      <NavigationPress text="Comenzar" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
});