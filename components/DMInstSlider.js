import React from 'react';
import Slider from '@react-native-community/slider';
import Styles from "./Styles";

function DMInstSlider({ update_volume, inst_name, kickVolume, snareVolume, hatVolume }) {

    let inst_volume;
    if (inst_name == "KICK") {
        inst_volume = kickVolume;
    }
    if (inst_name == "SNARE") {
        inst_volume = snareVolume;
    }
    if (inst_name == "HAT") {
        inst_volume = hatVolume;
    }

    return (
        <Slider
            style={Styles.dm_slider}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            value={inst_volume}
            onValueChange={(v) => update_volume(v)}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
        />
    )

};

export default DMInstSlider;