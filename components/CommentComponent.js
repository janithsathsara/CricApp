import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'

const CommentComponent = ({ NAME, IMAGESOURCE, COMMENT, DATE, ISEDITED, LIKECOUNT, DISLIKECOUNT }) => {
    return (
        <View className="bg-white flex flex-row mt-2 mb-2 w-[100vw] "
            style={{ elevation: 2 }}
        >
            <View className=" scale-100 m-2 p-2">
                <Image
                    source={IMAGESOURCE} />
            </View>
            <View>
                <Text className="text-xs text-gray-300">{NAME}</Text>
                <View className="w-[78vw]">
                    <Text className="text-sm text-justify text-black">{COMMENT}</Text>
                </View>
                <View className="flex flex-row pt-2 items-baseline w-[78vw] justify-around ">
                    <Text className="text-gray-300 -m-2">{DATE}</Text>
                    {ISEDITED && <Text className="text-gray-300">(edited)</Text>}
                    <View className="flex flex-row pl-10">
                        <Icon name='thumbsup' size={15} color={'#808080'} />
                        <Text className="pl-2 text-gray-500">{LIKECOUNT}</Text>
                    </View>
                    <View className="flex flex-row pl-8 pb-4">
                        <Icon name='thumbsdown' size={15} color={'#808080'} />
                        <Text className="pl-2 text-gray-500">{DISLIKECOUNT}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default CommentComponent