import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: '#231e2d',
    paddingTop:30,
  },
  header: {
    display:"none",
    borderBottomWidth: 7,
    borderColor: "white",
    margin:0,
    paddingTop: 40,
  },
  header_txt: {
    color: "white",
    fontSize:10,
    fontWeight: "900",
  },
  hr: {
    borderColor: 'rgba(255,255,255,0.4)',
    borderStyle: "dashedx",
    borderBottomWidth: 1.5,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    borderRadius: 115 / 2,
    elevation: 3,
    backgroundColor: '#ffffff66',
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
  },
  btn_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: "900",
  },
  txt: {
    color: "white",
    textAlign: "center",
    fontWeight: "900",
    padding: 10,
  },
  dm_kick: {
    backgroundColor: 'turquoise',
  },
  dm_snare: {
    backgroundColor: '#ff005d',
  },
  dm_hat: {
    backgroundColor: '#ffbb00',
  },
  drum_machine: {
    flex: 1,
    width: "100%",
    paddingHorizontal:10,
    flexDirection: 'column',
    justifyContent: "center",
  },
  dm_pads: {
    // flex:.85,
    flexDirection: 'row',
  },
  dm_nav: {
    // flex:.1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  dm_nav_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginVertical:10,
    marginHorizontal: 20,
    borderRadius: 100,
    elevation: 2,
    backgroundColor: '#00000000',
  }, 
  settings_container: {
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "column",
    zIndex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,.7)",
    borderRadius: 10,
    padding: 20,
  },
  settings_close_outer: {
    marginTop: 10,
    backgroundColor: "rgba(100,0,0,1)",
    height: 37,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,

  },
  settings_close: {
    backgroundColor: "rgba(150,10,10,1)",
    borderRadius: 20,
    width:"95%",
    textAlignVertical: "center",
    borderColor: "rgba(100,10,10,1)",
  },
  settings_header: {
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  settings_header_txt: {
    fontSize: 30,
  },
  tempo_settings_container: {
    position: "absolute",
    justifyContent: "space-evenly",
    width: "100%",
    flexDirection: "row",
    flex: 1,
    bottom: 60,
    left:0,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,.7)",
    borderRadius: 10,
    padding:20,
  },
  dm_slider_container:{
    flex:2,
    justifyContent:"center"
  },
  dm_instrument: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: 'column',
  },
  inst_btn: {
    elevation: 2,
    borderRadius: 100,
    margin: 5,
    marginTop: 10,
    backgroundColor: '#00000000',
  },
  dm_mute_inst: {
    margin: 7,
    textAlign: "center",
    fontWeight: "900"
  },
  dm_inst_mute_high: {
    color: "#00ff9d"
  },
  dm_inst_mute_medium: {
    color: "#e0d12c"
  },
  dm_inst_mute_low: {
    color: "#b55c5c"
  },
  inner: {
    width: 90,
    borderRadius: 10,
    width: "97%",
    height:"85%",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dm_inst_btn: {
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "90%",
    height: 35,
    marginVertical: 2,
    marginHorizontal: 3
  },
  dm_inst_btn_active: {
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 4,
    opacity:.5,
  },
  unchecked: {
    opacity: .50,
  },
  checked: {
    opacity: .85,
  }
});

export default Styles;