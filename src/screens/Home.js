import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/slices/userSlice";

const Home = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const persistedText = useSelector((state) => state.user.username);

  const handleSubmit = () => {
    dispatch(setUsername(input));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>enter text to persist</Text>
      <TextInput
        placeholder="enter name to persist"
        value={input}
        onChangeText={(e) => setInput(e)}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text>If the text is persisted it will appear here:</Text>
      <Text>{persistedText}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
