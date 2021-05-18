import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";
import { dark } from "../util/theme";

interface FlatListHeaderComponentProps {
  theme: boolean;
}

function FlatListHeaderComponent({ theme }: FlatListHeaderComponentProps) {
  return theme ? (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  ) : (
    <View>
      <Text style={[styles.header, { color: dark.flatListHeaderColor }]}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  theme: boolean;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  theme,
}: MyTasksListProps) {
  return theme ? (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              //TODO - use style prop
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text
              //TODO - use style prop
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  ) : (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={
              item.done
                ? [
                    styles.taskButtonDone,
                    { backgroundColor: dark.taskButtonDone },
                  ]
                : [styles.taskButton]
            }
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              //TODO - use style prop
              style={
                item.done
                  ? [
                      styles.taskMarkerDone,
                      { backgroundColor: dark.taskMarkerDone },
                    ]
                  : [styles.taskMarker, {borderColor: dark.taskMarker}]
              }
            />
            <Text
              //TODO - use style prop
              style={
                item.done
                  ? [styles.taskTextDone, { color: dark.taskTextDone }]
                  : [styles.taskText, {color: dark.taskText}]
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
});
