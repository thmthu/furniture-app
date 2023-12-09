import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from './home.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants/theme'
import Search from '../components/home/Search'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductCart from '../components/product/ProductCart'
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <Ionicons name='location-outline' size={SIZES.xLarge} />
                <Text style={styles.location}> VietNam</Text>
                <View>

                    <Ionicons name="cart" size={SIZES.xLarge} />
                    <View style={styles.cartCount}>
                        <Text style={styles.textCount}>8</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.text(COLORS.black)}> Find the most</Text>
            <Text style={styles.text(COLORS.primary)}> Luxurious furniture</Text>
            <Search />
            <Carousel />
            <Heading />
            <ProductCart></ProductCart>
            <Image
                style={{ height: 45, width: 45 }}
                source={{ uri: "https://dogily.vn/wp-content/uploads/2019/02/hinh-anh-cho-Pug-dogily-petshop-1.jpg" }}
            />
        </SafeAreaView>
    )
}

export default HomeScreen