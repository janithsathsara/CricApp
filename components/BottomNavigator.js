import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLive } from '../redux/liveSlice';
import { toggleMain, toggleMenu, toggleNftstore, toggleSearch, toggleFixtures } from '../redux/iconSlice';

const BottomNavigator = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const live = useSelector((state) => state.live.value)
    const fixtures = useSelector((state) => state.icon.fixturesIcon)
    const main = useSelector((state) => state.icon.mainIcon)
    const menu = useSelector((state) => state.icon.menuIcon)
    const nftstore = useSelector((state) => state.icon.nftstoreIcon)
    const search = useSelector((state) => state.icon.searchIcon)


    BackHandler.addEventListener('hardwareBackPress', () => {
        dispatch(toggleMain())
    })

    const handleFixtures = () => {
        navigation.navigate("Fixtures")
        dispatch(toggleFixtures())
        if (live) {
            dispatch(toggleLive())
        }
    }

    const handleNFTStore = () => {
        navigation.navigate("NFTStore")
        dispatch(toggleNftstore())
        if (live) {
            dispatch(toggleLive())
        }
    }

    const handleHome = () => {
        navigation.navigate("Home")
        dispatch(toggleMain())
        if (live) {
            dispatch(toggleLive())
        }
    }

    const handleSearch = () => {
        navigation.navigate("Search")
        dispatch(toggleSearch())
        if (live) {
            dispatch(toggleLive())
        }
    }

    const handleMenu = () => {
        navigation.navigate("Menu")
        dispatch(toggleMenu())
        if (live) {
            dispatch(toggleLive())
        }
    }


    return (
        <View className="bg-white flex flex-row h-20 items-center justify-around">
            <TouchableOpacity onPress={handleHome}
            >
                <View className="flex shadow rounded-md w-13 items-center active:bg-slate-800">
                    {main ? <Icon name='home' size={30} color="#031952" /> : <Icon name='home' size={30} color="#808080" />}

                    <Text className="text-xs text-gray-500">Home</Text>
                </View>
            </TouchableOpacity>
            {live ? <View className="flex justify-center rounded-md w-13 items-center">
                <Icon name="circle" size={30} color={'red'} />
                <Text className="text-xs text-gray-500">Live</Text>
            </View> :
                <TouchableOpacity onPress={handleFixtures}>
                    <View className="flex justify-center rounded-md w-13 items-center">
                        {fixtures ? <Icon name='calendar-month' size={30} color="#031952" /> : <Icon name='calendar-month' size={30} color="#808080" />}
                        <Text className="text-xs text-gray-500">Fixtures</Text>
                    </View>
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={handleNFTStore}>
                <View className="flex items-center w-13 rounded-md">
                    {nftstore ? <Icon name='shopping-basket' size={30} color="#031952" /> : <Icon name='shopping-basket' size={30} color="#808080" />}
                    <Text className="text-xs text-gray-500">NFTStore</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch}>
                <View className="flex items-center rounded-md w-13">
                    {search ? <Icon name='search' size={30} color="#031952" /> : <Icon name='search' size={30} color="#808080" />}
                    <Text className="text-xs text-gray-500">Search</Text>
                </View>
            </TouchableOpacity>
            {live ?
                <TouchableOpacity onPress={handleFixtures}>
                    <View className="flex items-center w-13 rounded-md shadow">
                        <Icon name='calendar-month' size={30} color="#808080" />
                        <Text className="text-xs text-gray-500">Fixtures</Text>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={handleMenu}>
                    <View className="flex items-center w-13 rounded-md shadow">
                        {menu ? <Icon name='menu' size={30} color="#031952" /> : <Icon name='menu' size={30} color="#808080" />}
                        <Text className="text-xs text-gray-500">Menu</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

export default BottomNavigator