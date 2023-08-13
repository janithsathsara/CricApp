import React, { useState } from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import FixturesScreen from "./screens/FixturesScreen";
import NFTStoreScreen from "./screens/NFTStoreScreen";
import MenuScreen from "./screens/MenuScreen";
import SearchScreen from "./screens/SearchScreen";
import BottomNavigator from "./components/BottomNavigator";
import LiveScreen from "./screens/LiveScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View
          className="flex flex-row w-full h-20 bg-textColor shadow "
          style={{ elevation: 5 }}
        >
          <Image
            className=" mt-6 mb-6 ml-16 scale-150"
            source={require("./Assets/LogoImage.png")}
          />
          <Image
            className=" mt-6 ml-44 scale-125"
            source={require("./Assets/ProfilePicture.png")}
          />
        </View>
        <stack.Navigator>
          <stack.Screen
            name="Home"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="Live"
            component={LiveScreen}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="Fixtures"
            component={FixturesScreen}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="NFTStore"
            component={NFTStoreScreen}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              headerShown: false,
            }}
          />
        </stack.Navigator>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
