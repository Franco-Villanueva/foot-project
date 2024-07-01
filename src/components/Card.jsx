import React from "react";
import { StyleSheet, View, Image, TouchableOpacity  } from "react-native";
import theme from "../themes/theme";
import StyledText from "./StyledText";
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';
import { useNavigate } from "react-router-native";
 

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
        backgroundColor: theme.colors.white,
        margin: 5,
        borderRadius: 20,
        shadowColor: "black", 
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5, 
        elevation: 8,
    },
    description:{
        flex:1,
        justifyContent: 'space-between',
        padding: 10,
    }
})

const reducerName = (name)=>{
    if(name.length > 25){
        const newName = name.slice(0,30)+ '...'
        return newName
    }
    return name
}


const Card = ({id,image,title,readyInMinutes,aggregateLikes}) => {
    const navigate = useNavigate()

    return ( 
        <TouchableOpacity onPress={() => navigate(`/detail/${id}`)}>

            <View style={styles.card}>
                
                <View >
                    <Image style={styles.image} source={{uri: image}} />
                </View>
                
                <View style={styles.description}>
                    
                    <StyledText fontSize={'body'} fontWeight={'bold'} color={'blackw'}>{reducerName(title)}</StyledText>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    
                    <StyledText ><FontAwesome name="heart" size={15} color={'grey'} style={styles.icon} /> {aggregateLikes}</StyledText>
                    <StyledText ><MaterialIcons name="timer" size={15} color={'grey'} style={styles.icon} />{readyInMinutes}</StyledText>
                    </View>
                    
                </View>
                
            </View>
            
        </TouchableOpacity>
     );
}
 
export default Card;