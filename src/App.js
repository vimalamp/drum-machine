import React, {useState} from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function Sound({sound, soundName}) {

  return(
    <button class='drum-pad'
            onClick={() => {
              soundName(sound.name);
              document.getElementById(sound.keyCode).play();
              }}>
      {sound.key}
      <audio id={sound.keyCode}> 
        <source src={sound.url} type="audio/mp3"/>
      </audio>
    </button>
  )
};

function App () {
const [sounds, setSounds] = useState(
  [{
  keyCode: 81,
  key: 'Q',
  name: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  key: 'W',
  name: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  key: 'E',
  name: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  key: 'A',
  name: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  key: 'S',
  name: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  key: 'D',
  name: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  key: 'Z',
  name: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  key: 'X',
  name: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  key: 'C',
  name: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
  ]
);

const [display, setDisplay] = useState('');
const soundName = name => {setDisplay(name)};

return (
    <div class="container has-text-centered" id='drum-machine'>
      <div class="title">Drum Machine</div>
      <div class='pads-area'>
        <div class='soundData'>
          {sounds.map((sound) => (
            <Sound 
            sound={sound}
            soundName={soundName}
            />
          ))
          }
        </div>
      </div>
      <box id='display'>{display}</box>
    </div>
  );
}

export default App;