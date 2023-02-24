import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#231e2d',
    },
    header:{ 
      paddingTop:50,
      borderBottomWidth:7,
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
    settings_container:{
      position:"absolute",
      justifyContent:"space-between",
      flexDirection:"column",
      zIndex:1,
      width:"100%",
      backgroundColor:"rgba(0,0,0,.7)",
      borderRadius:10,
      padding:20,
    },
    settings_close_outer:{
      marginTop:10,
      backgroundColor:"rgba(100,0,0,1)",
      height:45,
      marginLeft:"auto",
      marginRight:"auto",
      borderRadius:20,

    },
    settings_close:{
      backgroundColor:"rgba(150,10,10,1)",
      borderRadius:20,
      textAlignVertical:"center",
      borderColor:"rgba(100,10,10,1)",
    },
    settings_header:{
      flexDirection:"row",
      justifyContent:'space-around',
      marginBottom:30,
    },
    settings_header_txt:{
      fontSize:30,
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
      borderRadius: 100,
      elevation: 2,
      backgroundColor: '#00000000',
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
      backgroundColor:"rgba(255,255,255,1)",
      marginLeft:"auto",
      marginRight:"auto",
    },
    inst_btn:{
      elevation:2,
      borderRadius:100,
      margin:10,
      marginVertical:10,
      backgroundColor: '#00000000',
    },
    dm_mute_inst:{
      marginTop:20,
      textAlign:"center",
      fontWeight:"900"
    },
    dm_inst_mute_high:{
      color:"#00ff9d"
    },
    dm_inst_mute_medium:{
      color:"#e0d12c"
    },
    dm_inst_mute_low:{
      color:"#b55c5c"
    },
    dm_inst_btn:{
      borderRadius:10,
      height:55,
      marginVertical:5,
      marginHorizontal:5
    },
    dm_inst_btn_active:{
      borderColor:"rgba(10,195,50,1)",
      borderWidth:7,
    },
    unchecked:{
      opacity:.50,
    },
    checked:{
      opacity:.85,
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