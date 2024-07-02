import React, { useEffect } from "react";
import { View, Text } from "react-native";
import StyledText from "./StyledText";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stat = ({ name, value }) => {


    const renderIcon = () => {
        switch (name) {
            case 'readyInMinutes':
                return <MaterialIcons name="timer" size={25} color={'#9c9c9c'} />;
            case 'servings':
                return <MaterialIcons name="local-dining" size={25} color={'#9c9c9c'} />;
            case 'aggregateLikes':
                return <FontAwesome name="heart" size={25} color={'#9c9c9c'} />;
            default:
                return <MaterialIcons name="timer" size={15} color={'#fa4040'} />;
        }
    };

    const renderLabel = () => {
        switch (name) {
            case 'readyInMinutes':
                return "Preparation Time";
            case 'servings':
                return "Serving Size";
            case 'aggregateLikes':
                return "Likes";
            default:
                return "Unknown";
        }
    };

    return (
        <View style={{ 
            flex: 1,
            margin: 5,
            borderRadius: 20,
            shadowColor: "#989898", 
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 0, 
            elevation: 3,
            backgroundColor: 'white',
            padding: 10
        }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                {renderIcon()}
                <View style={{ marginLeft: 8 }}>
                    <Text>{renderLabel()}</Text>
                    <StyledText>{value}</StyledText>
                </View>
            </View>
        </View>
    );
};

export default Stat;
