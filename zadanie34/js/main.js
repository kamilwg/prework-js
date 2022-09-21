let text1 = 'Uwielbiam JavaScriptdmlfkgnb;l,dskjfnglkscxfgb'
let text2 = 'Jestem świetnym programistą'

function text(txt1, txt2) {
    if (txt1.length > txt2.length) {
        return txt1
    } else {
        return txt2
    };
}

console.log (text(text1, text2));