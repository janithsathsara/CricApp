import { View, Text, Image } from 'react-native'
import React from 'react'
// w-5/12
const NFTCard = ({ TITLE, ImageSource, PRICE, DESCRIPTION }) => {
    return (
        <>
            <View className=" border border-stone-400 w-[44vw] h-[27vh] mt-5 ml-5 rounded-xl items-center bg-inherit shadow" style={{ elevation: 5 }}>
                <Text className="text-white justify-center pt-2 font-extrabold object-contain">{TITLE}</Text>

                <View className="absolute pt-8 pl-20  items-baseline">
                    <Text className="text-white text-sm">
                        <Text className="text-xs">$
                        </Text>
                        {PRICE}
                    </Text>
                </View>
                <View className="w-16 h-16 mt-4 ">
                    <Image
                        className=" object-scale-down w-full h-full"
                        source={ImageSource}
                    />
                </View>
                <View className="">
                    <Text className="text-white text-center text-xs  pl-3 pr-3">{DESCRIPTION}</Text>
                </View>
                <View className="bg-greenColor p-2 rounded-full mt-4">
                    <Text className="font-extrabold text-black text-xs">BUY NOW</Text>
                </View>
            </View>
        </>
    )
}
export default NFTCard