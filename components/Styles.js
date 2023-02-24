import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#20124D',
    },
    header:{ 
      paddingTop:50,
      borderBottomWidth:10,
      borderColor:"white"
    },
    header_txt:{
      color:"white",
      fontWeight:"900",
    },
    btn:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 110,
      height: 110,
      borderRadius: 115/2,
      elevation: 3,
      backgroundColor: '#ffffff66',
      borderColor:"white",
      borderWidth: 2,
      borderStyle:"solid",
    },
    btn_text:{
      color:'white',
      fontSize:20,
      fontWeight: "900",
    },
    txt:{
      color:"white",
      textAlign:"center",
      fontWeight: "900",
      padding:10,
    },
    dm_kick:{
      backgroundColor:'turquoise',
    }, 
    dm_snare:{
      backgroundColor:'#ff005d',
    }, 
    dm_hat:{
      backgroundColor:'#ffbb00',
    }, 
    drum_machine:{
      flex:1,
      width:300,
      flexDirection:'column',
      justifyContent:"space-around"
    },
    dm_pads:{
      // flex:.85,
      flexDirection:'row',
    },
    dm_nav:{
      // flex:.1,
      flexDirection:'row',
      justifyContent:"space-evenly",
    },
    dm_nav_btn:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 50,
      marginHorizontal:20,
      borderRadius: 100/25,
      elevation: 3,
      backgroundColor: '#00000000',
      borderColor:"#ffffff99",
      borderWidth: 2,
      borderStyle:"solid",
    },
    dm_tempo_input:{
      color:"white",
      textAlign:"center",
      flex:1,
      width:100,
      fontWeight:"900",
    },
    dm_instrument:{
      flex:.4,
      justifyContent:"center",
      flexDirection:'column',
    },
    inner:{
      width:90, 
      height:45,
      borderRadius:10,
      backgroundColor:"white",
      marginLeft:"auto",
      marginRight:"auto",
    },
    dm_inst_btn:{
      borderRadius:10,
      height:55,
      marginVertical:5,
      marginHorizontal:5
    },
    dm_inst_btn_active:{
      borderColor:"rgba(100,10,10,1)",
      borderWidth:7,
    },
    unchecked:{
      opacity:.50,
    },
    checked:{
      opacity:.85,
    },
    dm_play_btn:{
      height:50,
      margin:5,
      flex:.5,
      justifyContent:"space-around"

    },
    dm_play_btn_txt:{
      color:"white",
      textAlign:"center",
      margin:5,
      flex:1,
      transform: [{ rotate: '-90deg'}],
    }
  });

  export default Styles;