import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "../components/StyledText";
import Cards from "../components/Cards";
import theme from "../themes/theme";
import Constants from "expo-constants";

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
  

const Home = () => {
    return ( 
 
        <View style={styles.container}>
            <StyledText style={styles.logo} fontSize={'title'} fontWeight={'bold'} color={'primary'}  >Food's</StyledText>
            <Cards />
        </View>

     );
}
 
export default Home;