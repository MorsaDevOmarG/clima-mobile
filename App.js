import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario />
        </View>
      </View>
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
