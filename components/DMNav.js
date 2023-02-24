import React from 'react';
import { TouchableOpacity, View , Text } from 'react-native';
import DMTempoSettings from './DMTempoSettings';
import Styles from "./Styles";

function DMNav({looping,stopLoop,startLoop,resetLoop,tempo,update_tempo}){
    
    const [showVolume, setShowVolume] = React.useState(false);
    function toggle_tempo_settings(){
        setShowVolume(prev => !prev)
    }

    return (
        <View style={Styles.dm_nav}>
            {showVolume ? 
                <DMTempoSettings 
                    setShowVolume={setShowVolume}
                    looping={looping}
                    stopLoop={stopLoop}
                    startLoop={startLoop}
                    resetLoop={resetLoop}
                    tempo={tempo}
                    update_tempo={update_tempo}
                    /> : null}
            <TouchableOpacity 
                onPress={looping ? stopLoop : startLoop} 
                style={Styles.dm_nav_btn}>
                <Text style={Styles.txt}>{looping ? "PAUSE" : "PLAY"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={Styles.dm_nav_btn}
                onPress={toggle_tempo_settings}
                >
                <Text style={Styles.txt}>
                {tempo}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={resetLoop}
                style={Styles.dm_nav_btn}>
                <Text style={Styles.txt}>RESET</Text>
            </TouchableOpacity>
        </View>
    )

};

export default DMNav;