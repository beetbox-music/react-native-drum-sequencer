import React from 'react';
import { View , Text , Pressable} from 'react-native';
import Styles from "./Styles";
import DMSlider from "./DMSlider";

function DMTempoSettings({ 
    setShowVolume,
    looping,
    stopLoop,
    startLoop,
    resetLoop,
    tempo,
    update_tempo,
}) {

    function close() {
        setShowVolume(false);
    }

    return (
        <View style={Styles.tempo_settings_container}>
            <Pressable onPress={close} >
                <View style={Styles.settings_close_outer}>
                    <Text style={[Styles.txt, Styles.settings_close]}> X </Text>
                </View>
            </Pressable>
            <DMSlider
                looping={looping}
                stopLoop={stopLoop}
                startLoop={startLoop}
                resetLoop={resetLoop}
                tempo={tempo}
                update_tempo={update_tempo}
            />
        </View>
    )

};


export default DMTempoSettings;