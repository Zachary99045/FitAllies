import {Redirect} from 'expo-router';
import { View, StyleSheet, Image } from 'react-native';

const StartPage = () => {
  return(

    <View style={styles.container}>
      <Image source={require('@/assets/images/logo1.png')} style={styles.icon} />
      <Redirect href="/home" />
    </View>
    
  )
};
export default StartPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  icon: {
      width: 200, 
      height: 200, 
      marginBottom: 150, 
    },
})
