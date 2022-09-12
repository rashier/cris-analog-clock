import'./style.css'
import {setClock} from './setClock.js'

document.querySelector('#app').innerHTML = `
      <div class="clock">
        <div class="hour"></div>
        <div class="min"></div>
        <div class="sec"></div>
      </div>      
`
setClock()