
//1

function cloneDeep(obj) {
    let copy;

    // обрабатывает 3 simple types и так же null || undefined
    if (!obj || typeof obj != 'object') return obj;


    //Обрабатывает дату
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());

        return copy
    }

    //Обрабатывает массивы
    if (obj instanceof Array) {
        copy = [];

        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneDeep(obj[i]);
        }

        return copy;
    }

    //Обрабатывает объект
    if (obj instanceof Object) {
        copy = {};

        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = cloneDeep(obj[attr]);
        }

        return copy;
    }

    throw new Error("Unable to copy obj")
}

//2

function arrayMerger(arr) {                                 //сердечно прошу объяснить масленку почему вылазит undefined
    let result = [];
    let temp = 0;
    // arr.map((arr, a) => {
    //     result = result.concat(arr)                      //альтернатива
    // })   

    arr.reduce((a, b) => {
        temp = a;

        if (temp === undefined) result = result.concat(b);
        else result = result.concat(temp, b);
    })

    console.log(result)
    return result;
}

//3

function MultiplicatorUnitFailure() { }             //задачу не понял
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
    return primitiveMultiply(a, b)
}
// console.log(reliableMultiply(8, 8));

//4

Object.assign(Array.prototype, {                    //Так-же очень сильно хотел бы узнать почему 2 первых варианта не особо рабочие
    // add(element) {
    //     return [element, ...this];
    // }
    // add(element) {
    //     return [element].concat(this);
    // }
    add(element) {
        return this.splice(0, 0, element)
    }
})


let arr = [1, 2, 5, 10, 50];
arr.add(0)
// console.log(arr);

//5

// var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
function recuseLog(arr) {
    if (arr.length != 0) {
        console.log(arr.shift());
        return recuseLog(arr);
    }
}
// recuseLog(arr);

//6

var a = function (one, two) {
    return one + two
}
var b = function () {
    return false;
}
function paralell(arr, callback) {
    let result = [];

    arr.map((key) => {
        if (key.length != 1) {
            setTimeout(() => {
                key.reduce((a, b) => {
                    if (a instanceof Function) {
                        result.push(a.apply(null, b));
                    }
                })
            }, 100)
        }
        else {
            setTimeout(() => {
                let temp = key[0]
                result.push(temp.apply());
            }, 100)
        }
    })
    setTimeout(() => {
        callback(result);
    }, 130)
}
// paralell([[a, [1, 2]], [b]], (result) => {
//     console.log(result);
// });

//7

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
function array_find(arr, search) {
    if (search.includes('/') || search.includes('(')) {
        let temp = [];
        arr.filter((el) => {
            el = el + "";
            if (new RegExp(search, 'g').test(el)) temp.push(el);
        });
        return temp;
    }
    else {
        return arr.filter((el) => [el].indexOf(search) > -1);
    }
}

// let inputReg = new RegExp('(?<=[a-zA-Z> ])([rR]afshan)|([rR]afshan)(?!\S)')

// console.log(array_find(testData, "Rafshan"));
// console.log(array_find(testData, '(?<=[a-zA-Z> ])([rR]afshan)|([rR]afshan)(?!\S)')); 

//очень много времени потратил именно на регекс, 
//проверял на нескольких генераторах, но ответа 
//так и не давало нужного
//Сделал такую вот штуку

//8

function array_skip_until(arr, until) {
    if (!arr.includes(until)) return new Error("Cant find any relations")
    if (until instanceof Number) {
        if (arr.length < until) return new Error("until cant be longer then arr.length");
        return arr.slice(until)
    }
    else {
        let tempIndex = 0;
        tempIndex = arr.indexOf(until);
        return arr.slice(tempIndex)
    }
}
// console.log(array_skip_until(testData, "Rafshan"));
// console.log(array_skip_until(testData, 2));

//9

//Неосилил

//10

var a = ['a', 1, 'a', 2, '1'];

function find_unique(arr) {
    return arr.filter((v, i, a) => a.indexOf(v) === i)
}

// console.log(find_unique(a));

//11

let testData3 = [{                      //это не ассоциативный массив, и создать его не выходит
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: {
        php: 0,
        js: -1,
        madness: 10,
        rage: 10
    }
},
{
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: {
        php: 5,
        js: 7,
        madness: 3,
        rage: 2
    }
},
{
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: {
        php: 8,
        js: -2,
        madness: 1,
        rage: 4
    }
},
{
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: {
        php: 6,
        js: 6,
        madness: 5,
        rage: 2
    }
},
{
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: {
        php: 0,
        js: 10,
        madness: 10,
        rage: 1
    }
},
{
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: {
        php: 0,
        js: 0,
        madness: 0,
        rage: 10
    }
}]

function array_pluck(arr, path) {
    let temp = [];
    switch (path) {
        case "name":
            arr.map((el) => {
                temp.push(el.name);
            })
            return temp;
        case "email":
            arr.map((el) => {
                temp.push(el.email);
            })
            return temp
        case "age":
            arr.map((el) => {
                temp.push(el.age);
            })
            return temp
        case "skills.php":
            arr.map((el) => {
                temp.push(el.skills.php);
            })
            return temp
        case "skills.js":
            arr.map((el) => {
                temp.push(el.skills.js);
            })
            return temp
        case "skills.madness":
            arr.map((el) => {
                temp.push(el.skills.madness);
            })
            return temp
        case "skills.rage":
            arr.map((el) => {
                temp.push(el.skills.rage);
            })
            return temp
        default:
            break;
    }

    arr.map((el) => {
        console.log(el.skills)
    })
}
let result2 = array_pluck(testData3, 'skills.php');

console.log(result2);



//12
// тоже неосилил