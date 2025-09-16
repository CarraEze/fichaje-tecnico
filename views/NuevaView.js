import { StyleSheet, View } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { RegTable } from '../components/RegTable';
import { globalStyles } from '../globalStyles';

export const FichadaNueva = (props) => {

  return (
    <View style={globalStyles.view}>
      <RegTable title="Ultimas fichadas" />
      <RegTable title="Fichadas pendientes" />
      <NavigationPress text="Nueva Fichada" onPress={() => {props.nav('FichadaEnCurso')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  nueva: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});