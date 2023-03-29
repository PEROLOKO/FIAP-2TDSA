/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const Login = (props) => {

    const { navigation }  = props;

    const [ email, setEmail ] = useState('');

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="email" onChange={text=>setEmail(text)}/>

            <Button title="login"/>
            <Button title="cadastro" onPress={() => navigation.navigate('cadastro')}/>
        </View>
    );

};


export {Login};
