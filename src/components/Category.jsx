import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import StyledText from "./StyledText";
import Card from "./Card";

const Category = ({ route }) => {
  const { diet } = route.params;
  const [recetes, setRecetes] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=4f9f2373ba1641b3a6f86cdb4ec2fe5e&addRecipeInformation=true&diet=${diet}`
        );
        const json = await response.json();
        setRecetes(json.results);
      } catch (error) {
        console.error("Failed to fetch Food:", error);
      }
    };

    fetchFood();
  }, [diet]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recetes}
        keyExtractor={(item) => item.id.toString()}
        key={2} // Cambia la key para forzar el rerender
        numColumns={2} // Configura 2 columnas por fila
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card {...item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center', 

  },
});

export default Category;
