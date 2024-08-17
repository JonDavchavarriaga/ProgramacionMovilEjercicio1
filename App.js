import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.containerA}> </View>
      <View style={styles.containerB}> </View>
      <View style={styles.containerC}> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerA: {
    height: '20%',
    width: '100%',
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 10,
  },
  containerB: {
    borderRadius: 25,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%', 
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
  containerC: {
    borderRadius: 25,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    width: '100%',
    marginTop: 10,
  },
  MainContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
  }
});
