import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Main from './components/Main';
import {RequestResponseProvider} from './store/requestResponseContext';
const App = () => {
  
  const [data, setData] = React.useState([]);

  const addQuestion = (id, question) => {
    setData(prev => [...prev, {id : id, question: question, answer: ''}]);
  }

  const addAnswer = (id, answer) => {
    setData(prev => prev.map(item => item.id === id ? {...item, answer} : item));
  }
  return (
    <RequestResponseProvider value={{
      data,
      addQuestion,
      addAnswer,
    }}>
      <SafeAreaView style={container}>
        <Header title="My Dictionary App" />
        <Main />
        <Input />
      </SafeAreaView>
    </RequestResponseProvider>
  );
};

const {container} = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#1E1F1E',
  },
});

export default App;
