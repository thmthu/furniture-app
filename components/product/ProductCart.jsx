import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import stylesCart from './productCart.style';
import { COLORS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        height: 200,
        resizeMode: 'cover',
    },
});
export default function ProductCart() {
    return (
        <TouchableOpacity>
            <View style={stylesCart.container}>
                <Image
                    style={stylesCart.img}
                    source={{
                        uri: "https://i5.walmartimages.com/asr/dcadef0d-0709-4d44-a4fb-c99b8145b709_3.5d656729637955a4f31f31b6bdf1bb91.jpeg"
                    }}></Image>
                <Text style={stylesCart.title}> Product</Text>
                <Text style={stylesCart.text}> Product </Text>
                <Text>  500$</Text>
                <View style={stylesCart.wrapIcon}>
                    <Ionicons name='add' color={"white"}></Ionicons>
                </View>
            </View>


        </TouchableOpacity>
    )
}