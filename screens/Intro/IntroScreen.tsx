//import liraries
import React, { useState } from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Text, View } from '../../components/UI/Themed';
import { styles } from './styles';

import LoginScreen from '../Login/LoginScreen';
import SignupScreen from '../Signup/SignupScreen';

interface IWelcomeScreenProps {
  navigation: NavigationProp<any>;
}

const IntroScreen: React.FC<IWelcomeScreenProps> = (props) => {
  const { navigation } = props;

  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);

  const gotoLogin = () => {
    setLoginModalVisible(true)
  };

  const gotoSignup = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <LoginScreen visible={loginModalVisible} setVisible={setLoginModalVisible}></LoginScreen>
      <SignupScreen visible={signUpModalVisible} setVisible={setSignUpModalVisible}></SignupScreen>

      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/bg.png')} resizeMode="cover" />
        <View style={styles.headerContent}>
          <View style={styles.iconView}>
            <Image
              source={require('../../assets/images/splash_logo.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity style={styles.signinButton} onPress={gotoLogin}>
            <Text style={styles.signinButtonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={gotoSignup}>
            <Text style={styles.signupButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default IntroScreen;
