import React, {useEffect} from "react";
import { FlatList, Text, View } from "react-native";
import Stat from "./Stat";


const FoodStats = ({aggregateLikes,readyInMinutes,servings}) => {

    const stats = [
        { name: 'readyInMinutes', value: readyInMinutes },
        { name: 'servings', value: servings },
        { name: 'aggregateLikes', value: aggregateLikes }
    ];


    return ( 
        <>
        {stats.map((stat, index) => (
            <View key={index} >
                <Stat name={stat.name} value={stat.value} />
            </View>
        ))}
        </>
     );
}
 
export default FoodStats;