import { View, TextInput, FlatList, StyleSheet } from 'react-native';
//TERMINAR ESTO PARA HACER BUSCADOR DE UBICACIONES
export const SearchBar = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ubicacion..."
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}