import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  } from "@expo-google-fonts/josefin-sans";
  
  import { useFonts } from "expo-font";
  import AppLoading from "expo-app-loading";
  

const Home = () => {
    let [fontsLoad, error] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        light : JosefinSans_300Light,
        regular: JosefinSans_400Regular,
        medium: JosefinSans_500Medium,
        bold : JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,
    });
    
    
    if (!fontsLoad) {
        return <AppLoading />;
    }
    
    const description = "Educational app is one such platform where the students can view as well as listen to the pre-recorded lectures or chapter-wise lessons delivered by instructors. In this way, students get easy access to the classroom at any time of the day"

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Image resizeMode='contain' style={styles.imageStyle} source={require("../assets/homepage.jpg")} />
                <Text style={styles.textHeading}>Welcome to Education App</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: "100%",
        textAlign: 'center',
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 10
    },
    imageStyle: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        borderRadius: 20,
        // display: 'flex',
        // alignItems: 'stretch'
    },
    textHeading: {
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: "bold",
    },
    description: {
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: 24,
        fontFamily: "bold"
    }
})