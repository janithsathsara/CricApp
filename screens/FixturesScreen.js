import { ScrollView, View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import React from 'react'
import DayCard from '../components/DayCard'
import SummaryCard from '../components/SummaryCard'
import cardData from '../Data/cardData'
import calendar from '../Data/calendar'

const FixturesScreen = () => {

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="bg-white ">
                <View className="pt-[12vh] items-center">
                    <Text className="text-4xl text-textColor "><Text className="text-textColor font-extrabold">Match</Text> Fixtures</Text>
                </View>
                <View className="pt-3 items-center pl-12">
                    <Text className="text-textColor text-base">The Fixtures of the matches to be played</Text>
                </View>
                <View className="pt-6 pl-20 mb-5">
                    <Text className="text-textColor font-bold text-xl">August 2021</Text>
                </View>
                <FlatList
                    className="flex flex-row flex-nowrap"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={calendar}
                    renderItem={({ item }) => < DayCard NUMBER={item.date} DAY={item.day} />}
                    keyExtractor={item => item.date}
                />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={cardData}
                    renderItem={({ item }) =>
                        <SummaryCard
                            COUNTRY1={item.country1.countryName}
                            IMAGESOURCE1={item.country1.countryFlag}
                            COUNTRY2={item.country2.countryName}
                            IMAGESOURCE2={item.country2.countryFlag}
                            DESCRIPTION={item.description.summary}
                            TARGET={item.description.target}
                            INN1={item.score.inning1}
                            INN2={item.score.inning2}
                        />
                    }
                />
                <View className="bg-textColor ">
                    <View className="justify-center items-center">
                        <Text className="text-white text-2xl pt-10 font-extrabold">Match Report</Text>
                    </View>
                    <View className="pl-16">
                        <Text className="text-white justify-self-start place-self-start mt-5 font-extrabold">BANGLADESH VS AUSTRALIA</Text>
                        <Text className="text-white mt-3">5TH T20, MIRPUR</Text>
                    </View>
                    <View className="mt-10 ml-16 w-8/12">
                        <View className="flex flex-row justify-between items-baseline">
                            <View className="w-10 h-5 ">
                                <Image
                                    source={require('../Assets/BANFlag.png')}
                                    className="w-full h-full"
                                />
                            </View>
                            <Text className="text-white pl-3 pr-36">BDESH</Text>
                            <Text className="text-white">122/8</Text>
                        </View>
                        <View className="flex flex-row justify-between mt-2 items-baseline">
                            <View className="w-10 h-5  ">
                                <Image
                                    source={require('../Assets/AUSFlag.png')}
                                    className="w-full h-full"
                                />
                            </View>
                            <Text className="text-white pr-10 pl-3">AUS</Text>
                            <Text className="text-slate-600 text-xs">(8.5/20 ov. target 123)</Text>
                            <Text className="text-white pl-2">54/5</Text>
                        </View>
                    </View>
                    <View className="items-center ">
                        <View className="flex mt-12 w-10/12 h-48">
                            <Image
                                source={require('../Assets/AUSTeam.png')}
                                className="w-full h-full rounded-xl"
                            />
                        </View>
                        <View className="pt-5 w-10/12">
                            <Text className="text-white text-justify tracking-wide leading-6">It was a nightmarish end to a tough tour for Australia. As if losing the series wasn't enough, in the final T20, they lost 8 for 24 to collapse to 62 all out in a chase of 123. This was their lowest total across limited-overs cricket. It meant Bangladesh took the series 4-1 in Dhaka.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default FixturesScreen