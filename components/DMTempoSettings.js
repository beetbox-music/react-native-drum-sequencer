import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from "./Styles";
import DMTempoSlider from "./DMTempoSlider";
import DMBeatsRadio from "./DMBeatsRadio";

function DMTempoSettings({
    setShowVolume,
    tempo,
    update_tempo,
    loopLen,
    update_loopLen
}) {

    function close() {
        setShowVolume(false);
    }

    return (
        <View style={Styles.tempo_settings_container}>
            <View style={Styles.tempo_settings_header}>
                <Pressable onPress={close} >
                    <View style={Styles.settings_close_outer}>
                        <Text style={[Styles.txt, Styles.settings_close]}> X </Text>
                    </View>
                </Pressable>
                <DMBeatsRadio
                    loopLen={loopLen}
                    update_loopLen={update_loopLen}

                />
            </View>
            <DMTempoSlider
                tempo={tempo}
                update_tempo={update_tempo}
            />
        </View>
    )

};


export default DMTempoSettings;