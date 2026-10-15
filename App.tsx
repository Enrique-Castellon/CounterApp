import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,TouchableOpacity } from 'react-native';
import { useState } from 'react'
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(10)
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>Hola Imbecil</Text>
      <Text>{count}</Text>
      {/*
      <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.floatingButton2} onLongPress={() => setCount(10)}>
        <Text>-1</Text>
      </TouchableOpacity>*/}
      <FAB label="+1" onPress={() => setCount(count + 1)} onLongPress={() => setCount(0)}/>
      <FAB label="-1" onPress={() => setCount(count - 1)} onLongPress={() => setCount(10)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ae0012',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge:{
    fontSize: 40,
    fontWeight: 'thin',
    color: 'white'
  },
  floatingButton2:{
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#ff00dd',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4
  }
});
