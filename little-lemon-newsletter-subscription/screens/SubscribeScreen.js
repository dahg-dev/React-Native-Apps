import { View, Text, Image, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Image
          source={require('../assets/little-lemon-logo-grey.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
        <TextInput placeholder='Type your email' style={styles.emailInput} keyboardType="email-address" />
        <Pressable style={styles.subscribeButton} onPress={() => alert('Thanks for subscribing, stay tuned!')}>
          <Text style={{ color: 'white', fontSize: 16 }}>Subscribe</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
};

const styles = {
  // Add styles for the subscribe screen here
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  emailInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  subscribeButton: {
    backgroundColor: '#3E524B',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default SubscribeScreen;