// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) =>{

    let arr = [];
    for (let i = 0; i < str.length; i+=n) {
        arr.push(str.slice(i, i+n));
    }
    return arr;
}

console.log(cutString('наслаждение',3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

const delete_characters = (str, length) => str.substring(0, length);
console.log(delete_characters("Каждый охотник желает знать", 7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insert_dash = (str) => str.replaceAll(' ','-').toUpperCase();
console.log(insert_dash("HTML JavaScript PHP"));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const changeCase = (str) =>  str.trim()[0].toUpperCase() + str.trim().substring(1)
console.log(changeCase("hello"))


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 =(str) => str.replaceAll('..', ' ');
console.log(n1('Harry..Potter'));

let n2 =(str) => str.replaceAll('---', ' ');
console.log(n2('Ron---Whisley'));

let n3 =(str) => str.replaceAll('__', ' ');
console.log(n3('Hermione__Granger'));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const generationRandoms = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr
}


let numbers = generationRandoms();
console.log(numbers);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
numbers.sort((a, b) => a - b);
console.log(numbers);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log( numbers.filter(value => value !== 0 &&  value % 2 ===0));





// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const  capitalize = (str) =>  (str.trim().split(" ").map(x => x[0].toUpperCase().concat(x.slice(1)) ).join(""))
console.log(capitalize("Hello my name yamy")) //Hello My Name Yamy



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
//
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

const validator = (str) =>   {
    str = str.toLowerCase()
    if (str.split("@")>2) return false
    let partOne = str.split("@")[0]
    let partTwo = (str.split("@")[1]).split("." ) //["gmail" "com"]
    if (partOne.length <= 2) return  false
    if (partTwo[0].length <=2) return  false
    if (partTwo[1].length <=1) return  false

    return  true
}

console.log(validator("someemail@gmail.com"))







//
// - є масивlet
coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b )=>a.modules.length - b.modules.length));
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let stringsearch = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
const  count = (str, stringsearch)=> str.split("").filter(x =>x.includes(stringsearch)).length
console.log(count(str, stringsearch))



// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
     str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
const deleteString = (str ,n) => str.trim().split(" ").slice(0, n).join(" ")
console.log(deleteString(str, 5))


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: "Tom Soyer",
        pages: 200,
        authors: ["Mark Twain", "John Tolkien"],
        genres: ["adventure", "comedy"]
    },
    {
        title: "Harry Potter",
        pages: 900,
        authors: ["Joanne Rowling"],
        genres: ["fantasy"]
    },
    {
        title: "The Lord of the Rings",
        pages: 500,
        authors: ["John Tolkien"],
        genres: ["fantasy", "adventure", "comedy"]
    },
    {
        title: "The Hobbit",
        pages: 400,
        authors: ["John Tolkien"],
        genres: ["fantasy", "adventure"]
    },
    {
        title: "The Adventures of Sherlock Holmes",
        pages: 300,
        authors: ["Arthur Conan Doyle"],
        genres: ["detective", "adventure"]
    },
    {
        title: "The Adventures",
        pages: 500,
        authors: ["Arthur Conan Doyle", "Mark Twain", "John Tolkien"],
        genres: ["detective", "adventure"]
    },
]

// -знайти наібльшу книжку.
console.log(books.sort((a,b) => b.pages - a.pages)[0])
// - знайти книжку/ки з найбільшою кількістю жанрів
console.log(books.sort((a,b) => b.genres.length - a.genres.length)[0])
// - знайти книжку/ки з найдовшою назвою
console.log(books.sort((a,b) => b.title.length - a.title.length)[0])

// - знайти книжку/ки які писали 2 автори
console.log(books.filter(x => x .authors.length === 2))
// - знайти книжку/ки які писав 1 автор
console.log(books.filter(x => x .authors.length === 1))
// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a,b) => a.pages - b.pages))
//
//
//




