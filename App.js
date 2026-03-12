import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Formulario from './components/Formulario';

const App = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    if (consultar) {
      // console.log('Realizando consulta a la API...');
      const appId = 'b6a534a0a76cc25c441e516629708afb';

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      console.log('URL de la API:', url);
    }
  }, [consultar]);

  // Funcionar para que cuando des click fuera del input, se cierre el Teclado
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
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
    backgroundColor: 'rgb(71, 149, 212)',
    flex: 1,
    justifyContent: 'center',
  },

  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
