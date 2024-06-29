import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import theme from "../themes/theme"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import Constants from "expo-constants";
import Cards from "./Cards";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: theme.colors.white,
  },
  logo:{
    flex: 1 ,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10
  }
});

const Main = () => {


    return ( 
        <View style={styles.container}>
            <StyledText style={styles.logo} fontSize={'title'} fontWeight={'bold'} color={'primary'}  >Food's</StyledText>
            <Cards />
        </View>
     );
}
 
export default Main;