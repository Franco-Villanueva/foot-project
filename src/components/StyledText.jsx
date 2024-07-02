import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../themes/theme";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.black
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.secondary,
    },
    colorTertiary: {
        color: theme.colors.tertiary,
    },
    colorQuaternary: {
        color: theme.colors.quaternary,
    },
    colorBlack: {
        color: theme.colors.black,
    },
    colorWhite: {
        color: theme.colors.white,
    },
    colorGrey: {
        color: theme.colors.grey
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    textAlignCenter: {
        textAlign: "center",
    },
    textAlignLeft: {
        textAlign: "left",
    },
    textAlignRight: {
        textAlign: "right",
    },
    textAlignJustify: {
        textAlign: "justify",
    },
    title: {
        fontSize: theme.fontSizes.title
    },
    subHeading: {
        fontSize: theme.fontSizes.subheading
    }
});

const StyledText = ({
    children,
    align,
    color,
    fontSize,
    fontWeight,
    style,
    ...restOfProps
}) => {
    const textStyles = [
        styles.text,
        fontSize === "title" && styles.title,
        fontSize === "subheading" && styles.subHeading,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        color === "tertiary" && styles.colorTertiary,
        color === "quaternary" && styles.colorQuaternary,
        color === "b" && styles.colorBlack,
        color === "w" && styles.colorWhite,
        color === "g" && styles.colorGrey,
        fontWeight === "bold" && styles.fontWeightBold,
        align === "center" && styles.textAlignCenter,
        align === "left" && styles.textAlignLeft,
        align === "right" && styles.textAlignRight,
        align === "justify" && styles.textAlignJustify,
        style, // Estilo personalizado adicional
    ];

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
};

export default StyledText;
