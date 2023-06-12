import { StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Homepage() {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is Homepage</Text>
      <Button style={styles.btn} title="LOGIN" onPress={()=>navigation.navigate('Login',{})}></Button>
      <br></br>
      <Button style={styles.btn} title="SIGNUP" onPress={()=>navigation.navigate('Signup')}></Button>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:"red",
    margin:10,
    height:30,
    width:40,
  }
});

