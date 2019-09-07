function makeClass() {
    'use strict';
    class Thermostat {
        constructor(tempF) {
            this.tempF = tempF; // Setting the initial temperature in Fahrenheit.
        }
        // "getter" - functions which return the value of an object's private value to the user w/o directly accessing the private variable.
        get fahrenheit() {
            return this.tempF;
        }
        set celsius(tempC) {
            tempC = 5/9 * ((this.tempF) - 32)
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // Setting the initial Fahrenheit scale.
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius