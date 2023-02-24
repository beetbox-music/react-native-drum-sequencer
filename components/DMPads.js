import React from 'react';
import { View } from 'react-native';
import Styles from "./Styles";
import DMInstrument from "./DMInstrument";

function DMPads({setKick,setHat,setSnare,loop}){
    
    return (
        <View style={Styles.dm_pads}>
            <DMInstrument
                set_inst_array = {setKick}
                loop = {loop}
                inst_style = {"dm_kick"}
                inst_name = {"KICK"}
            />
            <DMInstrument
                set_inst_array = {setSnare}
                loop = {loop}
                inst_style = {"dm_snare"}
                inst_name = {"SNARE"}
            />
            <DMInstrument
                set_inst_array = {setHat}
                loop = {loop}
                inst_style = {'dm_hat'}
                inst_name = {"HAT"}
            />
        </View>
    )
    
};

export default DMPads;