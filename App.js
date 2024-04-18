import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default function App() {
  fetch('http://127.0.0.1:5000/api/dados')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados.');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.cobrado);
    console.log(data.debito_pago);
    console.log(data.debito_parcelado);
  })
  .catch(error => {
    console.error('Houve um erro:', error);
  });
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031020',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  menu:{
  },
  burguer:{
    backgroundColor: '#C4AD60',
    height: 5,
    width: 25,
    marginBottom: 3,
    borderRadius: 3,
  }
});
