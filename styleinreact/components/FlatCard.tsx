import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Cards</Text>
      <View style = {styles.container}> 
        <View style = {[styles.card, styles.card1]}>
            <Text style = {styles.text}>Red</Text>
        </View>
        <View style = {[styles.card, styles.card2]}>
            <Text style = {styles.text}>Green</Text>
        </View>
        <View style = {[styles.card, styles.card3]}>
            <Text style = {styles.text}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal : 8,
        textAlign : "center",
    },
    container : {
        flex : 1,
        flexDirection : "row-reverse",
        padding : 6,
    },
    card : {
        height : 100,
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        width : 100,
        borderRadius : 4,
        margin : 8
    },
    card1 : {
        backgroundColor : "#EF5354",
    },
    card2 : {
        backgroundColor : "green",
    },
    card3 : {
        backgroundColor : "blue",
    },
    text : {
        color : "white"
    }
})