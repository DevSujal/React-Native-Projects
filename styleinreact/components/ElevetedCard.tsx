import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevetedCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Eleveted Card</Text>
      <ScrollView horizontal style = {styles.container}>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                me
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                scroll
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                more...
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.eleveted]}>
            <Text style = {styles.text}>
                Tap
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    eleveted : {
        backgroundColor : "gray",
        elevation : 4,
        // shadowOffset : {
        //     width : 1,
        //     height : 1,
        // },
        // shadowColor : "red",
    },
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal : 8,
        textAlign : "center",
    },
    container : {
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