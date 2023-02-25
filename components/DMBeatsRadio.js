import React from 'react';
import Styles from "./Styles";
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

function DMBeatsRadio({ loopLen, update_loopLen }) {

    const [checked, setChecked] = React.useState(loopLen.toString());

    React.useEffect(() => {
        try{
            const new_len = checked*1;
            update_loopLen(new_len);
        }
        catch(e){
            console.log("ERROR WITH update_loopLen");
        }
    }, [checked]);

    return (
        <View style={Styles.dm_radio_container}>
            <View>
                <Text style={Styles.txt}>8</Text>
            <RadioButton
                value="8"
                status={checked === '8' ? 'checked' : 'unchecked'}
                onPress={() => { setChecked('8'); }}
            />
            </View>
            <View>
                <Text style={Styles.txt}>12</Text>
            <RadioButton
                value="12"
                status={checked === '12' ? 'checked' : 'unchecked'}
                onPress={() => { setChecked('12'); }}
            />
            </View><View>
                <Text style={Styles.txt}>16</Text>
            <RadioButton
                value="16"
                status={checked === '16' ? 'checked' : 'unchecked'}
                onPress={() => { setChecked('16'); }}
            />
            </View>
            
        </View>
    )

};

export default DMBeatsRadio;