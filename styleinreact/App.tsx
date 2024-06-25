import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevetedCard from './components/ElevetedCard';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatCard />
        <ElevetedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
