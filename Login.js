

import { StyleSheet, Text, View,Button } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {ref,set,update,onValue,remove} from 'firebase/database';
import {db} from './Config';

export default function Login({route}) {
const navigation=useNavigation();
const {Username, Password, EmailId,MobileNO} = route.params;
const [Lun, setLun] = useState("")
const [LPwd, setLPwd] = useState("")
const [Msg, setMsg] = useState("")
const [ErrorMsg, setErrorMsg] = useState("")

const [FbPass, setFbPass] = useState()


function checkusername()
{
const starCountRef = ref(db,'users/'+Lun);
onValue(starCountRef,(snapshot)=>
{
const data = snapshot.val();
if(data == null)
{
  setMsg ("Wrong Username")
}
else
{
setFbPass(data.Password);
if(FbPass == LPwd)
{
  navigation.navigate('Afterlogin',{})
  setMsg("")
}else{
  setMsg("Wrong Password")
}
}
}
);
}

return (
<View style={styles.container}>
  <View style={styles.background}></View>
  <View style= {styles.card}>
<Text style={styles.title}>Login Now</Text>
<TextInput 
style={styles.input}label="UserName" 
onChangeText={value=>setLun(value)}
/>
<TextInput 
style={styles.input}
label="Password" 
secureTextEntry
onChangeText={value=>setLPwd(value)}
/>
<Button style={styles.btn} title="LOGIN" onPress={checkusername}></Button>
</View>
</View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width:'30%',
    height:40,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom right, #ffbb00, #f38b00, #d93c00, #8b0000)',
    opacity: 0.8,
  },
  card: {
    width: '55%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input:{
    width:"80%",
    borderWidth:1,
    borderRadius:5,
    padding:5,
    margin:8,
    color:"#fff"
  },
});

