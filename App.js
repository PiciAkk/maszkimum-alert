import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  const [tempIPAddress, setTextInputValue] = React.useState('');
  let ipAddress = "";
  let returnedJSON = "";
  let fetchData = false;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  async function setIPAddress() {
    ipAddress = tempIPAddress;
    fetchData = true;
  }
  async function refreshJSON() {
    while (true) {
      if (fetchData == true) {
        returnedJSON = await fetch('http://'+ipAddress);
        returnedJSON = await returnedJSON.json();
        if (returnedJSON.shortStatus == false) {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Mask notification",
              body: 'No mask detected...',
              data: { data: '' },
            },
            trigger: { seconds: 2 },
          });
        }
        else if (returnedJSON.shortStatus != true) {
          Alert.alert(
            "Error occured",
            "shortStatus is an unknown value: " + returnedJSON.shortStatus,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }
      }
      await delay(20000);
    }
  }
  refreshJSON()
  return (
    <View style={styles.container}>
	<TextInput
	      style={{
	    	height: 40,
	    	borderColor: 'gray',
	    	borderWidth: 1,
	    }}
	      onChangeText={text => setTextInputValue(text)}
	      value={tempIPAddress}
		  placeholder="Enter IP address, and port!"
	/>
  <Button title="Set IP Address" onPress={() => setIPAddress()}/>
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
