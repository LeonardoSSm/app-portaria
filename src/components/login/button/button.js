import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({ onPress, title }: ButtonProps){
    return( 
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:16,
        backgroundColor: "#F5A706",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:5,

    },

    title: {
        color:"#FFF",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
})