import { StyleSheet, Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <Image source={require('../assets/images/imagem_inicial.png')} />
      <Text>Boas Vindas!</Text>
    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#00457D',
    alignItems:"center",
    gap:40,
  }

});