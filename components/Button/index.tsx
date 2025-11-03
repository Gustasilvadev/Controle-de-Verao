import { Pressable, StyleSheet, View, Text } from "react-native"


export const Button = () =>{
    return(
        <View>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Entrar</Text>
            </Pressable>
        </View>

        
    );
}

const styles = StyleSheet.create({

  button:{
    backgroundColor:'#7693FF',
    color:'#FFFFFF',
    padding:8,
    justifyContent:"center",
    alignItems:"center",
    width:250,
    borderRadius:30,
  },

  text: {
    color: '#01080E',
    fontWeight:"600",
  },

});