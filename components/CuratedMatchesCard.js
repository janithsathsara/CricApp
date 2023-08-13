import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const CuratedMatchesCard = ({ IMAGESOURCE, VIDLENGTH, TITLE, VIEWS, DATE }) => {
    return (

        <View
            className="relative  bg-white items-center w-[70vw] h-[35vh] ml-3 mr-3 rounded-xl mb-2"
            style={{
                elevation: 3
            }}
        >
            <View className="w-full h-[20vh]">
                <Image
                    source={IMAGESOURCE}
                    className="w-full h-full bg-cover rounded-t-xl"
                    style={{ resizeMode: 'cover' }}
                />
            </View>
            <TouchableOpacity className="z-50 absolute mt-32 pt-3 flex flex-row justify-center items-center">
                <View className="bg-greenColor flex flex-row justify-center items-center rounded-full p-1 pl-3 pr-3">
                    <Icon name='play-circle' size={25} color={'#84D400'} />
                    <Text className="text-black font-extrabold pl-1"> {VIDLENGTH}</Text>
                </View>
            </TouchableOpacity>
            <View className=" mt-7 pl-3 pr-3 ">
                <Text className="text-black text-center font-bold">{TITLE}</Text>
            </View>
            <View className="flex flex-row justify-between pt-3 w-[60vw] ">

                <Text className="text-xs text-slate-400">{VIEWS}K Views</Text>
                <Text className="text-xs text-slate-400">{DATE}</Text>
            </View>
        </View>
    )
}

export default CuratedMatchesCard