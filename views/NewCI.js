import { View, Text, StyleSheet, TextInput} from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { useState } from 'react';
import { globalStyles } from '../globalStyles';

export const NewClockIn = (props) => {
  const [value, setValue] = useState('');

  const handlePress = () => {
    props.setClockInOBJ({ 
      timestampz: new Date(Date.now()).toISOString(),
      location: value
    });
    props.nav();
  }
  
  return (
    <View>
      <Text style={styles.text}>Nueva Fichada</Text>
      <TextInput style={globalStyles.textInput} placeholder="Ubicacion" onChangeText={setValue} value={value}></TextInput>
      <NavigationPress text="Comenzar" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
});