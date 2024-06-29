import React, {useState , useEffect} from "react";
import { FlatList, Text, } from "react-native";
import Card from "./Card";


const Cards = () => {

    const [recetes, setRecetes] = useState(null);

    const fetchRepositories = async()=>{
        try {
            const response = await globalThis.fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=f1ec54e91903468db2c10a613d5322c2&addRecipeInformation=true');
            const json = await response.json();
            setRecetes(json.results);
        } catch (error) {
            console.error("Failed to fetch repositories:", error);
        }
    }

    useEffect(()=>{
        fetchRepositories()
    },[])


    return ( 
        
        <FlatList 
            data={recetes}
            horizontal
            ItemSeparatorComponent={() => <Text>  </Text>}
            renderItem={({item: recete}) => (
                    <Card {...recete} />
            )}
        >
        </FlatList>
     );
}
 
export default Cards;