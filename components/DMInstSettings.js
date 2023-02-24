import React from 'react';
import { View,Text,Pressable} from 'react-native';
import DMInstSlider from './DMInstSlider';
import Styles from "./Styles";

const DMInstSettings = function({inst_name,update_volume,setSettings,kickVolume,snareVolume,hatVolume}){

    function close(){
        setSettings(false);
    }

    return (
            <View style={Styles.settings_container}>
                <Pressable onPress={close} >
                <View style={Styles.settings_close_outer}>
                    <Text style={[Styles.txt, Styles.settings_close]}>CLOSE</Text>
                    </View>
                </Pressable>
                <Text style={Styles.txt}>
                    {inst_name}
                </Text>
                <DMInstSlider 
                    update_volume={update_volume} 
                    inst_name={inst_name}
                    kickVolume = {kickVolume}
                    snareVolume = {snareVolume}
                    hatVolume = {hatVolume}
                    />
            </View>
    )

};

export default DMInstSettings;