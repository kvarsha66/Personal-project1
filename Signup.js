
import { useState } from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import {  TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {getDatabase,ref,set,update,onValue,remove} from "firebase/database";
import {db} from './Config';

export default function Signup({}) {
  const navigation=useNavigation();
  const [name,setName]=useState(" ")
  const [nameErr,setNameErr]=useState("")
  const [pwd,setPwd]=useState(" ")
  const [PwdErr,setPwdErr]=useState("")
  const [Eid,setEid]=useState(" ")
  const [EidErr,setEidErr]=useState("")
  const [MobNo,setMobNo]=useState(" ")
  const [MobNoErr,setMobNoErr]=useState("")
  const [Msg,setMsgErr]=useState("")

  function storedata()
  {
    update(ref(db,'users/'+name),{
      Username:name,
      Password:pwd,
      EmailID:Eid,
      MobileNo:MobNo
    }).then(()=>
    {
      alert("Data is updated");
    })
  }

  

  const handleSubmit=()=>{
      if(name.length==0){
        setNameErr("Username Required")
      }
      else if(/[0-9]/.test(name)){
        setNameErr("Enter proper name")
      }
      else{
        setNameErr("")
      }
      if(pwd.length != 8){
        setPwdErr("Password must be  8 Character")
      }
      else if((/[0-9]/.test(pwd) == false)||(/[A-Z]/.test(pwd) == false)|| (/[a-z]/.test(pwd) == false))
      {
        setPwdErr("Password must be  1 UpperCase 1 LowerCase and 1 Digit")
      }else{
        setPwdErr("")
      }

      if(Eid.length == 0){
        setEidErr("Enter Email id")
      }
      else if((Eid[0] == " ")||(Eid[0] == '@')||(Eid.includes("@") == false))
      {
        setEidErr("Enter Valid Email Id")
      }else{
        setEidErr("")
      }
      if(MobNo.length != 10){
        setMobNoErr("Enter 10 Digits Mobile No")
      }
      
      else{
        setMobNoErr("")
        if((nameErr.length == 0)&&(PwdErr.length == 0)&&(EidErr.length == 0)&&(MobNoErr.length == 0))
        {
        setMsgErr("Account is successfully created")
        navigation.navigate('Login',{})
        storedata();
        }
      }
    }
  return (
    
    <View style={styles.container}>
      <View style = {styles.background}></View>
      <Text style={styles.title}>Create New Account</Text>
      <TextInput style={styles.input}label="UserName" 
      left={<TextInput.Icon icon="account"/>}
      onChangeText={value=>setName(value)}       
      />
       <Text style={styles.err}>{nameErr}</Text>
      <TextInput style={styles.input}
      label="Password" 
      secureTextEntry left={<TextInput.Icon icon="form-textbox-password"/>} 
      onChangeText = {value => setPwd(value)}
      />
      <Text style={styles.err}>{PwdErr}</Text>

      <TextInput style={styles.input}
      label="E-mail" 
      left={<TextInput.Icon icon="mail"/>}
      onChangeText={value=>setEid(value)} />
      <Text style={styles.err}>{EidErr}</Text>
      <TextInput style={styles.input}
      label="Contact" 
      left={<TextInput.Icon icon="phone"/>}
      onChangeText={value=>setMobNo(value)}/>
      <Text style={styles.err}>{MobNoErr}</Text>
      <Button style={styles.btn} title="SUBMIT" onPress={handleSubmit}></Button>
      <Text style={styles.err}>{Msg}</Text>
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
    width:'10%',
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
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input:{
    width:"60%",
    borderWidth:1,
    borderRadius:5,
    padding:5,
    margin:8,
    color:"#fff"
  },
});

