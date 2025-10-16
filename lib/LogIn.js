import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';

export const InicioSesion = (props) => {
  return (
    <View>
        <Text style={styles.text}>Inicio de Sesion</Text>
        <NavigationPress text="Iniciar Sesion" onPress={props.onLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }});