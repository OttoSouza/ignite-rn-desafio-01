import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [theme, setTheme] = useState(false);
  console.log(tasks);
  function handleChangeTheme() {
    setTheme(!theme);
  }

  useEffect(() => {}, [theme]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === "") {
      Alert.alert("Campo vazio", "Digite um nome para sua tarefa");
    }
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldState) => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <>
      <Header theme={theme} handleTheme={handleChangeTheme} />

      <TodoInput
        addTask={handleAddTask}
        theme={theme}
        handleTheme={handleChangeTheme}
      />

      <MyTasksList
        tasks={tasks}
        theme={theme}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
