import React from 'react';
import {  View, Text,Pressable } from 'react-native';
import Styles from "./Styles";
import DMButton from "./DMButton";

function DMInstrument({loop,set_inst_array,inst_style,inst_name,set_set_inst,setSettings}){

    function open_inst_settings(){
        set_set_inst(inst_name);
        setSettings(prev => !prev);
    }


    return (
        <View style={Styles.dm_instrument}>
            <Pressable onPress={open_inst_settings} >
                <Text style={Styles.txt}>
                    {inst_name}
                </Text>
            </Pressable>
            <DMButton 
                loop={loop}
                inst_style={inst_style} 
                set_inst_array={set_inst_array} 
                id={7}/>
            <DMButton 
                loop={loop} 
                inst_style={inst_style}
                set_inst_array={set_inst_array} 
                id={6}/>
            <DMButton 
                loop={loop}
                inst_style={inst_style}
                set_inst_array={set_inst_array} 
                id={5}/>
            <DMButton 
                loop={loop} 
                inst_style={inst_style}
                set_inst_array={set_inst_array} 
                id={4}/>
            <DMButton 
                loop={loop}
                inst_style={inst_style} 
                set_inst_array={set_inst_array} 
                id={3}/>
            <DMButton 
                loop={loop} 
                inst_style={inst_style}
                set_inst_array={set_inst_array} 
                id={2}/>
            <DMButton 
                loop={loop} 
                inst_style={inst_style}
                set_inst_array={set_inst_array} 
                id={1}/>
            <DMButton 
                loop={loop} 
                inst_style={inst_style}
                set_inst_array={set_inst_array} 
                id={0}/>
        </View>
    )

};

export default React.memo(DMInstrument);