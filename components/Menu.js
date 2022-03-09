import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <Image
                    style={styles.iconStytle}
                    source={{
                        uri: "https://img.icons8.com/stickers/90/000000/training.png",
                    }}
                />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Image
                    style={styles.iconStytle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/about.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <Image
                    style={styles.iconStytle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('UserData')}>
                <Image
                    style={styles.iconStytle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/conference.png",
                    }}
                />
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text>Home</Text>
                </TouchableOpacity> */}
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        margin: 10,
    },
    textStyle: {
        fontSize: 24,
        textTransform: "uppercase"
    },
    iconStytle: {
        width: "100%",
        height: 50,
        aspectRatio: 1
    }

})