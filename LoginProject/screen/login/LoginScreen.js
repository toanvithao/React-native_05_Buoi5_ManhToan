import {Text, View, TextInput, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import { styles } from "./styles/StyleLogin";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer,faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default class LoginScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.container__header}>
              <Text style={styles.container__header_text}>Registry Now</Text>
          </View>

          <View style={styles.container_form_login}>
                <View style={styles.container_form_login_sub_input}>
                    <View style={styles.container_form_login_sub_input_textinput}>
                        <Text>Email</Text>
                        <View style={styles.container_form_login_sub_input_container}>
                            <FontAwesomeIcon icon={faEnvelope} size={20}/>
                            <TextInput placeholder="Text input"/>
                        </View>
                    </View>
                    <View style={styles.container_form_login_sub_input_textinput}>
                        <Text>Password</Text>
                        <View style={styles.container_form_login_sub_input_container}>
                            <FontAwesomeIcon icon={faLock} size={20}/>
                            <TextInput secureTextEntry placeholder="Text input"/>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={[styles.btn,styles.btn__primary,styles.marginTop]}><Text style={styles.btn__primary_text}>SIGN IN</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.btn,styles.btn__second,styles.marginTop]}><Text style={styles.btn__second_text}>SIGN UP</Text></TouchableOpacity>
          </View>          
      </View>
    )
  }
}