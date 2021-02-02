import React, {useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Text,
  Button,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import RadioButton from 'react-native-radio-button';
import CheckBox from 'react-native-check-box';
// import {Picker} from '@react-native-picker/picker';

const Login = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Sign up with mobile
        </Text>
      </View>
      <Image
        source={require('../image/con.png')}
        style={{
          width: 90,
          height: 100,
          margin: 30,
          marginBottom: 30,
          flexDirection: 'row',
          alignSelf: 'center',
        }}
      />
      <View style={{alignSelf: 'auto', marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
          }}>
          <Text style={{fontSize: 26, fontWeight: '400', marginBottom: 10}}>
            Full Name
          </Text>
          <TextInput
            placeholder="John Appleseed"
            style={{fontSize: 26, marginLeft: 25, marginBottom: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '400',
              marginBottom: 10,
              marginTop: 10,
            }}>
            Region
          </Text>
          <Text style={{marginLeft: 60}}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                {label: 'India', value: 'india'},
                {label: 'Nepal', value: 'nepal'},
                {label: 'China', value: 'china'},
              ]}></RNPickerSelect>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            fontWeight: '400',
            marginBottom: 10,
            marginTop: 10,
            borderBottomColor: '#E8E8E8',
          }}>
          <Text style={styles.phonestyle}>+91</Text>

          <TextInput
            placeholder="Mobile number"
            // placeholderTextColor="#666666"
            style={{
              fontSize: 26,
              marginLeft: -11,
              marginBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            fontWeight: '500',
            borderBottomColor: '#E8E8E8',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 26, fontWeight: '400', marginBottom: 10}}>
            Password
          </Text>
          <TextInput
            placeholder="Set a password"
            // placeholderTextColor="#666666"
            style={{fontSize: 26, marginLeft: 25, marginBottom: 10}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            style={{
              marginTop: 30,
              marginLeft: 30,
            }}
            onClick={() => {
              setToggleCheckBox(!toggleCheckBox);
            }}
            isChecked={toggleCheckBox}
            leftText={'CheckBox'}
          />

          <Text style={{textAlign: 'center', marginTop: 30, marginLeft: 4}}>
            I have read and accept the Terms of Service
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 10,
            paddingHorizontal: 1,
            marginTop: 10,
          }}>
          <Button title="Next" disabled />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  phonestyle: {
    fontSize: 26,
    marginBottom: 2,
    marginRight: 105,
    borderColor: '#E8E8E8',
  },
});
