import React from 'react';
import { View , Text} from 'react-native';
import Styles from "./Styles";

const Header = function(){

    return (
        <View style={Styles.header}>
            <Text style={Styles.header_txt}>
                REACT NATIVE DRUM SEQUENCER
            </Text>
        </View>
    )

};

export default Header;