import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from "../../constants/theme";
import styles from './search.style'

export default function Search() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wrapSearch}>
                <Ionicons name='search' size={SIZES.xLarge}></Ionicons>
            </TouchableOpacity>
            <TextInput style={styles.textInput} placeholder='What are you looking for'></TextInput>
            <TouchableOpacity style={styles.wrapCamera}>
                <Ionicons name='camera-outline' size={SIZES.xLarge}  ></Ionicons>
            </TouchableOpacity>
        </View>
    )
}