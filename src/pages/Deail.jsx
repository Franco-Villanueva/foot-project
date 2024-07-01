import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Animated, ScrollView } from "react-native";
import { useParams } from "react-router-native";
import { useNavigate } from "react-router-native";
import Constants from "expo-constants";
import theme from "../themes/theme";
import StyledText from "../components/StyledText";

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [food, setFood] = useState(null);
    const [animation] = useState(new Animated.Value(0)); // Estado para la animación de entrada

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=4f9f2373ba1641b3a6f86cdb4ec2fe5e`);
                const json = await response.json();
                setFood(json);
                startAnimation();
            } catch (error) {
                console.error("Failed to fetch Food:", error);
            }
        };

        fetchFood();

        return () => {};
    }, [id]); 

    // Función para iniciar la animación al entrar en la pantalla
    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true, 
        }).start();
    };

    const cleanSummary = (summary) => {
        return summary
          .replace(/<\/?[^>]+(>|$)/g, "")  // Elimina todas las etiquetas HTML
          .replace(/&nbsp;/g, ' ')         // Reemplaza &nbsp; por un espacio
          .replace(/&lt;/g, '<')           // Reemplaza &lt; por <
          .replace(/&gt;/g, '>')           // Reemplaza &gt; por >
          .replace(/&amp;/g, '&');         // Reemplaza &amp; por &
      };
      

    return ( 
        <Animated.View style={[styles.container, { opacity: animation }]}>
            { food === null
                ? <StyledText fontSize={'title'} fontWeight={'bold'} color={'primary'}>CARGANDO...</StyledText>
                : (
                    <>
                        <Image style={styles.image} source={{ uri: food.image }} />
                        <TouchableOpacity style={styles.button} onPress={() => navigate(-1)}>
                            <StyledText color={'white'} fontWeight={'bold'} fontSize={'subheading'}>&lt;</StyledText>
                        </TouchableOpacity>
                        
                        <View style={styles.title}>
                            <StyledText color={'primary'} fontSize={'title'} fontWeight={'bold'}>{food.title}</StyledText>
                        </View>
                    <ScrollView >
                        <StyledText style={styles.description}>{cleanSummary(food.summary)}</StyledText>
                    </ScrollView></>
                )
            }
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, // Alineación al inicio
        backgroundColor: theme.colors.white,
        position: 'relative',
        justifyContent: 'flex-start',
    },
    scroll: {
        backgroundColor: 'red',
        padding: 10,
        flex: 1
    },
    image: {
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 30,
        backgroundColor: 'red'
    },
    button: {
        width: 50,
        height: 50,
        top: Constants.statusBarHeight + 10,
        left: 10,
        backgroundColor: theme.colors.secondary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    title: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.secondary,
        borderBottomLeftRadius: 30,
    },
    description: {
        padding: 20,
        backgroundColor: theme.colors.white,
    }
});

export default Detail;
