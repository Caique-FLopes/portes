import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Image, FlatList, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('./assets/logo.png')}
            />
            <StatusBar style="auto" />
            <Pressable
                style={styles.menu}>
                <View style={styles.burguer}></View>
                <View style={styles.burguer}></View>
                <View style={styles.burguer}></View>
                <View style={styles.burguer}></View>
            </Pressable>
        </View>


        <View>
            <Text style={{color:'#fff'}}>Análise por:</Text>
            <View>
                <FlatList>
                    <TouchableOpacity>
                        <Text>Débito pago por mês</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Percentual de Êxito Total ao Longo do Tempo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Percentual de Êxito Parcelado ao Longo do Tempo</Text>
                    </TouchableOpacity>
                </FlatList>
            </View>
        </View>
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
