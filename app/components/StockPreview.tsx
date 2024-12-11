import React from "react";
import { StyleSheet, Text, View } from "react-native";

type StockPreviewProps = {
    name: string,
    value: number
};

const StockPreview = (props: StockPreviewProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        "flex": 1,
        "borderRadius": "5px",
        "backgroundColor": "rgb(210,210,210)",
        "color": "white",
        "paddingVertical": 4,
        "paddingHorizontal": 14,
        "height": 100,
        "width": 100
    },

    label: {
        // "color": "white"
    }
});

export default StockPreview;