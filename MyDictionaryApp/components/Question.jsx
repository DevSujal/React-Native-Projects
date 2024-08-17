import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Question = ({
    children
}) => {
  return (
    <View style = {container}>
      <Text style = {text}>{children}</Text>
    </View>
  )
}

export default Question

const {
    container,
    text
} = StyleSheet.create({
    container : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "flex-end",
        width : "100%",
        minHeight : 50,
    },
    text : {
        fontWeight : "600",
        color : "black",
        fontSize : 15,
        padding : 10,
        maxWidth : "80%",
        backgroundColor : "#36454F",
        color : "white",
        borderRadius : 10,
        borderTopRightRadius : 0,
    },
})