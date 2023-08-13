import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NFTCard from '../components/NFTCard';
import NFTData from '../Data/NFTData';
import LiveMatchesCard from '../components/LiveMatchesCard';
import PodcastsCard from '../components/PodcastsCard';
import HighlightsVideosCard from '../components/HighlightsVideosCard';
import CuratedMatchesCard from '../components/CuratedMatchesCard';
import LiveMatchData from '../Data/LiveMatchData';
import MainComponent from '../components/MainComponent';
import CuratedData from '../Data/CuratedData';
import HighlightedData from '../Data/HighlightedData';
import PodcastsData from '../Data/PodcastsData';

const MainScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView>
                <MainComponent />
                <View className=" mb-10 bg-white">
                    <View className="flex flex-row pt-20 pl-10 ">
                        <Text className="text-4xl font-extrabold text-blue-900">Live</Text>
                        <Text className="text-4xl text-blue-900"> Matches</Text>
                    </View>
                    <View>
                        <Text className="text-blue-900 pl-10 ">The Matches streaming now</Text>
                    </View>
                    <FlatList
                        className="shadow mt-5"
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={LiveMatchData}
                        renderItem={({ item }) =>
                            <LiveMatchesCard
                                TITLE={item.TITLE}
                                IMAGESOURCE={item.IMAGESOURCE}
                                VIEWS={item.VIEWS}
                                DATE={item.DATE}
                            />
                        }
                        keyExtractor={item => item.KEY}
                    />
                </View>
                <View className="bg-textColor pb-5">
                    <View className="w-full pt-8 pl-14">
                        <Text className="text-white text-4xl font-extrabold">
                            Become An Owner
                        </Text>
                    </View>
                    <View>
                        <Text className="text-white pl-14 pt-2 text-2xl">OF The Most Popular <Text className="text-red-700">NFT</Text> Items</Text>
                    </View>
                    <FlatList
                        className="mr-5"
                        horizontal
                        showsHorizontalScrollIndicator={false}
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
                </View>
                <View className="mb-10">
                    <View className="flex flex-row pt-20 pl-10 ">
                        <Text className="text-4xl font-extrabold text-blue-900">Curated</Text>
                        <Text className="text-4xl text-blue-900"> Matches</Text>
                    </View>
                    <View>
                        <Text className="text-blue-900 pl-10">The Matches played during the past 3 days</Text>
                    </View>
                    <FlatList
                        className="shadow mt-5"
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={CuratedData}
                        renderItem={({ item }) =>
                            <CuratedMatchesCard
                                TITLE={item.TITLE}
                                IMAGESOURCE={item.IMAGESOURCE}
                                VIDLENGTH={item.VIDLENGTH}
                                VIEWS={item.VIEWS}
                                DATE={item.DATE}
                            />
                        }
                        keyExtractor={item => item.KEY}
                    />
                    <View className="mt-10 flex items-center justify-center  ">
                        <TouchableOpacity className=" border-textColor p-1 rounded-full border-2 pl-6 pr-6">
                            <Text className="text-textColor font-bold">View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="mb-10">
                    <View className="flex flex-row pt-20 pl-10 ">
                        <Text className="text-4xl font-extrabold text-blue-900">HILGHLIGHTS</Text>
                        <Text className="text-4xl text-blue-900"> Videos</Text>
                    </View>
                    <View>
                        <Text className="text-blue-900 pl-10">The highlights of the Matches</Text>
                        <FlatList
                            className="shadow mt-5"
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={HighlightedData}
                            renderItem={({ item }) =>
                                <HighlightsVideosCard
                                    TITLE={item.TITLE}
                                    IMAGESOURCE={item.IMAGESOURCE}
                                    VIDLENGTH={item.VIDLENGTH}
                                    VIEWS={item.VIEWS}
                                    DATE={item.DATE}
                                />
                            }
                            keyExtractor={item => item.KEY}
                        />
                    </View>
                    <View className="mt-10 flex items-center justify-center  ">
                        <TouchableOpacity className=" border-textColor p-1 rounded-full border-2 pl-6 pr-6">
                            <Text className="text-textColor font-bold">View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="bg-textColor">
                    <ImageBackground source={require('../Assets/PodcastsbImg.png')}>
                        <View className="mt-10 ml-7">
                            <Text className="text-white text-xl font-extrabold">It's All</Text>
                            <Text className="text-white font-extrabold text-4xl">About</Text>
                            <Text className="text-white font-extrabold text-4xl">CRICKET!</Text>
                            <Text className="pt-5 text-white">Sharing experts thoughts about</Text>
                            <Text className="text-white">Cricket and what needs to be done to achieve</Text>
                            <Text className="text-white">the best cricketting experiece</Text>
                        </View>
                        <View className="mb-10">
                            <View className="flex flex-row pt-10 pl-10 ">
                                <Text className="text-4xl font-extrabold text-white">PODCASTS</Text>
                            </View>
                            <View>
                                <Text className="text-white pl-10 font-bold">Listen to the most significant Podcasts</Text>
                            </View>
                            <FlatList
                                className="shadow mt-5"
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={PodcastsData}
                                renderItem={({ item }) =>
                                    <PodcastsCard
                                        TITLE={item.TITLE}
                                        IMAGESOURCE={item.IMAGESOURCE}
                                        VIDLENGTH={item.VIDLENGTH}
                                        VIEWS={item.VIEWS}
                                        DATE={item.DATE}
                                    />
                                }
                                keyExtractor={item => item.KEY}
                            />
                            <View className="mt-10 flex items-center justify-center  ">
                                <TouchableOpacity className=" border-textColor p-1 rounded-full border-2 pl-6 pr-6">
                                    <Text className="text-textColor font-bold">View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default MainScreen