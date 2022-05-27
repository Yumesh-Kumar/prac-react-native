import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import CGJSActivityIndicator from './components/ActivityIndicator/ActivityIndicator';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Buttons from './components/Shared Components/Buttons';

export default function App() {
  return (
    <>
      <View style={styles.container}>
      <Header />
      <View style={{top:70}} >
  <Carousel/>
      </View>
    
    </View>
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
