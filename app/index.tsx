import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import StockPreview from "./components/StockPreview";
import MoneyDisplay from "./components/MoneyDisplay";

const App = () => {
    return (
        <View style={{
                "flex": 1,
                "alignItems": "center",
                "backgroundColor": "rgb(22,22,22)",
                "padding": 32
            }}>
            <Text style={styles.title}>Stock Market</Text>

            <MoneyDisplay value={0}></MoneyDisplay>
            
            <FlatList
                data={stocks}
                renderItem={({item}) => <StockPreview name={item.name} value={item.value}></StockPreview>}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        "fontSize": 32,
        "color": "white"
    }
});

// Template array of data - replace with data from API eventually.
const stocks = [{
    "name": "Mark Stock Exchange",
    "value": 23.11
}];

export default App;