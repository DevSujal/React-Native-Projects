import React, { useState } from "react";

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Button,
    Pressable
} from "react-native"

function AppPro () : JSX.Element {
    const [darkModeEnabled, setDarkModeEnabled] = useState("dark")
    const isDarkMode = useColorScheme() === darkModeEnabled
    return (
            <View style = {isDarkMode ? styles.darkContainer : styles.lightContainer}>
                <Text style = {isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello World
                </Text>
                <Pressable style = {styles.btn} onPress={() => {darkModeEnabled === "dark" ? setDarkModeEnabled("light") : setDarkModeEnabled("dark")}}>
                    <Text style = {{fontSize : 20, fontWeight : "bold", color : "white"}}>
                        Hit Me
                    </Text>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create( {
    darkContainer : {
        flex : 1,
        alignItems: "center",
        justifyContent : "center",
        backgroundColor : "black",
        gap : 10
    },
    lightContainer : {
        flex : 1,
        alignItems: "center",
        justifyContent : "center",
        backgroundColor : "white",
        gap : 10

    },
    whiteText : {
        color : "#000000",
        backgroundColor : "white",
        padding : 7,
        borderRadius : 10,
        fontSize : 20,
    },
    darkText : {
        color : "#FFFFFF",
        backgroundColor : "black",
        padding : 7,
        borderRadius : 10,
        fontSize : 20,
    },
    btn : {
        padding : 9,
        borderRadius : 10,
        backgroundColor : "blue",
    }

})

export default AppPro