import React from 'react';
import { TouchableOpacity, View , Text } from 'react-native';
import Styles from "./Styles";

function DMNav({looping,stopLoop,startLoop,resetLoop,tempo}){
    
    return (
        <View style={Styles.dm_nav}>
            <TouchableOpacity 
                onPress={looping ? stopLoop : startLoop} 
                style={Styles.dm_nav_btn}>
                <Text style={Styles.btn_text}>{looping ? "PAUSE" : "PLAY"}</Text>
            </TouchableOpacity>
            <View style={Styles.dm_nav_btn}>
                <Text style={Styles.btn_text}>
                {tempo}
                </Text>
            </View>
            <TouchableOpacity
                onPress={resetLoop}
                style={Styles.dm_nav_btn}>
                <Text style={Styles.btn_text}>RESET</Text>
            </TouchableOpacity>
        </View>
    )

};

export default DMNav;