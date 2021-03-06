import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";
import { dark } from "../util/theme";

interface TodoInputProps {
  addTask: (task: string) => void;
  handleTheme: () => void;
  theme: boolean;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (task === "") {
      Alert.alert("Campo vazio", "Digite um nome para sua tarefa");
      return;
    }
    addTask(task);
    setTask("");
  }

  return theme ? (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}
    >
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        placeholderTextColor="#A09CB1"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  ) : (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
        { backgroundColor: dark.inputBackgroundColor },
      ]}
    >
      <TextInput
        style={[styles.input, { backgroundColor: dark.inputBackgroundColor, color: dark.inputTextColor }]}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        placeholderTextColor={dark.inputTextColor}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: dark.inputButton }]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F5F4F8",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F4F8",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#3FAD27",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
