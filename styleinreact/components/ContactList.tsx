import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com'},
    {
      name: 'Jane Smith',
      phone: '234-567-8901',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Alice Johnson',
      phone: '345-678-9012',
      email: 'alice.johnson@example.com',
    },
    {name: 'Bob Brown', phone: '456-789-0123', email: 'bob.brown@example.com'},
    {
      name: 'Charlie Davis',
      phone: '567-890-1234',
      email: 'charlie.davis@example.com',
    },
    {
      name: 'Diana Evans',
      phone: '678-901-2345',
      email: 'diana.evans@example.com',
    },
    {
      name: 'Edward Foster',
      phone: '789-012-3456',
      email: 'edward.foster@example.com',
    },
    {
      name: 'Fiona Green',
      phone: '890-123-4567',
      email: 'fiona.green@example.com',
    },
    {
      name: 'George Harris',
      phone: '901-234-5678',
      email: 'george.harris@example.com',
    },
    {
      name: 'Hannah King',
      phone: '012-345-6789',
      email: 'hannah.king@example.com',
    },
  ];

  return (
    <View style={styles.bigcontainer}>
      <Text style={[styles.text, styles.name, styles.heading]}>
        Contact List
      </Text>
      <ScrollView style = {styles.scroll} scrollEnabled = {true}>
        {contacts.map(contact => (
          <View key={contact.phone} style={styles.container}>
            <Text style={[styles.text, styles.name]}>{contact.name}</Text>
            <Text style={[styles.text, styles.phone]}>{contact.phone}</Text>
            <Text style={[styles.text, styles.email]}>{contact.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 3,
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    marginVertical : 8
  },
  text: {
    color: 'white',
  },
  heading: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  email: {
    fontSize: 14,
  },
  bigcontainer: {
    padding: 10,
    flex: 1,
    flexDirection : "column",
    gap: 8,
  },
  scroll : {
    height : 500,
    padding : 10,
  }
});
