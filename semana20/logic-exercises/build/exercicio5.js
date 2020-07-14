"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timestamp = (value) => {
    const minutos = Math.floor(value / 60);
    const segundosQueSobram = value - minutos * 60;
    const horas = Math.floor(minutos / 60);
    const minutosQueSobram = minutos - horas * 60;
    return (`${value} segundos equivalem a ${horas} hora(s), ${minutosQueSobram}
     minutos e ${segundosQueSobram} segundos`);
};
console.log(timestamp(300));
function fancyTimeFormat(segundos) {
    const hrs = Math.floor(segundos / 3600);
    const mins = Math.floor((segundos % 3600) / 60);
    const secs = ~~segundos % 60;
    let ret = "";
    if (hrs > 0) {
        ret += "" + hrs + "h " + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + "m " + (secs < 10 ? "0" : "");
    ret += "" + secs + "s ";
    return ret;
}
console.log(fancyTimeFormat(30));
//# sourceMappingURL=exercicio5.js.map