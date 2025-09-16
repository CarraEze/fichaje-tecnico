import { StyleSheet, View } from 'react-native';
import { FichadaEnCurso } from './views/EnCursoView';
import { FichadaNueva } from './views/NuevaView'
import { useState } from 'react';
import { globalStyles } from './globalStyles';
import {useWindowDimensions} from 'react-native';

export default function App() {
  const [actualView, setActualView] = useState('FichadaNueva');
  const { height } = useWindowDimensions();
  return (
    <View style={globalStyles.view}>
      {actualView === 'FichadaEnCurso' && <FichadaEnCurso nav={setActualView} />}
      {actualView === 'FichadaNueva' && <FichadaNueva nav={setActualView} />}
    </View>
  );
}
