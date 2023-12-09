import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants/theme'
import styles from './heading.style'

export default function Heading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> New rival</Text>
            <TouchableOpacity>
                <Ionicons name='ios-grid' color={COLORS.primary} size={SIZES.xLarge} />
            </TouchableOpacity>
        </View>
    )
}