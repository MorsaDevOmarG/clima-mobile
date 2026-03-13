import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Clima = ({ resultado }) => {
  console.log('Resultado en Clima:', resultado);

  const { name, main } = resultado;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <View style={styles.clima}>
      <Text style={[styles.texto, styles.actual]}>
        {/* {parseInt(main.temp - kelvin)}°C */}
        {parseInt(main.temp - kelvin)}
        <Text style={styles.temperatura}>&#x2103;</Text>
      </Text>

      <View style={styles.temperaturas}>
        <Text style={styles.texto}>
          Min {parseInt(main.temp_min - kelvin)}°C
        </Text>
        <Text style={styles.texto}>
          Max {parseInt(main.temp_max - kelvin)}°C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold',
  },
  temperatura: {
    fontSize: 24,
    fontWeight: 'normal',
  },
  temperaturas: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Clima;
