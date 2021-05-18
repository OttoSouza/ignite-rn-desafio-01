import React, { useEffect, } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { dark } from "../util/theme";

interface HeaderProps {
  handleTheme: () => void;
  theme: boolean;
}

export function Header({ handleTheme, theme }: HeaderProps) {
  useEffect(() => {}, [theme]);
  return theme ? (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>
      <TouchableOpacity style={styles.themeButton} onPress={handleTheme}>
        <Text style={styles.themeText}>Light</Text>
      </TouchableOpacity>
    </View>
  ): (
    <View style={[styles.header, {backgroundColor: dark.headerBg}]}>
      <Text style={[styles.headerText, {color: dark.headerColor}]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold", color: dark.headerColor }]}>
        do
      </Text>
      <TouchableOpacity style={styles.themeButton} onPress={handleTheme}>
        <Text style={styles.themeText}>Light</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },

  themeButton: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  themeText: {
    color: "#ff9000",
    fontWeight: "bold",
    fontSize: 20,
  },
});
