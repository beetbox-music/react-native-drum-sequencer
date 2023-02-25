import React from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';

import Styles from "./Styles";
import DMPads from "./DMPads";
import DMNav from "./DMNav";

const kickSound = new Audio.Sound()
const snareSound = new Audio.Sound()
const hatSound = new Audio.Sound()

const DrumMachine = () => {

    // loop states and functions:
    const [tempo, setTempo] = React.useState(90); // BPM
    const [loop, setLoop] = React.useState(0);
    const [looping, setLooping] = React.useState(false);
    function startLoop() {
        // load();
        setLooping(true);
    };
    function stopLoop() {
        setLooping(false);
        // unload();
    };
    function resetLoop() {
        setLoop(0);
        stopLoop();
    };
    async function update_tempo(t){
        try { 
            await stopLoop();
            setTempo(parseFloat(t));
            // await startLoop();
            // load();
            // await kickSound.setRateAsync(32*(t/680),true);
            // await snareSound.setRateAsync(32*(t/680),true);
            // await hatSound.setRateAsync(32*(t/680),true);
        }
        catch(e){
            console.log("UPDATE_TEMPO");
            console.log(e)
        }
    };

    // sounds states and functions:
    const [loopLen, setLoopLen] = React.useState(16);
    const [kick, setKick] = React.useState(Array(loopLen).fill(0));
    const [snare, setSnare] = React.useState(Array(loopLen).fill(0));
    const [hat, setHat] = React.useState(Array(loopLen).fill(0));

    React.useEffect(() => {
        try{
            setKick(Array(loopLen).fill(0));
            setSnare(Array(loopLen).fill(0));
            setHat(Array(loopLen).fill(0));
        }
        catch(e){
            console.log("ERROR SETTING loopLen");
        }
        // return () => {
        // };
    }, [loopLen]);
    async function update_loopLen(l){
        resetLoop();
        await setLoopLen(l);
    }
    const [loaded, setLoaded] = React.useState(false);
    async function load(){
        if(!loaded){
            try {

                // kickSound = new Audio.Sound();
                // snareSound = new Audio.Sound();
                // hatSound = new Audio.Sound();

                await kickSound.loadAsync(require('../assets/instruments/kick.wav'));
                await snareSound.loadAsync(require('../assets/instruments/snare.wav'));
                await hatSound.loadAsync(require('../assets/instruments/hat.wav'));
    
                setLoaded(true);
                
            } catch (err) {
                console.log("LOADING ERROR:");
                console.error(err);
            }
        }

    }
    async function unload() {
        if(loaded){
            try {
                await kickSound.unloadAsync();
                await snareSound.unloadAsync();
                await hatSound.unloadAsync();
                
                setLoaded(false);
            } 
            catch (err) {
                console.log("UNLOADING ERROR:");
                console.error(err);
            }
        }
    }
    function playSound(index) {
        try{
            if (kick[index] === 1) {
                playKick();
            }
            if (snare[index] === 1) {
                playSnare();
            }
            if (hat[index] === 1) {
                playHat();
            }
        }
        catch(e){
            console.log("ERROR PLAYING SOUND");
        }
    };
    async function playKick() {
        await kickSound.replayAsync();
    };
    async function playSnare() {
        await snareSound.replayAsync();
    };
    async function playHat() {
        await hatSound.replayAsync();
    };
    
    // settings
    const [kickVolume, setKickVolume] = React.useState(1);
    const [snareVolume, setSnareVolume] = React.useState(1);
    const [hatVolume, setHatVolume] = React.useState(1);
    async function updateKickVolume(v) {
        try{
            await kickSound.setVolumeAsync(v);
        }
        catch(e){
            console.log("UPDATE VOLUME ERROR: kickSound");
        }
    };
    async function updateSnareVolume(v) {
        try{
            await snareSound.setVolumeAsync(v);
        }
        catch(e){
            console.log("UPDATE VOLUME ERROR: snareSound");
        }
    };
    async function updateHatVolume(v) {
        try{
            await hatSound.setVolumeAsync(v);
        }
        catch(e){
            console.log("UPDATE VOLUME ERROR: hatSound");
        }
    };
    React.useEffect(() => {
        updateKickVolume(kickVolume)
    }, [kickVolume]);
    React.useEffect(() => {
        updateSnareVolume(snareVolume)
    }, [snareVolume]);
    React.useEffect(() => {
        updateHatVolume(hatVolume)
    }, [hatVolume]);


    // LOOP/SEQUENCER:
    // - option 1: check every millisecond if a sound(s) should be playing
    React.useEffect(() => {
        if (looping) {

            load();

            // time at loop start
            const loop_start_time = new Date().getTime();

            // last played bar/beat/step
            let last_played = -1;

            // bar/beat/step length in milliseconds from BPM (tempo) 
            const beat_len = 60000 / (tempo * 2);

            // set index to (last) loop
            let index = loop; 

            const timer = setInterval(() => {
                // get current `loop_iter_time`
                const loop_iter_time = new Date().getTime()
                
                // get distance from `loop_start` time
                const distance = (loop_iter_time - loop_start_time);

                // check beat number using bpm
                const current_beat = Math.floor(distance / beat_len); 
                
                // check if beat still needs to play
                if (current_beat > last_played) {

                    // play beat
                    playSound(index);
                    setLoop(index);
                    
                    if (index === (loopLen-1)) {
                        index = 0
                    }
                    else {
                        index++;
                    }
                    last_played = current_beat;
                }

            }, 0);

            return () => {
                unload();
                clearInterval(timer);
            };

        }
    }, [looping]);
    // - option 2: play a sound at every (set)interval, based on BPM

    // React.useEffect(() => {
    //     if (looping) {

    //         load();
    //         let index = loop;
    //         const timer = setInterval(() => {

    //             playSound(index);
    //             setLoop(index);

    //             if (index === 7) {
    //                 index = 0
    //             }
    //             else {
    //                 index++;
    //             }

    //         }, 60000/tempo); 
    //         return () => {
    //             unload();
    //             clearInterval(timer);
    //         };
    //     }
    // }, [looping]);



    return (
        <View style={Styles.drum_machine}>
            <DMPads
                loop={loop}
                kick={kick}
                snare={snare}
                hat={hat}
                setKick={setKick}
                setSnare={setSnare}
                setHat={setHat}
                setKickVolume = {setKickVolume}
                setSnareVolume = {setSnareVolume}
                setHatVolume = {setHatVolume}
                kickVolume = {kickVolume}
                snareVolume = {snareVolume}
                hatVolume = {hatVolume}
                loopLen = {loopLen}
            />
            <DMNav
                looping={looping}
                stopLoop={stopLoop}
                startLoop={startLoop}
                resetLoop={resetLoop}
                tempo={tempo}
                update_tempo={update_tempo} 
                loopLen = {loopLen}
                update_loopLen = {update_loopLen}
            />
        </View>
    );

};

export default DrumMachine;