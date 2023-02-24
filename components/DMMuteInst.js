import React from 'react';
import { Pressable , View, Text} from 'react-native';
import Styles from "./Styles";

const DMMuteInst = function({mute_inst,inst_volume}){

    return (
        <Pressable onPress={mute_inst} >
            {inst_volume === 0 ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_low]}>O</Text>: null}
            {(inst_volume > 0) && (inst_volume < 0.1) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_low]}>l</Text>: null}
            {(inst_volume >= 0.1) && (inst_volume < 0.2) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_low]}>l l</Text>: null}
            {(inst_volume >= 0.2) && (inst_volume < 0.3) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_low]}>l l l</Text>: null}
            {(inst_volume >= 0.3) && (inst_volume < 0.4) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_medium]}>l l l l</Text>: null}
            {(inst_volume >= 0.4) && (inst_volume < 0.5) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_medium]}>l l l l l</Text>: null}
            {(inst_volume >= 0.5) && (inst_volume < 0.6) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_medium]}>l l l l l l</Text>: null}
            {(inst_volume >= 0.6) && (inst_volume < 0.7) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_high]}>l l l l l l l</Text>: null}
            {(inst_volume >= 0.7) && (inst_volume < 0.8) ? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_high]}>l l l l l l l l l</Text>: null}
            {(inst_volume >= 0.8 )? <Text style={[Styles.dm_mute_inst,Styles.dm_inst_mute_high]}>l l l l l l l l l l</Text>: null}
        </Pressable>
    )

};

export default DMMuteInst;