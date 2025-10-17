import { StyleSheet, View } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { RegTable } from '../components/RegTable';
import { globalStyles } from '../globalStyles';
import { supabase } from '../lib/supabase';

export const LastClockOuts = (props) => {

  return (
    <View style={globalStyles.view}>
      <RegTable title="Ultimas fichadas" />
      <RegTable title="Fichadas pendientes" />
      <NavigationPress text="Nueva Fichada" onPress={() => {props.nav()}} />
      <NavigationPress text="Log out" onPress={() => {supabase.auth.signOut()}} />
      
    </View>
  );
};