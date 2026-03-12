import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Formulario = ({ busqueda, guardarBusqueda }) => {
  const { ciudad, pais } = busqueda;

  const [animacionboton] = useState(new Animated.Value(1));

  const consultarClima = () => {
    console.log('Consultando clima...');

    if (pais.trim() === '' || ciudad.trim() === '') {
      // console.log('Error: Ambos campos son obligatorios');

      Alert.alert('Error', 'Agrega un Ciudad y País para la búsqueda', [
        { text: 'OK' },
      ]);
      return;
    }
  };

  const animacionEntrada = () => {
    console.log('Animacion entrada');

    Animated.spring(animacionboton, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animacionSalida = () => {
    console.log('Animacion salida');

    Animated.spring(animacionboton, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{ scale: animacionboton }],
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
            value={ciudad}
            onChangeText={ciudad => guardarBusqueda({ ...busqueda, ciudad })}
          />
        </View>

        <View>
          <Picker
            selectedValue={pais}
            onValueChange={pais => guardarBusqueda({ ...busqueda, pais })}
            itemStyle={{ height: 120, backgroundColor: '#fff' }}
          >
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
          onPress={() => consultarClima()}
        >
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBtn}>Buscar clima</Text>
          </Animated.View>
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
