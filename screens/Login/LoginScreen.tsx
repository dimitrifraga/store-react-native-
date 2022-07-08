//import liraries
import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Text, View } from '../../components/UI/Themed';
import { styles } from './styles';

import Icon6 from 'react-native-vector-icons/FontAwesome5';

interface IWelcomeScreenProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const LoginScreen: React.FC<IWelcomeScreenProps> = (props) => {
  const [enableMask, setEnableMask] = useState(false);
  const toggleMask = () => setEnableMask((f) => !f);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.setVisible(false);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        onPressOut={() => props.setVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.fieldWrapper}>
            <TextInput
              style={styles.fieldInput}
              placeholder="Enter your phone"
              autoCompleteType="off"
            />
          </View>

          <View style={styles.fieldWrapper}>
            <TextInput
              style={styles.fieldInput}
              placeholder="Password"
              autoCompleteType="off"
            />
            <Text style={styles.toggle} onPress={toggleMask}>
              {enableMask ? (
                <Icon6 name="eye-slash" size={20} color="#D4D4D4" />
              ) : (
                <Icon6 name="eye" size={20} color="#D4D4D4" />
              )}
            </Text>
          </View>

          <TouchableOpacity style={styles.signinButtonModal}>
            <Text style={styles.signinButtonText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.socialButtonList}>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity style={styles.socialButtonIcon}>
                <Image
                  source={require('../../assets/images/Google.png')}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity style={styles.socialButtonIcon}>
                <Image
                  source={require('../../assets/images/Apple.png')}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity style={styles.socialButtonIcon}>
                <Image
                  source={require('../../assets/images/Facebook.png')}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fieldWrapper}>
            <Text>Not a member? </Text>
            <Text>Register now</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

// define your styles

//make this component available to the app
export default LoginScreen;
