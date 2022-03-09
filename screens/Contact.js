import Checkbox from "expo-checkbox";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native"
import { TouchableOpacity } from "react-native";
import { react, useState } from "react";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Contact = () => {


  const [agree, setAgree] = useState(false)
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [message, setMessage] = useState("")

  let [fontsLoad, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
  });


  if (!fontsLoad) {
    return <AppLoading />;
  }


  const submit = () => {

    (!userName && !email && !phoneno && !message) ? 
    Alert.alert("Plz Fill all the Reqiured Fields") 
    :
    Alert.alert("Thank You") 


  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.textStyle}>
          You can contact Us by filling valid Details
        </Text>
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>
          Enter Name
        </Text>
        <TextInput style={styles.inputBox}
          autoCapitalize="none"
          autoComplete={false}
          value={userName}
          onChangeText={(username) => setUserName(username)}
        />

      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>
          Enter Email
        </Text>
        <TextInput style={styles.inputBox}
          autoCapitalize="none"
          autoComplete={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>
          Enter Phone
        </Text>
        <TextInput style={styles.inputBox}
          autoCapitalize="none"
          autoComplete={false}
          value={phoneno}
          onChangeText={(phoneno) => setPhoneno(phoneno)}
        />

      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>
          Enter Your Message
        </Text>
        <TextInput style={styles.inputBox}
          autoCapitalize="none"
          autoComplete={false}
          value={message}
          numberOfLines= {5}
          onChangeText={(message) => setMessage(message)}
        />

      </View>






      <View style={styles.checkboxContainer}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={(agree) ? "green" : undefined}
        />


        <Text style={styles.checkboxText}>
          I agree with the terms and conditions
        </Text>
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: (agree) ? "blue" : "grey" }]} disabled={!agree}
          onPress={submit}
        >
          <Text style={styles.loginText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  textStyle: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 5,
    fontFamily: "JosefinSans_500Medium",

  },
  inputContainer: {
    marginTop: 20,
  },
  inputBox: {
    borderColor: "black",
    height: 40,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,

  },

  checkboxContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
  },
  checkboxText: {
    marginLeft: 10,
    fontFamily: "JosefinSans_500Medium",

  },
  button: {
    backgroundColor: "blue",
    height: 40,
    width: "80%",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonArea: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  loginText: {
    color: "white",
    textAlign: "center",

  }
});

export default Contact;