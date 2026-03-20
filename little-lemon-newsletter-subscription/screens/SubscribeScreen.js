import { useState } from 'react';
import { View, Text, Image, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { validateEmail } from '../utils/index.js';

/**
 * SubscribeScreen Component
 *
 * A React Native screen component that allows users to subscribe to the Little Lemon newsletter.
 * The component manages email input validation and provides visual feedback for the subscription button.
 *
 * @component
 * @returns {JSX.Element} A keyboard-avoiding view containing the subscription form with logo,
 *                        email input field, and subscribe button
 *
 * @state {boolean} buttonState - Tracks whether the subscribe button should be enabled based on email validation
 * @state {string} email - Stores the user's email input
 *
 * Features:
 * - Email validation on input change
 * - Keyboard avoidance behavior (platform-specific: padding for iOS, height for Android)
 * - Conditional button styling based on email validity
 * - Success alert on subscription
 * - Form reset after successful subscription
 *
 * @function handleEmailChange
 * @param {string} text - The email text entered by the user
 * @description Updates the email state and validates it using the validateEmail utility function
 *
 * Dependencies:
 * - validateEmail: External utility function for email format validation
 * - Little Lemon logo image asset
 */

const SubscribeScreen = () => {

  const [buttonState, setButtonState] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    setButtonState(validateEmail(text));
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Image
          source={require('../assets/little-lemon-logo-grey.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
        <TextInput placeholder='Type your email' style={styles.emailInput} keyboardType="email-address" value={email} onChangeText={handleEmailChange} />
        <Pressable onPress={() => {
          alert('Thanks for subscribing, stay tuned!');
          setEmail('');
          setButtonState(false);
        }} disabled={!buttonState} style={[styles.subscribeButtonEnabled, !buttonState && styles.subscribeButtonDisabled]}>
          <Text style={{ color: 'white', fontSize: 16 }}>Subscribe</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = {
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
  subscribeButtonEnabled: {
    backgroundColor: '#3E524B',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  subscribeButtonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  subscribeButtonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default SubscribeScreen;