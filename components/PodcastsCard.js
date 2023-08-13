import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const PodcastsCard = ({ IMAGESOURCE, TITLE, VIDLENGTH, VIEWS, DATE }) => {
    return (
        <View
            className="relative bg-inherit items-center w-[70vw] h-[52vh] ml-3 mr-3 rounded-xl mb-2"
            style={{
                elevation: 3
            }}
        >
            <View className="w-full h-[32vh]">
                <Image
                    source={IMAGESOURCE}
                    className="w-full h-full bg-cover rounded-t-xl"
                    style={{ resizeMode: 'cover' }}
                />
            </View>
            <TouchableOpacity className="z-50 absolute mt-60 flex flex-row justify-center items-center">
                <View className="relative bg-greenColor flex flex-row justify-center items-center rounded-full p-1 pl-3 pr-3">
                    <Icon name='play-circle' size={25} color={'#ffffff'} className="" />
                    {/* <View className="absolute w-3 h-3 -ml-2 bg-black"></View> */}
                    <Text className="text-black font-extrabold pl-1"> {VIDLENGTH}</Text>
                </View>
            </TouchableOpacity>
            <View className=" mt-12 pl-3 pr-3 ">
                <Text className="text-white text-center font-bold">{TITLE}</Text>
            </View>
            <View className="flex flex-row justify-between mt-7 w-[60vw] ">

                <Text className="text-xs text-slate-400">{VIEWS}K Views</Text>
                <Text className="text-xs text-slate-400">{DATE}</Text>
            </View>
        </View>
    )
}

export default PodcastsCard