import React from "react";
import { StyleSheet, View, Image } from "react-native";
import theme from "../themes/theme";
import StyledText from "./StyledText";
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

const styles = StyleSheet.create({
    image: {
        width:130,
        height: 130,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    card:{
        width: 130,
        height: 240,
        backgroundColor: theme.colors.tertiary,
        margin: 5,
        borderRadius: 20,
        shadowColor: "black", 
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 6, 
        elevation: 15,
    },
    description:{
        flex:1,
        justifyContent: 'space-between',
        padding: 5,
    }
})



const Card = ({image,title,readyInMinutes,aggregateLikes}) => {


    return ( 
        <View style={styles.card}>

            <View >
                <Image style={styles.image} source={{uri: image}} />
            </View>
            
            <View style={styles.description}>
                <StyledText fontSize={'body'} fontWeight={'bold'} color={'blackw'}>{title}</StyledText>

                <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'red'}}>
                
                <StyledText ><FontAwesome name="heart" size={15} color={'black'} style={styles.icon} /> {aggregateLikes}</StyledText>
                <StyledText ><MaterialIcons name="timer" size={10} color={'black'} style={styles.icon} />{readyInMinutes}</StyledText>
                </View>
                
            </View>
            
        </View>
     );
}
 
export default Card;