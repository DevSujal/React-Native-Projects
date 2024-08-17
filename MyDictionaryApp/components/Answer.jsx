import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Answer = ({
    children
}) => {
  return (
    <View style = {container}>
      <Text style = {text}>{children}</Text>
    </View>
  )
}

export default Answer

const {
    container,
    text
} = StyleSheet.create({
    container : {
        display : "flex",
        alignItems : "flex-start",
        width : "100%",
        minHeight : 50,
    },
    text : {
        fontWeight : "600",
        color : "black",
        padding : 10,
        fontSize : 15,
        maxWidth : "80%",
        backgroundColor : "#36454F",
        color : "white",
        borderRadius : 10,
        borderTopLeftRadius : 0,
    },
})