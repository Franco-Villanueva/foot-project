import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import theme from "../themes/theme";
import StyledText from "./StyledText";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {

  const navigation = useNavigation();

    const dietCategories = [
      { label: 'Vegan', value: 'Vegan' },
      { label: 'Vegetarian', value: 'Vegetarian' },
      { label: 'Keto', value: 'Ketogenic' },
      { label: 'Gluten Free', value: 'Gluten Free' },
      { label: 'Lacto-Vegetarian', value: 'Lacto-Vegetarian' },
      { label: 'Ovo-Vegetarian', value: 'Ovo-Vegetarian' },
      { label: 'Pescetarian', value: 'Pescetarian' },
      { label: 'Paleo', value: 'Paleo' },
      { label: 'Primal', value: 'Primal' },
      { label: 'Low FODMAP', value: 'Low FODMAP' },
      { label: 'Whole30', value: 'Whole30' },
      ];

    return ( 
        
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={dietCategories}
        horizontal
        keyExtractor={(item) => item.value}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Category", { diet: item.value })}>
            <View style={styles.categoryItem}>
              <StyledText fontSize={'body'} color={'w'}>
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