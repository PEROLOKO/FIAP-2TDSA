/* eslint-disable prettier/prettier */
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const Cadastro = (props) => {

    const { navigation }  = props;
    const { getItem, setItem } = useAsyncStorage('@storage-key');

    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');

    const readItemFromStorage = async () => {
        const item = await getItem();
        setEmail(item);
    };

    const writeItemToStorage = async newValue => {
        await setItem(newValue);
        setEmail(newValue);
    };

    useEffect(() => {
        readItemFromStorage();
    }, []);

    return (
        <View>
            <Text>Email</Text>
            <TextInput placeholder="email" onChange={text=>setEmail(text)}/>

            <Text>Name</Text>
            <TextInput placeholder="name" onChange={text=>setName(text)}/>

            <Button title="cadastrar" onPress={() => {writeItemToStorage(email)}}/>
            <Button title="já tem login" onPress={() => navigation.navigate('login')}/>
        </View>
    );

};


export {Cadastro};
