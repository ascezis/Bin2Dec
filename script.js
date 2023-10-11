//Чистый скрипт без интеграции:


//Функция, преобразующая числа:

function findDischarge(discharge) {
    return discharge.toString().split('').reduce((accumulator, currentValue, currentIndex) => {
        accumulator += +currentValue * parseInt(Math.pow(2, discharge.toString().length - 1 - currentIndex));
        return accumulator;
    }, 0)
}


//Функция проверки длины символов:
function isNormal(number) {
    number = number.toString();
    if (number.length > 8) {
        return false;
    } else {
        return true;
    }

}

//Функция проверки значение:
function checkNumber(number) {
    let numb_arr = number.toString().split('');
    for (let i = 0; i <= numb_arr.length - 1; i++) { //-1 т.к. массив отсчитывается с 0
        if (numb_arr[i] !== "1" && numb_arr[i] !== "0") {
            return false;
            }
        }
        return true;    //true здесь, так как в цикле он возращал бы true после 1 же успешной итерации цикла
    }

//Интеграция с html
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        let start_value = document.getElementById('st_value').value;

        //Проверяю корректность длины символов:
        if (isNormal(start_value)) {
            //Вложенно проверяю число на отсутствие лишних цифр
            if (checkNumber(start_value) === true){
                let end_value = findDischarge(start_value);
                document.getElementById('en_value').value = end_value;
            }
            else {
                let clear = '';
                alert("Ошибка! Введены числа, кроме 0 и 1!");
                document.getElementById('st_value').value = clear;
                document.getElementById('en_value').value = clear;
            }

        } else {
            //Создаю пустую строку и, если длина символов превышена, заменяю введённую строку на очищенную;
            let clear = '';
            alert("Ошибка! Превышена допустимая длина ввода!");
            document.getElementById('st_value').value = clear;
            document.getElementById('en_value').value = clear;
        }

    });

