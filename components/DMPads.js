import React from 'react';
import { View } from 'react-native';
import Styles from "./Styles";
import DMInstrument from "./DMInstrument";
import DMInstSettings from './DMInstSettings';

function DMPads({ setKick, setHat, setSnare, loop, setKickVolume, setSnareVolume, setHatVolume, kickVolume, snareVolume, hatVolume }) {

    const [settings, setSettings] = React.useState(false);
    const [settingsInstrument, setSettingsInstrument] = React.useState("");

    function set_set_inst(inst) {
        setSettingsInstrument(inst);
    }

    function update_volume(v,inst) {
        if (inst == "KICK") {
            setKickVolume(v)
        }
        if (inst == "SNARE") {
            setSnareVolume(v)
        }
        if (inst == "HAT") {
            setHatVolume(v)
        }

    }

    return (
        <View style={Styles.dm_pads}>
            {settings ?
                <DMInstSettings
                    inst_name={settingsInstrument}
                    update_volume={update_volume}
                    setSettings={setSettings}
                    kickVolume={kickVolume}
                    snareVolume={snareVolume}
                    hatVolume={hatVolume}
                /> : null}
            <DMInstrument
                set_inst_array={setKick}
                loop={loop}
                inst_style={"dm_kick"}
                inst_name={"KICK"}
                setSettings={setSettings}
                set_set_inst={set_set_inst}
                inst_volume={kickVolume}
                update_volume={update_volume}
            />
            <DMInstrument
                set_inst_array={setSnare}
                loop={loop}
                inst_style={"dm_snare"}
                inst_name={"SNARE"}
                setSettings={setSettings}
                set_set_inst={set_set_inst}
                inst_volume={snareVolume}
                update_volume={update_volume}
            />
            <DMInstrument
                set_inst_array={setHat}
                loop={loop}
                inst_style={'dm_hat'}
                inst_name={"HAT"}
                setSettings={setSettings}
                set_set_inst={set_set_inst}
                inst_volume={hatVolume}
                update_volume={update_volume}
            />
        </View>
    )

};

export default DMPads;