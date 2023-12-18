import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { observer } from "mobx-react";

import { ThemeTypes } from "../modules/theme/ThemeTypes";
import { useTheme } from "../modules/theme/useTheme";

export const HomeScreen = observer(() => {
  const { Colors, selectTheme, changeTheme } = useTheme();
  const styles = useStyles(Colors);

  const handleChangeTheme = async () => {
    changeTheme(
      selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button
          onPress={handleChangeTheme}
          title={"сменить тему"}
          style={Colors.buttonSecondary}
        />
        <Text
          style={{
            color: Colors.textPrimary,
            fontSize: 36,
            fontFamily: "Ubuntu-Bold",
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          Header title
        </Text>
        <Text
          style={{
            color: Colors.textPrimary,
            fontSize: 28,
            fontFamily: "Ubuntu-Medium",
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          Header subtitle
        </Text>
        <Text
          style={{
            color: Colors.textPrimary,
            fontSize: 20,
            fontFamily: "Ubuntu-Regular",
            paddingHorizontal: 20,
          }}
        >
          Управление задачами. Управление оборудованием, локациями. Составление
          сметы. Автоматический анализ сцены (длина, время суток, погода и тд).
          Система оптимизации планирования. Система оптимизации сметы
        </Text>
      </View>
    </View>
  );
});

const useStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: colors.backgroundPrimary,
    },
    content: {
      flex: 1,
      padding: 10,
    },
    buttons: {
      borderTopColor: colors.borderColor,
      borderTopWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      marginVertical: 30,
    },
    buttonPrimary: {
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.buttonPrimary,
    },
    buttonSecond: {
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.buttonSecondary,
    },
    titleText: {
      color: colors.textPrimary,
      fontSize: 18,
      flex: 3,
      alignSelf: "center",
      paddingVertical: 5,
    },
    title: {
      backgroundColor: colors.titleBackgroung,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
    },
    text: {
      color: colors.textPrimary,
    },
    buttonText: {
      color: colors.textSecondary,
      fontSize: 16,
      textAlign: "center",
    },
  });
