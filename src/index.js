const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

// const lengthOneSymbol = 10;
// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// const result = "hello world";
// const symbolsCode = {
//     '**********': ' ',
//     10: '.',
//     11: '-'
// }

function decode(expr) {
    // write your solution here    
    let morseCode = [];

    for (let i = 0; i < expr.length;) {
        morseCode.push(expr.slice(i, i + 10));
        i = i + 10;
    }
    let resultInMorse = morseCode.map((val) => {
        let point = RegExp(/10/g);
        let dash = RegExp(/11/g);
        let space = RegExp(/\*\*\*\*\*\*\*\*\*\*/g);
        val = val.replace(point, '.');
        val = val.replace(dash, '-');
        val = val.replace(space, ' ');
        return val;
    });
    let resultFrom = resultInMorse.map((val) => {
        val = [...val].filter((e) => {
            return e !== '0';
        })
        if (val === ' ') {
            return ' ';
        }
        return val.toString().replace(/,/g, '');
    });
    let res = resultFrom.map((symbol) => {
        if (symbol === ' ') {
            return symbol;
        }
        return MORSE_TABLE[symbol];
    })

    return res.reduce((a, b) => {
        return a.concat(b);
    });

}

module.exports = {
    decode
}

// console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'));