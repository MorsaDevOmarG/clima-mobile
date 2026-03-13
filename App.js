import React, { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const { ciudad, pais } = busqueda;
  const [bgColor, guardarBgColor] = useState('rgb(71, 149, 212)');

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        // console.log('Realizando consulta a la API...');
        const appId = 'b6a534a0a76cc25c441e516629708afb';

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        console.log('URL de la API:', url);

        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          console.log('Resultado de la API:', resultado);

          guardarResultado(resultado);
          guardarConsultar(false);

          // Modifica los colores de fondo basado en la temperatura
          const kelvin = 273.15;
          const { main } = resultado;
          const actual = main.temp - kelvin;

          if (actual < 10) {
            guardarBgColor('rgb(105, 108, 149)');
          } else if (actual >= 10 && actual < 25) {
            guardarBgColor('rgb(71, 149, 212)');
          } else {
            guardarBgColor('rgb(178, 28, 28)');
          }
        } catch (error) {
          mostrarAlerta();
        }
      }
    };

    consultarClima();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otra Ciudad o País', [
      { text: 'OK' },
    ]);
  };

  // Funcionar para que cuando des click fuera del input, se cierre el Teclado
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const bgColorApp = {
    backgroundColor: bgColor,
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />

            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    // backgroundColor: 'rgb(71, 149, 212)',
    flex: 1,
    justifyContent: 'center',
  },

  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
