import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface ResumoProps {
  data: {
    debito_parcelado: string;
    debito_pago: string;
    cobrado: string;
  };
}

const Resumo: React.FC<ResumoProps> = ({ data }) => {
  return (
    <>
      <View style={styles.analiseResumo}>
        <Text style={styles.textoAnaliseResumo}>Débito Parcelado: {data.debito_parcelado}</Text>
      </View>
      <View style={styles.analiseResumo}>
        <Text style={styles.textoAnaliseResumo}>Débito Pago: {data.debito_pago}</Text>
      </View>
      <View style={styles.analiseResumo}>
        <Text style={styles.textoAnaliseResumo}>Cobrado: {data.cobrado}</Text>
      </View>
    </>
  );
}

export default Resumo;
