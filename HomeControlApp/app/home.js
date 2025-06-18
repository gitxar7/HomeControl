import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";

export default function Home() {

    // const historyArray = [
    //     { name: "Light 01", state: "On", date: "2024:10:24 1:20 PM" },
    //     { name: "Light 01", state: "Off", date: "2024:10:24 11:20 AM" },
    //     { name: "Light 01", state: "On", date: "2024:10:24 11:00 AM" },
    //     { name: "Light 01", state: "Off", date: "2024:10:24 10:45 AM" },
    //     { name: "Light 01", state: "On", date: "2024:10:24 10:25 AM" },
    // ];

    const [getHistoryArray, setHistoryArray] = useState([]);

    useEffect(() => {
        async function fetchData() {
                let response = await fetch("http://192.168.173.111:8080/HomeControl/LoadHistory");

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
            <StatusBar hidden={true}/>
            <Text style={stylesheet.text1}>HOME</Text>
            <View style={stylesheet.card_background}>
                <Pressable style={stylesheet.card} onPress={() => {
                    router.push({
                        pathname: "controls",
                        params: {name:"light1", id:"1"}
                    });
                }}>
                    <View style={stylesheet.card_icon}>
                        <FontAwesome style={{ textAlign: "center" }} name="lightbulb-o"
                            size={75}
                            color={"#FAE800"} />
                    </View>
                    <Text style={stylesheet.text2}>LIGHT 01</Text>
                </Pressable>
                <Pressable style={stylesheet.card} onPress={() => {
                    router.push({
                        pathname: "controls",
                        params: {name:"light2", id:"2"}
                    });
                }}>
                    <View style={stylesheet.card_icon}>
                        <FontAwesome style={{ textAlign: "center" }} name="lightbulb-o"
                            size={75}
                            color={"#FAE800"} />
                    </View>
                    <Text style={stylesheet.text2}>LIGHT 02</Text>
                </Pressable>
            </View>

            <View style={stylesheet.card_background}>
                <View style={[stylesheet.card, { opacity: 0.5 }]}>
                    <View style={stylesheet.card_icon} >
                        <FontAwesome style={{ textAlign: "center" }} name="gear"
                            size={75}
                            color={"#59ADFF"} />
                    </View>
                    <Text style={stylesheet.text2}>DEVICE B</Text>
                </View>
                <View style={[stylesheet.card, { opacity: 0.5 }]}>
                    <View style={stylesheet.card_icon} >
                        <FontAwesome style={{ textAlign: "center" }} name="gear"
                            size={75}
                            color={"#59ADFF"} />
                    </View>
                    <Text style={stylesheet.text2}>DEVICE C</Text>
                </View>
            </View>

            <View style={stylesheet.card_background}>
                <View style={[stylesheet.card, { opacity: 0.5 }]}>
                    <View style={stylesheet.card_icon} >
                        <FontAwesome style={{ textAlign: "center" }} name="gear"
                            size={75}
                            color={"#59ADFF"} />
                    </View>
                    <Text style={stylesheet.text2}>DEVICE D</Text>
                </View>
                <View style={[stylesheet.card, { opacity: 0.5 }]}>
                    <View style={stylesheet.card_icon} >
                        <FontAwesome style={{ textAlign: "center" }} name="gear"
                            size={75}
                            color={"#59ADFF"} />
                    </View>
                    <Text style={stylesheet.text2}>DEVICE E</Text>
                </View>
            </View>

            <Text style={stylesheet.text3}>History</Text>

            <FlashList data={getHistoryArray}
                renderItem={({ item }) => {

                    return (
                        <View style={stylesheet.history_card}>
                            <Text style={stylesheet.text4}>{item.device.name} turned {item.status.name} at {item.datetime} </Text>
                        </View>
                    )

                }}
                estimatedItemSize={200}
            />
        </LinearGradient>
    );
}

const stylesheet = StyleSheet.create({
    background: {
        flex: 1,
        paddingVertical: 20,
        rowGap: 20,
        paddingHorizontal: 20
    },

    card_background: {
        flexDirection: "row",
        columnGap: 20
    },

    card: {
        flex: 1,
        height: "130",
        backgroundColor: "#448AFF",
        borderRadius: 10,
        padding: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },

    card_icon: {
        height: "85",
        justifyContent: "center",
        // backgroundColor: "red",
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
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },

    text2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },

    text3: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1370B1",
        marginTop: 10,
        marginBottom: -10
    },

    text4: {
        fontSize: 15,
        // fontWeight: "bold",
        color: "#1370B1",
    },
});