import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLive } from '../redux/liveSlice';
import { toggleNone } from '../redux/iconSlice';

const MainComponent = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handlePress = () => {
        navigation.navigate("Live")
        dispatch(toggleNone())
        dispatch(toggleLive())
    }
    return (
        <View className="bg-textColor ">
            <ImageBackground
                source={require('../Assets/BackgroundPhoto.png')}
                opacity={0.5}
            ><View className="w-full h-[46vh]">
                    <View className="absolute">
                        <Text className="text-white text-3xl font-bold pt-10 pl-8">LIMITLESS</Text>
                        <Text className="text-white text-5xl font-bold pl-8">CRICKET STREAMING</Text>
                    </View>
                    <View className="absolute">
                        <View className="flex flex-row pt-44 pl-8 ">
                            <Text className="pr-1 text-white font-bold text-lg">
                                Ready to watch cricket
                            </Text>
                            <Text className="text-white text-lg">live streaming?</Text>
                        </View>
                    </View>
                    <View className="">
                        <TouchableOpacity onPress={handlePress}>
                            <View className="flex flex-row items-center z-50 pt-56 pl-10">
                                <View className="rounded-full z-50 bg-white">
                                    <Icon name='play-circle' color='red' className="z-50 rounded-full" size={70} />
                                </View>
                                <View className="-ml-12 z-0">
                                    <Text className="text-white text-lg border-2 rounded-full border-gray-300 p-2 pl-12 z-0"> STREAMING NOW
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
            </ImageBackground >
        </View >
    )
}

export default MainComponent
