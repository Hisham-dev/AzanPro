/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("this is the first page in AzanPro App");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title={'change text'}
        onPress={() => setOutputText('The Text has been changed!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
