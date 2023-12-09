import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../components/home/Search'

const SearchScreen = () => {
    return (
        <SafeAreaView>
            <Search />
        </SafeAreaView>
    )
}

export default SearchScreen