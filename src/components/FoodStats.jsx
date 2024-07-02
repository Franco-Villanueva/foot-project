import React, {useEffect} from "react";
import { FlatList, Text } from "react-native";
import Stat from "./Stat";


const FoodStats = ({aggregateLikes,readyInMinutes,servings}) => {

    const stats = [
        { name: 'readyInMinutes', value: readyInMinutes },
        { name: 'servings', value: servings },
        { name: 'aggregateLikes', value: aggregateLikes }
    ];


    return ( 
            <>
                <FlatList
                data={stats}
                ItemSeparatorComponent={() => <Text>  </Text>}
                renderItem={({item: stat}) => (
                        <Stat name={stat.name} value={stat.value} />
                )}>
                
                </FlatList>
                    
            </>
     );
}
 
export default FoodStats;