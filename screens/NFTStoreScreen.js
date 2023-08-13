import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'
import NFTCard from '../components/NFTCard'
import NFTData from '../Data/NFTData'
const NFTStoreScreen = () => {
    const ImageSource1 = require('../Assets/CAP.png');
    const ImageSource2 = require('../Assets/BALL.png');
    const ImageSource3 = require('../Assets/GLOVES.png');
    const ImageSource4 = require('../Assets/BAT.png');


    return (
        <SafeAreaView className="flex-1 bg-textColor shadow">

            <View className="w-full pt-8 pl-14">
                <Text className="text-white text-4xl font-extrabold">
                    Become An Owner
                </Text>
            </View>
            <View>
                <Text className="text-white pl-14 pt-2 text-2xl">OF The Most Popular <Text className="text-red-700">NFT</Text> Items</Text>
            </View>

            <FlatList
                className="flex flex-nowrap"
                numColumns={2}
                scrollEnabled={false}
                data={NFTData}
                renderItem={({ item }) =>
                    <NFTCard
                        TITLE={item.TITLE}
                        ImageSource={item.IMAGESOURCE}
                        PRICE={item.PRICE}
                        DESCRIPTION={item.DESCRIPTION}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default NFTStoreScreen