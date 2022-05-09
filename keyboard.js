

const text = document.createElement(`h1`)
const textarea = document.createElement(`textarea`);
const keyboard = document.createElement('div');



text.setAttribute(`id`, `text`);
text.innerHTML = `Rss school keyboard`
textarea.setAttribute('id', 'textarea');
keyboard.setAttribute('id', 'keyboard');


document.body.append(text);
document.body.append(textarea);
document.body.append(keyboard);

textarea.onblur = () => textarea.focus();
textarea.focus();


let keyboardArrayEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
    ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];

let keyboardArrayRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь',
    'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];

function init() {
    let out = ``;
    for (let i = 0; i < keyboardArrayEn.length; i++) {
        out += `<div id="key" class="kkey ${keyboardArrayEn[i].toLowerCase()}">` +
            keyboardArrayEn[i] + `</div>`;


    }
    document.querySelector(`#keyboard`).innerHTML = out;
}
initRus()

function initRus() {
    let out = ``;
    for (let i = 0; i < keyboardArrayRus.length; i++) {
        out += `<div id="key" class="kkey ${keyboardArrayRus[i].toLowerCase()}">` +
            keyboardArrayRus[i] + `</div>`;


    }
    document.querySelector(`#keyboard`).innerHTML = out;
}






/*let keyb = [];
document.addEventListener(`keydown`, function (event) {
    keyb.push(event.key);
    console.log(event.code);

});*/


const kkey = document.querySelectorAll(`.kkey`)

function func() {
    for (let key of kkey) {
        key.addEventListener(`click`, function () {
            if (key.className == `kkey backspace`) {
                textarea.value = textarea.value.slice(0, -1);
            } else {
                textarea.value += this.innerHTML;
            }

        })

    }

}
func();



let i = 1;
function change() {
    document.addEventListener(`keydown`, function (event) {

        if (event.code == `ControlLeft` /*&& event.code == `Shift`*/) {

            if (i % 2 == 0) {
                init(); i++;;
            } if (i % 2 !== 0) {
                initRus(); i++;
            }

        }
    }
    )

};
change();

let keyboard1 = document.querySelectorAll(`#key`);




/*function Danila() {
    document.addEventListener(`keydown`, function (event) {
        let row = event.key;

        for (let p of keyboardArrayEn) {
            if (p == row) {
                for (let elem of keyboard1) {
                    elem.classList.add("active");

                    console.log(elem.className)
                }
            }
        }
    }
    )
};
Danila()*/

document.addEventListener(`keydown`, function (event) {
    let row = `kkey ${event.key}`;
    for (let elem of keyboard1) {
        if (elem.className == row) {
            elem.classList.add(`active`)
        } if (document.addEventListener(`keyup`, function (event) {
            elem.classList.remove(`active`);
        }));
    }



});


/*document.addEventListener(`click`, function () {

    for (let elem of keyboard1) {
        if (elem.className)
            elem.classList.add(`active`);
        if (document.addEventListener(`mouseout`, function () {
            elem.classList.remove(`active`);
        }));

    }



});*/

document.onclick = function (event) {
    alert(event.className);
}





/*let keyArraytoUp = [keyboardArrayEn[16], keyboardArrayEn[17], keyboardArrayEn[18], keyboardArrayEn[19],
keyboardArrayEn[20], keyboardArrayEn[21], keyboardArrayEn[22], keyboardArrayEn[23], keyboardArrayEn[24],
keyboardArrayEn[30], keyboardArrayEn[31], keyboardArrayEn[32], keyboardArrayEn[33], keyboardArrayEn[34],
keyboardArrayEn[35], keyboardArrayEn[36], keyboardArrayEn[37], keyboardArrayEn[38], keyboardArrayEn[43],
keyboardArrayEn[44], keyboardArrayEn[45], keyboardArrayEn[46], keyboardArrayEn[47], keyboardArrayEn[48], 
keyboardArrayEn[49]];*/









