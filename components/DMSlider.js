import React from 'react';
import Slider from '@react-native-community/slider';
import Styles from "./Styles";

function DMSlider({tempo,update_tempo}){

    return (
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
    )

};

export default DMSlider;