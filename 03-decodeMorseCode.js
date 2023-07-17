//Take line of morse code
//Return decoded message

//MORSE_CODE represents dictionary of morse code
decodeMorse = function(morseCode){
    return morseCode
      .split('   ')
      .map(item => item
             .split(' ')
             .map(item => MORSE_CODE[item]).join(''))
      .join(' ')
      .trim();
}