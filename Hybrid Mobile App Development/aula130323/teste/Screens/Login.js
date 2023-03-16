import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

const Login = (props) => {
    const { navigation }  = props;
    const [username, setUsername] = useState('');

    return (
        <View>
            <Text>User</Text>
            <TextInput placeholder="user" onChange={text=>setUsername(text)}/>

            <Text>Password</Text>
            <TextInput placeholder="password" secureTextEntry={true}/>

            <Button title="login" onPress={() => navigation.navigate('details', {username:username})}/>
        </View>
    )
}

export { Login }