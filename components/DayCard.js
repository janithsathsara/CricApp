import { View, Text } from 'react-native'
import React from 'react'

const DayCard = ({ NUMBER, DAY }) => {

    return (
        <View className="border w-14 ml-5 justify-around items-center">
            <Text className="text-textColor text-3xl font-extrabold">{NUMBER}</Text>
            <Text className="text-textColor text-sm">{DAY}</Text>
        </View>
    )
}

export default DayCard