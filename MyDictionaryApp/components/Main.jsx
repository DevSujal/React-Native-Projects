import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Answer from './Answer'
import Question from './Question'
import useRequestResponse from '../store/requestResponseContext'

const Main = () => {

  const {data, addAnswer, addQuestion} = useRequestResponse();
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [data, addAnswer, addQuestion]);

  return (
    <ScrollView
    ref={scrollViewRef}
      contentContainerStyle={styles.scrollContent}
      style={styles.outerContainer}
    >
      {data.map((item) => {
        return (
          <View key={item.id} style = {styles.items}>
            <Question>{item.question}</Question>
            {item.answer !== "" ? <Answer>{item.answer}</Answer> : <Answer>generating...</Answer>}
          </View>
        )
      })}
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexGrow : 6,
  },
  scrollContent: {
    flexGrow: 1,
    display : "flex",
    flexDirection : "column",
    justifyContent : "flex-end",
    gap : 10,
    paddingHorizontal : 10,
  },

  items : {
    display : "flex",
    flexDirection : "column",
    gap : 10,
  },
  
})
