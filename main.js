

let display = document.getElementById('disp');
let btns = document.querySelectorAll('#btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let value;
        value = e.target.value;
        display.value += value
    })
});

const perform_valid_operation = () => {
    const equal_btn = document.getElementById('equals');

    equal_btn.addEventListener('click', () => {
        let result;

        try{
        const value = parseFloat(display.value);
            if(isFinite(value){
                result = eval(display.value);
            }
            else{
                result = 'Math Error';
            }
        }
        catch(Error){
            result = 'Math Error';
        }
        display.value = result;
    });
}

const clear_all = () => {
    const clear_btn = document.getElementById('clear-all')

    clear_btn.addEventListener('click', () => {
        display.value = '';
    });
}

const delete_char = () => {
    const delete_char = document.getElementById('delete');

    delete_char.addEventListener('click', () => {
        let data = display.value;
        display.value = data.slice(0, -1);
    });
}

perform_valid_operation();
clear_all();
delete_char();
