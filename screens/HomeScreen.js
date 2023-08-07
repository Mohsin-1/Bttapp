import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie source={require('../assets/animations/figma wali.json')} autoPlay loop />
      </View>
      <Text style={styles.text}>Get clothing recommendations within your budget</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text >return to onboarding</Text>
           </TouchableOpacity>

      
      <TouchableOpacity onPress={()=> navigation.navigate("Display")} className="bg-orange-500 mx-auto p-3 px-12 rounded-full">
      <Text style={styles.Button}>Lets Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  lottie:{
    width: width*0.9,
    height: width,
    marginBottom: 60
  },
  text: {
    fontSize: width*0.06,
    marginBottom: 50
  },
  resetButton: {
    
    fontSize: 50,
    marginBottom: 30,
    padding: 10
    

  

  },
  Button:{
    backgroundColor: '#34d399',
    padding: 12,
    borderRadius: 2
  }
})