/* eslint-disable prettier/prettier */
import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Authors } from "./Authors";
import { Books } from "./Books";

const Stack = createMaterialBottomTabNavigator();

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="authors" component={Authors} />
            <Stack.Screen name="books" component={Books} />
        </Stack.Navigator>
    )
}

export default Home;