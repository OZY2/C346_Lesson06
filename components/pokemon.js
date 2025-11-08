import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const Pokemon = ({ name, pkmImg }) => (
    <View>
        <Image source = {pkmImg} style={{width: '100%', height: 400}} />
        <Text style={{fontSize:18, fontWeight:"bold"}}>{name}</Text>
    </View>
);

export default Pokemon;