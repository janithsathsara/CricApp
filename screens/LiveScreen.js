import { View, Text, SafeAreaView, TextInput, Image, FlatList, BackHandler } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import CommentComponent from '../components/CommentComponent'
import CommentData from '../Data/CommentData'
import { useDispatch } from 'react-redux'
import { toggleLive } from '../redux/liveSlice';

const VidSource = (require('../Assets/LiveVideo.mp4'))

const LiveScreen = () => {

    const dispatch = useDispatch()
    BackHandler.addEventListener('hardwareBackPress', () => {
        dispatch(toggleLive())
    })

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex justify-center items-center">
                <View className="w-full h-1/3">
                    <Video
                        source={VidSource}
                        resizeMode={"cover"}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        fullscreen={true}
                        // className="w-[100vw] h-[100vw]"
                        controls={true}
                        repeat={true}
                    />
                </View>
                <View className="w-full p-3 flex flex-row items-center justify-around z-50"
                    style={{ elevation: 5 }}
                >

                    <Image
                        className=" ml-5 scale-100"
                        source={require("../Assets/ProfilePicture.png")}
                    />
                    <TextInput
                        placeholder="Add a public comment"
                        className="pl-4 border border-gray-300 text-gray-300 rounded-full w-[70vw]"
                        placeholderTextColor={'#D8D8D8'}
                    />
                </View>
                <FlatList
                    className="z-0"
                    showsVerticalScrollIndicator={false}
                    data={CommentData}
                    renderItem={({ item }) =>
                        <CommentComponent
                            NAME={item.NAME}
                            IMAGESOURCE={item.IMAGESOURCE}
                            COMMENT={item.COMMENT}
                            DATE={item.DATE}
                            ISEDITED={item.ISEDITED}
                            LIKECOUNT={item.LIKECOUNT}
                            DISLIKECOUNT={item.DISLIKECOUNT}
                        />}
                    keyExtractor={item => item.KEY}
                />

            </View>
        </SafeAreaView>
    )
}

export default LiveScreen