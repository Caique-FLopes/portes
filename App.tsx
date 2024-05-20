import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Resumo from './src/components/Resumo/Resumo';
import styles from './style';

interface Data {
  debito_parcelado: string;
  debito_pago: string;
  cobrado: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/dados')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao recuperar os dados.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error('Houve um erro:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Analise Compesa</Text>
      <View style={styles.containerResumo}>
        {data && <Resumo data={data} />}
      </View>
    </View>
  );
}

export default App;
