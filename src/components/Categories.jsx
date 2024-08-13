import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import theme from "../themes/theme";
import StyledText from "./StyledText";

const Categories = () => {

    const dietCategories = [
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Keto', value: 'Ketogenic' },
        { label: 'Gluten Free', value: 'Gluten Free' },
        // Agrega más dietas según sea necesario
      ];

    return ( 
        
        <FlatList 
        data={dietCategories}
        horizontal
        keyExtractor={(item) => item.value}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(`${item.label} pressed`)}>
            <View style={styles.categoryItem}>
              <StyledText fontSize={'body'} color={'#fffdfd'}>
                {item.label}
              </StyledText>
            </View>
          </TouchableOpacity>
        )}
      />
        
     );
}


const styles = StyleSheet.create({
    categoryItem: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#365E32', // Puedes personalizar el color de fondo
    },
  });
 
export default Categories;