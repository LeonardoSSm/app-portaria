import React from "react"
import { View, Text, TextInput, Image , StyleSheet } from "react-native"
import { Button } from "./button/button"

export default function Login(){
  function handleButtonPress(){
    console.log("pressionou")
  }
  return(
    <View style={styles.Container}>
      <View style={styles.LogoContainer}>
        <Image style={styles.Logo}source={require('./logo.png')}/>
      </View>
      <View style={styles.TitleContainer}>
        <Text style={styles.Title}>Portaria</Text>
      </View>
      <View style={styles.FormContainer}>
        <TextInput style={styles.Login} placeholder="Login"></TextInput>
        <TextInput style={styles.Password}placeholder="Senha" secureTextEntry={true}></TextInput>
      </View>
      <View>
        <Button onPress={handleButtonPress}></Button>
      </View>
      <View></View>
    </View>
  );
}

// Style - After finish, paste in archive style.css

const blue = '#1E2CAA';
const blank = '#D9D9D9';
const gray = '#565656';
const yellow = '#E8C444';

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: blue,
    height: '100%',
    width: '100%'
  },

   LogoContainer:{
    marginTop: '30%',
    height: 200,
   },

   Logo:{
    resizeMode:'contain',
    height:150,
   },

   TitleContainer:{
    paddingBottom: 20,
   },

   Title:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color:blank,
   },

   FormContainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:'10%',
    width:'100%'
   },

   Login:{
    color:gray,
    backgroundColor:blank,
    width:'85%',
    borderRadius:5,
    
   },

   Password:{
    color:gray,
    backgroundColor:blank,
    width:'85%',
    borderRadius:5,
    marginTop:10,
   },
});