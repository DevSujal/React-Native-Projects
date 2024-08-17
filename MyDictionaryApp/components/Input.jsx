import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import useRequestResponse from '../store/requestResponseContext';
import uploadImg from '../images/upload.png';
const Input = () => {
  const {addQuestion, addAnswer} = useRequestResponse();
  const [inputValue, setInputValue] = useState('');
  const handlePress = async () => {
    if (inputValue !== '') {
      const id = Date.now();
      try {
        addQuestion(id, inputValue);
        const data = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`,
        );
        const response = await data.json();

        const definitions = response[0].meanings.map(meaning =>
          meaning.definitions.map(({definition}) => definition),
        );

        let responce = 'Meanings -> \n';

        let foundDefinition = false;
        definitions.forEach(definitionArray => {
          definitionArray.forEach(definition => {
            if (definition && !foundDefinition) {
              responce += definition + '\n';
              foundDefinition = true;
            }
          });
        });

        const examples = response[0].meanings.map(meaning =>
          meaning.definitions.map(({example}) => example),
        );

        responce += '\nExamples -> \n';

        foundDefinition = false;
        examples.forEach(exampleArray => {
          exampleArray.forEach(example => {
            if (example && !foundDefinition) {
              responce += example + '\n';
              foundDefinition = true;
            }
          });
        });

        const synonyms = response[0].meanings.map(({synonyms}) => synonyms);

        responce += '\nSynonyms -> \n';

        synonyms.forEach(synonymsArray => {
          synonymsArray.forEach(synonym => {
            if (synonym) responce += synonym + ', ';
          });
        });
        const antonyms = response[0].meanings.map(({antonyms}) => antonyms);
        responce += '\n\nAntonyms -> \n';

        antonyms.forEach(antonymsArray => {
          antonymsArray.forEach(antonym => {
            if (antonym) responce += antonym + ', ';
          });
        });

        addAnswer(id, responce);
      } catch (error) {
        addAnswer(id, 'yeh word exist nahi karta');
      } finally {
        setInputValue('');
      }
    }
  };

  return (
    <View style={container}>
      <View style={inputWrapper}>
        <TextInput
          style={input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter any word..."
          placeholderTextColor="gray"
          autoCorrect={true}
        />
        <TouchableOpacity style={uploadBtn} onPress={handlePress}>
          <Image source={uploadImg} style={image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {container, input, inputWrapper, uploadBtn, image} = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    color: 'black',
    width: '80%',
    height: '100%',
    fontSize: 15,
    color: 'white',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36454F',
    width: '80%',
    borderRadius: 50,
    paddingLeft: 10,
  },
  uploadBtn: {
    zIndex: 10,
    fontSize: 30,
    padding: 10,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 50,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Input;
