import React from 'react';
import { Pressable , View , Text ,TouchableOpacity } from 'react-native';
import Styles from "./Styles";

const DMButton = function({loop,id,set_inst_array,inst_style,inst_array,array_val,modulo}){

    const [status, setStatus] = React.useState('unchecked');

    async function onButtonToggle(){
        set_inst_array(prev => update_inst(prev));
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };

    function update_inst(array){
        if(status !== 'checked'){array[id] = 1;}
        else{array[id] = 0;}
        return array;
    }

    React.useEffect(() => {
        if(inst_array[id]===1){
            setStatus('checked');
        }else{
            setStatus('unchecked');
        }
    }, [inst_array]);
    

    return (
            <Pressable
                onPress={onButtonToggle}
                style={[Styles.dm_inst_btn]}
                >
                { modulo ? <View style={Styles.hr}/> : null}
                <View 
                style={[
                    Styles[inst_style],
                    Styles[status], 
                    Styles.dm_inst_btn
                    ]}>
                    <View style={[
                        Styles.inner,
                        loop === id ? Styles.dm_inst_btn_active : null,
                        Styles[status]
                        ]}>
                    </View>

                </View>
            </Pressable> 
    )

};
// memo for rendering efficiency
function prevDMButton(prev,next){
    return (prev.loop === prev.id) === (next.loop === next.id) === (next.array_val === prev.array_val);
}    

// export default DMButton;
export default React.memo(DMButton,prevDMButton);