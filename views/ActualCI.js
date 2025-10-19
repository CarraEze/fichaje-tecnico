import { useState } from 'react';
import { StyleSheet, View, Modal, Text, TextInput } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { globalStyles } from '../globalStyles';
import { supabase } from '../lib/supabase';

const sendCI = async (record) => { //funcion asincronica que se encarga de enviar al backend la info de la fichada
  const { error } = await supabase
    .from('clock_in')
    .insert(record)
  if (error) {
    console.log('Error inserting data:', error);
  } else {
    props.setLAstClockOuts(record);
  }
}

export const ActualClockIn = (props) => {  //componente que contiene la fichada actual
  const [modalVisible, setModalVisible] = useState(false);
  const [movil, setMovil] = useState('');

  const handleClose = () => {  //manejador para finalizar fichada
    sendCI({
      location: "pending",
      geo_latitude: 1,
      geo_longitude: 1,
      id_user: props.session.user.id,
      clock_in_ts: props.clockInTS,
      clock_out_ts: new Date(Date.now()).toISOString(),
      vehicle_id: movil
    });
    setModalVisible(false);
    props.nav();
  };

  return (
    <View style={globalStyles.view}>
      <Text style={globalStyles.textWhite}>Fichada en curso</Text>
      <TextInput placeholer="Movil" onChangeText={setMovil} value={movil}></TextInput>
      <NavigationPress text="Finalizar" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ color: 'black' }}>Estas seguro?</Text>
            <View style={styles.buttonContainer}>
              <NavigationPress text="Si" onPress={() => handleClose()} />
              <NavigationPress text="No" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f31d1d)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});