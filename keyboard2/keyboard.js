

const text = document.createElement(`h1`)
const textarea = document.createElement(`textarea`);
const keyboard = document.createElement('div');
const keyboardCreate = document.createElement(`h2`);



text.setAttribute(`id`, `text`);
text.innerHTML = `Rss school keyboard`;
keyboardCreate.setAttribute(`id`, `create`);
keyboardCreate.innerHTML = `Клавиатура создана в Windows, для переключения языка нажмите LeftCtrl`

textarea.setAttribute('id', 'textarea');
keyboard.setAttribute('id', 'keyboard');


document.body.append(text);
document.body.append(textarea);
document.body.append(keyboard);
document.body.append(keyboardCreate);



textarea.onblur = () => textarea.focus();
textarea.focus();


let keyboardArrayEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
    ',', '.', '/', '▲', 'Shift', 'Control', 'Alt', 'space', 'Alt', '◄', '▼', '►', 'Control'];

let keyboardArrayRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь',
    'б', 'ю', '.', '▲', 'Shift', 'Control', 'Alt', 'space', 'Alt', '◄', '▼', '►', 'Control'];



/*let keyb = [];
document.addEventListener(`keydown`, function (event) {
    keyb.push(event.key);
    console.log(event);


});*/

function init() {
    let out = ``;
    for (let i = 0; i < keyboardArrayEn.length; i++) {
        out += `<div id="key" class="kkey ${keyboardArrayEn[i].toLowerCase()}">` +
            keyboardArrayEn[i] + `</div>`;


    }
    document.querySelector(`#keyboard`).innerHTML = out;
    let fub = document.querySelectorAll(`.kkey`);
    for (let key of fub) {
        key.addEventListener(`click`, function () {

            if (key.className == `kkey backspace`) {
                textarea.value = textarea.value.slice(0, -1);
            }
            else if (key.className == `kkey space`) {
                textarea.value += ` `;
            }
            else if (key.className == `kkey tab`) {
                textarea.value += `    `;
            } else if (key.className == `kkey del`) {
                textarea.value = textarea.value.slice(1, textarea.length);
            }
            else { textarea.value += key.innerHTML; }

        })


    };

    let keyboard1 = document.querySelectorAll(`#key`);
    document.addEventListener(`keydown`, function (event) {
        let row = `kkey ${event.key}`;
        for (let elem of keyboard1) {
            if (elem.className.toUpperCase() == row.toUpperCase()) {
                elem.classList.add(`active`)
            } if (document.addEventListener(`keyup`, function (event) {
                elem.classList.remove(`active`);
            })); console.log(elem.className.toUpperCase()); console.log(row.toUpperCase());
        }



    });

}


function initRus() {
    let out = ``;
    for (let i = 0; i < keyboardArrayRus.length; i++) {
        out += `<div id="key" class="kkey ${keyboardArrayRus[i].toLowerCase()}">` +
            keyboardArrayRus[i] + `</div>`;


    }
    document.querySelector(`#keyboard`).innerHTML = out;
    let fub = document.querySelectorAll(`.kkey`);
    for (let key of fub) {
        key.addEventListener(`click`, function () {
            if (key.className == `kkey backspace`) {
                textarea.value = textarea.value.slice(0, -1);
            }
            else if (key.className == `kkey space`) {
                textarea.value += ` `;
            }
            else if (key.className == `kkey tab`) {
                textarea.value += `    `;
            } else { textarea.value += key.innerHTML; }

        })

    }
    let keyboard1 = document.querySelectorAll(`#key`);
    document.addEventListener(`keydown`, function (event) {
        let row = `kkey ${event.key}`;
        for (let elem of keyboard1) {
            if (elem.className.toUpperCase() == row.toUpperCase()) {
                elem.classList.add(`active`)
            } if (document.addEventListener(`keyup`, function (event) {
                elem.classList.remove(`active`);
            }));
        }



    });

}

init();


const kkey = document.querySelectorAll(`.kkey`);
let i = 1;

function change() {
    document.addEventListener(`keydown`, function (event) {
        if (event.code == `ControlLeft` || event.code == `Shift`) {

            if (i % 2 == 0) {

                init(); i++;
            }
            else if (i % 2 !== 0) {

                initRus(); i++;
            }
        }
    }
    )
};
change();





class Menu {
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                key.classList.add(`active`);
                break;
            case 'mouseup':
                key.classList.remove(`active`);
                break;
        }
    }
}























