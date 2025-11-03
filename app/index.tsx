import { Button } from "../components/Button";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient
      colors={["#00457D", "#05051F"]}
      style={styles.container}
    >
      <View style={styles.context}>
        <Image source={require('../assets/images/logo.png')} />
        <Image source={require('../assets/images/imagem_inicial.png')} />
        <Text style={styles.text}>Boas-Vindas!</Text>
        <Button/>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
  },

  context:{
    marginTop:30,
    alignItems:"center",
    gap:60,
  },

  text:{
    color:'#FFFFFF',
    fontSize:20,
  },

});