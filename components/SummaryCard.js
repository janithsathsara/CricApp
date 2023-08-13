import { View, Text, Image } from 'react-native'
import React from 'react'

const SummaryCard = ({ COUNTRY1, COUNTRY2, INN1, INN2, DESCRIPTION, TARGET, IMAGESOURCE1, IMAGESOURCE2 }) => {
    return (
        <View className="ml-10 mt-10 mb-10 w-[75vw] border border-slate-600 h-[28vh] rounded-xl flex items-center">
            <View className="flex flex-row ml-10 mt-5">
                <Text className="text-red-500 font-bold pr-5">LIVE</Text>
                <Text className="text-black font-bold">T20      Dhaka</Text>
            </View>
            <View className="mt-5  w-[66vw] flex items-center">
                <View className="flex flex-row justify-between w-[60vw] items-baseline">
                    <View className="flex items-start w-10 h-5 mr-3">
                        <Image
                            source={IMAGESOURCE1}
                            className="w-full h-full"
                        />
                    </View>
                    <Text className="text-black font-bold ">{COUNTRY1}</Text>
                    <Text className="flex ml-auto text-black font-bold">{INN1}</Text>
                </View>
                <View className="flex flex-row justify-between w-[60vw] items-baseline mt-2">
                    <View className="w-10 h-5 border border-slate-500 flex items-start mr-3">
                        <Image
                            source={IMAGESOURCE2}
                            className="w-full h-full"
                        />
                    </View>
                    <Text className="text-black  font-bold ">{COUNTRY2}</Text>
                    {TARGET &&
                        <Text className="text-slate-400 text-xs font-bold ml-3">{TARGET}</Text>
                    }
                    <Text className="text-black font-bold flex ml-auto">{INN2}</Text>
                </View>
            </View>
            <View className="mt-4 flex flex-nowrap ">
                <Text>{DESCRIPTION}</Text>
            </View>
            <View className="flex flex-row justify-around mt-4 w-[70vw]">
                <View className="border-2 border-textColor rounded-full p-1 w-32 justify-center items-center">
                    <Text className="text-textColor text-sm">
                        Match Report
                    </Text>
                </View>
                <View className="bg-red-600 rounded-full p-1 w-32 justify-center items-center">
                    <Text className="text-white text-sm">
                        Watch Live
                    </Text>
                </View>
            </View>
        </View >
    )
}

export default SummaryCard