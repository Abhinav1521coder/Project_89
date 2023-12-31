import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createMaterialBottomTabNavigator(); 

export default class BottomTabNavigator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        light_theme: true
      };
    }

    render(){
        return (
            <Tab.Navigator
                labeled={false}
                barStyle={styles.bottomTabStyle}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Feed") {
                            iconName = focused 
                                ? "book" 
                                : "book-outline";
                        } else if (route.name === "CreatePost") {
                            iconName = focused ? "create" : "create-outline";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={RFValue(13)}
                                color={light_theme ? "black" : "white"}
                                style={styles.icons}
                            />
                        );
                    }
                })}
                activeColor={"#ee8249"}
                inactiveColor={"black"}
            >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="CreatePost" component={CreatePost} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#849599",
        height: "11%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height:RFValue(30)
    }
});

