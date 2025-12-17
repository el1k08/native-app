import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800' }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Одно из самых вкусных кофе в городе!
            </Text>
            <Text style={styles.subtitle}>
              Свежие зёрна, настоящая арабика и бережная обжарка
            </Text>
          </View>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Начать</Text>
          </TouchableOpacity>
          
          <View style={styles.indicator}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 37,
    paddingBottom: 50,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 56,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    paddingVertical: 21,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  dot: {
    width: 30,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dotActive: {
    backgroundColor: '#FFFFFF',
  },
});
