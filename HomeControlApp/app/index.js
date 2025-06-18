import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {

    const imagePath = require("../assets/icon-text.png");
    const [getPasswordVisibility, setPasswordVisibility] = useState(true);
    const [getPasswordVisibilityIcon, setPasswordVisibilityIcon] = useState("eye");
    const [getButtonProcess, setButtonProcess] = useState(true);
    const [getButtonPress, setButtonPress] = useState(false);

    return (
        <LinearGradient colors={["#005BEA", "#00C6FB"]} style={stylesheet.background}>
            <StatusBar hidden={true} />
            {/* <ScrollView> */}
                <View style={stylesheet.container}>
                    <Image style={stylesheet.logo_image} source={imagePath} contentFit='contain' />
                    <Text style={stylesheet.text1}>Log in</Text>
                    <Text style={stylesheet.text2}>Hello! Welcome to HomeControl, Bright your Household...</Text>

                    <Text style={stylesheet.text4}>Username:</Text>
                    <TextInput style={stylesheet.input1} />

                    <Text style={stylesheet.text4}>Pin:</Text>
                    <View style={stylesheet.inputView}>
                        <TextInput style={stylesheet.input2} secureTextEntry={getPasswordVisibility} inputMode="text" />
                        <Pressable onPress={() => {
                            if (getPasswordVisibility) {
                                setPasswordVisibility(false);
                                setPasswordVisibilityIcon("eye-slash");
                            } else {
                                setPasswordVisibility(true);
                                setPasswordVisibilityIcon("eye");
                            }

                        }}>
                            <FontAwesome name={getPasswordVisibilityIcon}
                                size={20}
                                color="black" />
                        </Pressable>
                    </View>

                    <Pressable disabled={!getButtonProcess} style={getButtonPress ? stylesheet.btn1 : stylesheet.btn1_x} onPressIn={() => {
                        setButtonPress(true)
                    }} onPressOut={() => {
                        setButtonPress(false)
                    }} onPress={async () => {
                        setButtonProcess(false);
                        router.replace("home");
                    }}>
                        {getButtonProcess ? <FontAwesome name="paper-plane"
                            size={18}
                            color="#008EF2" /> : null}
                        <Text style={stylesheet.text3}>{getButtonProcess ? "Enter" : "Entering..."}</Text>
                    </Pressable>

                </View>
            {/* </ScrollView> */}
        </LinearGradient>
    );
}

const stylesheet = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 40,
    },
    container: {
        flex: 1,
        rowGap: 12,
        marginTop:30,
        paddingHorizontal: 25,
    },

    inputView: {
        width: "100%",
        height: 40,
        borderStyle: "solid",
        borderWidth: 1,
        fontSize: 18,
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 10
    },

    text1: {
        fontSize: 32,
        fontWeight: "bold",
        // color: "blue",
    },

    text2: {
        marginBottom: 20,
        fontSize: 20,
    },

    text3: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#008EF2",
    },

    text4: {
        fontSize: 18,
        fontWeight: "bold",
    },

    input1: {
        width: "100%",
        height: 40,
        borderStyle: "solid",
        borderWidth: 1,
        fontSize: 18,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    input2: {
        flex: 1,
        height: 40,
        fontSize: 18,
    },

    logo_image: {
        width: "100%",
        height: 100,
        // borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
    },

    btn1: {
        backgroundColor: "#080540",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: 'row',
        columnGap: 10,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "pink"
    },

    btn1_x: {
        backgroundColor: "#080540",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: 'row',
        columnGap: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
});