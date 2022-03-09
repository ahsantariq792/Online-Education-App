import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Courses from '../api/Courses'
// import { WorkSans_400Regular } from "@expo-google-fonts/work-sans";
// import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import {
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";


const Course = ({ navigation }) => {

    let [fontsLoaded, error] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_700Bold,
    });

    if (!fontsLoaded) {
        <AppLoading />;
    }

    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image
                            style={styles.cardImage}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.mainHeader}>{item.title}</Text>

                    <Text style={styles.description}>{item.description}</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() =>
                                navigation.navigate("CourseDetails", { courseID: item.id })
                            }>
                            <Text style={styles.buttonText}> Course Details </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )


    }

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={Courses}
            renderItem={courseCard}
        />
    );
}

const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },
    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        // fontWeight: 500,
        paddingBottom: 15,
        textAlign: "center",
        fontFamily: "JosefinSans_700Bold",
    },
    description: {
        textAlign: "left",
        fontFamily: "JosefinSans_400Regular",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        fontFamily: "JosefinSans_400Regular",
        textTransform: "capitalize",
    },
});


export default Course;



