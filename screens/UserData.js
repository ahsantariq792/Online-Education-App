import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";



const UserData = () => {

  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  let [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={{ uri: item.image }}
              resizeMode="contain"
            />
          </View>

          <View style={styles.cardText}>
            <Text style={styles.textStyle}>ID: {item?.id}</Text>
            <Text style={styles.textStyle}>Name: {item?.name}</Text>
            <Text style={styles.textStyle}>Email: {item?.email}</Text>
            <Text style={styles.textStyle}>Mobile Number: {item?.mobile}</Text>
            <Text style={styles.textStyle}>Website: {item?.website}</Text>
            <Text style={styles.textStyle}>Description: {item?.description}</Text>
          </View>

        </View>
      </View>

    )
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData}
        renderItem={showUserData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  cardContainer: {
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
    paddingBottom: 15,
    textAlign: "center",
  },
  textStyle: {
    textAlign: "left",
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  cardText: {
    padding: 10,
  }
});

export default UserData;