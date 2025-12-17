import { Button, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Hello, Worlds!</Text>
        <View style={styles.form}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
          <Button title="Login" />
        </View>
        <Text>Resset passwords</Text>

        
      </View>
      <View style={{flexDirection: 'column', height: 300}}>
          <View style={{flexGrow: 1, backgroundColor: 'red', width: 20, height}}></View>
          <View style={{flexGrow: 2, backgroundColor: 'blue'}}></View>
          <View style={{flexGrow: 1, backgroundColor: 'green'}}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 55,
  },
  content:{
    alignItems: 'center',
    gap: 50,
  },
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  input: {
    backgroundColor: '#2E2D3D', 
  }
});
