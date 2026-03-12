import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput placeholder="Ciudad" placeholderTextColor="#666" />
        </View>

        <View>
          <Picker>
            <Picker.Item label="-- Selecciona un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {},
});

export default Formulario;
