import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [ipAddress, setTextInputValue] = React.useState('');
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
		  placeholder="Enter the IP address of the server!"
	/>
	<Text>{ ipAddress }</Text>
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