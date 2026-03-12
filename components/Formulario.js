import { StyleSheet, Text, TextInput, View } from 'react-native';

const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput placeholder="Ciudad" placeholderTextColor="#666" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {},
});

export default Formulario;
