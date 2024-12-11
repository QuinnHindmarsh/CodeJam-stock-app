import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MoneyDisplayProps = {
    value: number
}

const MoneyDisplay = (props: MoneyDisplayProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>${props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        "display": "flex",
        "position": "absolute",
        "top": 15,
        "right": 30,
    },

    label: {
        "color": "white",
        "fontSize": 32
    }
});

export default MoneyDisplay;