import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';

export default function Controls() {

    const { name } = useLocalSearchParams();
    const { id } = useLocalSearchParams();
    // console.log(name);

    const [getButtonPress, setButtonPress] = useState(false);
    const [getButtonProcess, setButtonProcess] = useState(false);
    const [getHistoryArray, setHistoryArray] = useState([]);

    // const historyArray = [
    //     { name: "Light 01", state: "On", date: "2024:10:24 1:20 PM" },
    //     { name: "Light 01", state: "Off", date: "2024:10:24 11:20 AM" },
    //     { name: "Light 01", state: "On", date: "2024:10:24 11:00 AM" },
    //     { name: "Light 01", state: "Off", date: "2024:10:24 10:45 AM" },
    //     { name: "Light 01", state: "On", date: "2024:10:24 10:25 AM" },
    // ];

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://192.168.173.111:8080/HomeControl/LoadHistory?id=" + id);

            if (response.ok) {
                let json = await response.json();
                let history_array = json.historyList;
                setHistoryArray(history_array);
                // console.log(json);
            }
        }

        fetchData();
        // console.log(getHistoryArray);

        // const interval = setInterval(() => {
        //     fetchData();
        // }, 1000);

        // return () => clearInterval(interval);
    }, [])

    return (
        <LinearGradient colors={["#005BEA", "#00C6FB"]} style={stylesheet.background}>
            {/* <StatusBar hidden={true} /> */}

            <View style={stylesheet.view2}>
                <Pressable style={stylesheet.view3} onPress={() => {
                    router.back();
                }}>
                    <FontAwesome style={{ marginLeft: -3, marginTop: 2 }} name="chevron-left"
                        size={20}
                        color={"white"} />
                </Pressable>

                <Text style={stylesheet.text1}>LIGHT 01</Text>
            </View>

            <View style={stylesheet.view1}>
                <Pressable style={[getButtonPress ? stylesheet.view4_x : stylesheet.view4,
                getButtonProcess ? { borderWidth: 5 } : { borderWidth: 0 }]} onPressIn={() => {
                    setButtonProcess(true)
                }} onPressOut={() => {
                    setButtonProcess(false)
                }} onPress={async () => {
                    // setButtonPress(getButtonPress ? false : true);
                    let status_id = getButtonPress ? 2 : 1;
                    let response = await fetch("http://192.168.173.111:8080/HomeControl/SaveStatus?d_id="+id+"&s_id="+status_id);

                    if (response.ok) {
                        let json = await response.json();
                        // console.log(json);
                        if (json.success) {
                            setButtonPress(getButtonPress ? false : true);
                            let status = getButtonPress ? "off" : "on";
                            const response = await fetch("http://192.168.173.155?" + name + "=" + status);
                        }
                    }
                    
                }}>

                    <FontAwesome name="lightbulb-o"
                        size={120}
                        color={getButtonPress ? "#F8C822" : "#008EF2"} />

                </Pressable>

                <Text style={stylesheet.text2}>{name} is {getButtonPress ? "On" : "Off"}</Text>
            </View>

            <View style={stylesheet.view5}>
                <Text style={stylesheet.text3}>History</Text>

                <FlashList data={getHistoryArray}
                    renderItem={({ item }) => {

                        return (
                            <View style={stylesheet.history_card}>
                                <Text style={stylesheet.text4}>Turned {item.status.name} at {item.datetime} </Text>
                            </View>
                        )

                    }}
                    estimatedItemSize={200}
                />
            </View>

        </LinearGradient>
    );
}

const stylesheet = StyleSheet.create({
    background: {
        flex: 1,
        // paddingVertical: 20,
        rowGap: 20,
        // paddingHorizontal: 20
    },

    view1: {
        paddingHorizontal: 10,
        columnGap: 10,
        alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        height: "40%",
        // backgroundColor: "#080540",
        padding: 30,

    },

    view2: {
        paddingHorizontal: 10,
        columnGap: 10,
        alignItems: "center",
        width: "100%",
        height: 66,
        backgroundColor: "#080540",
        flexDirection: "row"
    },

    view3: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#052A4E",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        zIndex: 2
    },

    view4: {
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: "#0071EE",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 20,
        borderColor: "#59ADFF"
    },

    view4_x: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "#0566D1",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#59ADFF"
    },

    view5: {
        paddingHorizontal: 20,
        flex: 1
    },

    history_card: {
        height: "40",
        backgroundColor: "#00A7F6",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        opacity: 0.8,
        shadowColor: "#448AFF",
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },

    text1: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        flex: 1,
        marginLeft: -60,
        zIndex: 1
    },

    text2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 20,
        opacity: 0.5
    },

    text3: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1370B1",
        marginTop: 10,
        marginBottom: 10
    },

    text4: {
        fontSize: 16,
        // fontWeight: "bold",
        color: "#1370B1",
    },
});