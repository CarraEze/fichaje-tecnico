import { useState } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { NavigationPress } from '../components/NavigationPress';
import { globalStyles } from '../globalStyles';

export const FichadaEnCurso = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
    props.nav('FichadaNueva');
  };

  return (
    <View style={globalStyles.view}>
      <NavigationPress text="Finalizar Fichada" onPress={() => setModalVisible(true)} />
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