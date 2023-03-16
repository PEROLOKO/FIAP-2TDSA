import React from "react";
import { Text, View, Button } from "react-native";

const Details = ({route}) => {
    const { username } = route.params;
    return (
        <View>
            <Text>{`Username: ${username}`}</Text>
            <Button title="Go to Details"/>
        </View>
    )
}

export { Details }