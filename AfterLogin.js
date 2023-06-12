import { StyleSheet, Text, View,Button,Linking} from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {ref,set,update,onValue,remove} from 'firebase/database';
import {db} from './Config';


export default function Afterlogin(){
  

const openLink = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  } catch (error) {
    console.log(error);
  }
};

// Example usage:
openLink('http://127.0.0.1:5000');
}
