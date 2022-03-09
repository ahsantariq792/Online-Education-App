import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const About = () => {

  const about = "A developer is an individual that builds and create software and applications. He or she writes, debugs and executes the source code of a software application. A developer is also known as a software developer, computer programmer, programmer, software coder or software engineer."
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{ uri: "https://images.unsplash.com/photo-1646734035864-f65694597106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.headingStyles}>About Me</Text>
        <Text style={styles.textStyles}>{about}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.iconStyle}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/145/145802.png" }}
        />
        <Image
          style={styles.iconStyle}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/145/145812.png" }}
        />
        <Image
          style={styles.iconStyle}
          source={{ uri: "https://cdn-icons.flaticon.com/png/512/4138/premium/4138124.png?token=exp=1646855605~hmac=bbd5f943a7ec33fe15d4a4a8f6bfbbd1" }}
        />
      </View>



    </View>
  )
}

export default About

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
    aspectRatio: 1,
    borderRadius: 100,
    marginVertical: 20,

  },
  iconStyle: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    textAlign: "left",
    margin: 40,
    padding: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  headingStyles: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 20,
    letterSpacing: 2,
    marginVertical: 8,
  },
  iconContainer: {
    display: "flex",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 80,
  }
})