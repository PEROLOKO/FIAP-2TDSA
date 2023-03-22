/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import Graph from './Graph';

const FlatListIbge = () => {

    const [lista, setLista] = useState();

    const fetchDataAsync = async (nome) => {
        try {
            const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`);
            console.log(response.data);
            setLista(response.data[0].res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Text>Lista IBGE</Text>
            <TextInput onChangeText={fetchDataAsync}/>
            <FlatList
                data={lista}
                renderItem={({item}) => <View><Text>Período:{item.periodo}</Text><Text>Frequência:{item.frequencia}</Text></View>}
                keyExtractor={()=>Math.random()}
            />
        </View>
    );
};

export default FlatListIbge;
