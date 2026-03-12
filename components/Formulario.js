import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Formulario = () => {
  const [animacionboton] = useState(new Animated.Value(1));

  const animacionEntrada = () => {
    console.log('Animacion entrada');
  };

  const animacionSalida = () => {
    console.log('Animacion salida');
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>

        <View>
          <Picker itemStyle={{ height: 120, backgroundColor: '#fff' }}>
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

        <TouchableWithoutFeedback
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
        >
          <View style={styles.btnBuscar}>
            <Text style={styles.textoBtn}>Buscar clima</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },

  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },

  textoBtn: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
