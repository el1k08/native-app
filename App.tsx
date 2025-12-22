import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import { Input } from './shared/Input/input';
import { Button } from './shared/Button/Button';
import { Colors, Gaps } from './shared/tokens';
import EyeClosedIcon from './assets/icons/eye-closed';
import { ErrorNotification } from './shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';


const width = Dimensions.get('window').width;

export default function App() {
  const [error, setError] = useState<string | undefined>();

  const alert =  () => {
    setError("An error occurred!");
    setTimeout(() => setError(undefined), 3200);
  };

  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
        <View style={styles.form}>
          <Input placeholder="Email"/>
          <Input isPassword placeholder="Password" />
          <Button title="Login" onPress={alert} />
        </View>
        <Text>Resset passwords</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 55,
    backgroundColor: Colors.black,
  },
  content:{
    alignItems: 'center',
    gap: Gaps.g50,
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  logo: {
    width: width - 110,
    height: ((width - 110) / 750) * 250,
    resizeMode: 'contain',
  }
});
