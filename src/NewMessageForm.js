import React, { useState } from 'react';
import { TextInput, Pressable, Text } from 'react-native';

export default function NewMessageForm({ onSend }) {
  const [inputText, setInputText] = useState('');

  function handleSend() {
    onSend(inputText);
    setInputText('');
  }
  return (
    <>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
      />
      <Pressable testID="sendButton" onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </>
  );
}
