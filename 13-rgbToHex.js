//Take a rgb value
//Return equivalent hexadecimal value
function rgbToHex(r, g, b){
  let hexadecimal = '';
  [r, g, b].forEach(color => {
    color = (color > 255) ? 255 : (color < 0) ? 0 : color;
    color = color.toString(16);
    hexadecimal+= (color.length === 1) ? '0' + color : color;
  });
  return hexadecimal.toUpperCase();
}