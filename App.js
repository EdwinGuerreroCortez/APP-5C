import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, Pressable, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Facebook/>
      <Cuerpo />
      <Pie />

      <StatusBar style="auto" />
    </View>
  );
}
export const Encabezado = () => {
  return (<View style={styles.encabezado}>
    <Text style={styles.texto}> </Text>
  </View>)
}
export const Cuerpo = () => {
  return (<View style={styles.cuerpo}>
    
    <Login />
    <Text style={styles.texto2}>¿Olvidaste tu contraseña?</Text>
  </View>)
}
export const Pie = () => {
  return (<View style={styles.pie}>
    <TouchableOpacity
        style={styles.button2}
        onPress={() => Alert.alert('Crear cuenta nueva')}
      >
        <Text style={styles.buttonText2}>Crear cuenta nueva</Text>
      </TouchableOpacity>
      <Image
        source={require('./assets/meta.png')}
        style={styles.imagenPie}
      />

  </View>)
}
export const Facebook = () => {
    return (
    <View style={styles.Fcaebook}>
      <Text style={styles.texto}>Español ⋁</Text>
    <Image
        source={require('./assets/facebook.png')}
        style={styles.imagenFacebook}
      />
      
    </View>
  );
};
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.input}
        placeholder="Celular o correo electrónico"
        placeholderTextColor="#9b9b9b"
        value={username.textInput}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#9b9b9b"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Logeado')}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      
    </View>
  );
};
const Funcion = () => {
  Alert.alert('Llamada desde la funcion')
}
export const Boton = () => {
  return (
    <Pressable style={styles.Boton}>
      <Text style={styles.TextB}>Click</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef7fe',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  encabezado: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',  // Cambiado de 'space-between' a 'flex-start'
    backgroundColor: '#eef7fe',
    marginTop: 20, // Puedes ajustar este valor según tus necesidades
  },
  facebook:{
    alignItems:'center',
    justifyContent: 'center',
  },
  cuerpo: {
    flex: 8,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  pie: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#eef7fe',
  },
  texto: {
    fontSize: 14,
    color: '#9c9c9c',
    textAlign: 'center',
    marginTop:3,
    marginBottom:50
  },
  texto2: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom:150
    
    
  },
  loginContainer:{
    alignItems: 'center'
  },
  input: {
    width: 350,
    margin: 5,
    borderWidth: 1.5,
    padding: 5,
    borderColor: '#CFCFCF',
    borderRadius: 12,
    height: 60,
    backgroundColor: 'white',
    color: 'gray',
  },

  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    margin: 5,
    width: 350, 
  },
  imagenPie: {
    width: 60,
    height: 60, 
    resizeMode: 'contain', 
    marginVertical: 30
  },
  imagenFacebook:{
    width: 100,
    height: 100, 
    alignSelf:'center',
    marginTop:10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    
  },
  button2:{
    backgroundColor: '#eef7fe',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    width: 350, 
    borderWidth: 1.5,
    borderColor:'#007bff',
    
    
  },
  buttonText2: {
    color: '#007bff', 
    fontSize: 18,
    
    
  },
}
);