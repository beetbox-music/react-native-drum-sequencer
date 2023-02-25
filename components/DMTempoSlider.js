import React from 'react';
import Slider from '@react-native-community/slider';
import Styles from "./Styles";
import { TouchableOpacity, View , Text } from 'react-native';

function DMTempoSlider({tempo,update_tempo}){

    return (
        <View style={Styles.dm_slider_container}>
            <Slider
                style={Styles.dm_slider}
                minimumValue={40}
                step={5}
                maximumValue={340}
                value={tempo}
                onValueChange={(tempo) => update_tempo(tempo)}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    )

};

export default DMTempoSlider;