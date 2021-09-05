import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [ipAddress, setTextInputValue] = React.useState('');
  var returnedJSON = "";
  async function refreshJSON() {
    returnedJSON = await fetch('https://'+ipAddress);
    returnedJSON = await returnedJSON.json();
    console.log(returnedJSON);
  }
  return (
    <View style={styles.container}>
	<TextInput
	      style={{
	    	height: 40,
	    	borderColor: 'gray',
	    	borderWidth: 1,
	    }}
	      onChangeText={text => setTextInputValue(text)}
	      value={ipAddress}
		  placeholder="Enter IP address, and port!"
	/>
  <Button title="Fetch" onPress={() => refreshJSON()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
