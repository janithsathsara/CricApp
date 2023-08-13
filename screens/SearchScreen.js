import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

const SearchScreen = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex flex-row pt-20 justify-center items-baseline">
                <Text className="text-textColor text-2xl">SEARCH</Text>
                <Text className="text-textColor text-base"> for Fixtures, Videos, Podcast or NFT</Text>
            </View>
            <View className="items-center pt-10">
                <TextInput
                    autoFocus
                    placeholder='Search For'
                    className="w-9/12 pl-6"
                />
                <View className="w-9/12 h-1 bg-slate-300"></View>

            </View>
        </SafeAreaView>
    )
}

export default SearchScreen