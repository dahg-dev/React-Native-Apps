import { View, Text, Image, Pressable, } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <View />
    <View>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText} >Welcome to Little Lemon, your local Mediterranean Bistro</Text>
    </View>
    <Pressable onPress={() => navigation.navigate('Subscribe')} style={styles.button}>
      <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>;
};

const styles = {
  container:{
    flex: 1,
    justifyContent: 'space-between'
  },
  logo:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  button:{
    marginTop:20,
    marginHorizontal: 50,
    padding: 10,
    backgroundColor: '#3E524B',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 50
  }
};

export default WelcomeScreen;