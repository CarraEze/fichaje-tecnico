import { StyleSheet, View } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { RegTable } from '../components/RegTable';
import { globalStyles } from '../globalStyles';

export const LastClockOuts = (props) => {

  return (
    <View style={globalStyles.view}>
      <RegTable title="Ultimas fichadas" />
      <RegTable title="Fichadas pendientes" />
      <NavigationPress text="Nueva Fichada" onPress={() => {props.nav()}} />
    </View>
  );
};