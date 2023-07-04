// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function user(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
 let users = [
    new user (1, 'Ivan', 'Ivanov', 'vanya@gmail.com', '1234567890'),
    new user (8, 'Dima', 'Dimov', 'dima@gmail.com', '12349437890'),
    new user (6, 'Anna', 'Annova', 'anna@gmail.com', '12349465430'),
    new user (7, 'Gena', 'Genov', 'gena@gmail.com', '123401977890'),
    new user (4, 'Kolya', 'Kolev', 'kolya@gmail.com', '13477437890'),
    new user (3, 'Ira', 'Irova', 'ira@gmail.com', '123455937890'),
    new user (2, 'Lilya', 'lileva', 'lilya@gmail.com', '6973437890'),
    new user (5, 'Petya', 'petev', 'petya@gmail.com', '5038337890'),
    new user (9, 'Vasya', 'Vasev', 'vasya@gmail.com', '45666437890'),
    new user (10, 'Masha', 'Masheva', 'masha@gmail.com', '193747890'),
]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user) => user.id % 2 === 0));

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1, user2) => user1.id - user2.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new client (1, 'Ivan', 'Ivanov', 'vanya@gmail.com', '1234567890', [ 'tea', 'coffee' ]),
    new client (8, 'Dima', 'Dimov', 'dima@gmail.com', '12349437890', ['juice','cookies', 'ice cream'] ),
    new client (6, 'Anna', 'Annova', 'anna@gmail.com', '12349465430',['water', 'tea', 'fruits']),
    new client (7, 'Gena', 'Genov', 'gena@gmail.com', '123401977890',['bread', 'tea', 'fruits']),
    new client (4, 'Kolya', 'Kolev', 'kolya@gmail.com', '13477437890', ['juice', 'bread', 'fruits']),
    new client (3, 'Ira', 'Irova', 'ira@gmail.com', '123455937890', ['water', 'tea']),
    new client (2, 'Lilya', 'lileva', 'lilya@gmail.com', '6973437890', ['water']),
    new client (5, 'Petya', 'petev', 'petya@gmail.com', '5038337890', ['water', 'tea', 'fruits', 'ice cream']),
    new client (9, 'Vasya', 'Vasev', 'vasya@gmail.com', '45666437890', ['tea']),
    new client (10, 'Masha', 'Masheva', 'masha@gmail.com', '193747890', ['water', 'tea']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`${this.model} - ${this.manufacturer} - ${this.year} - ${this.maxSpeed} - ${this.volume}`);
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`максимальна швидкість підвищенна на ${newSpeed}`);
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newYear) {
        this.year += newYear;
        console.log(`змінився рік випуску на ${newYear}`);
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log('Водій доданий:', driver)
    }
}
const car = new Car ("Sedan", "BMW", 2021, 200, 2.0);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2022);
car.addDriver({name:'Mike', age: 30, skills:'12 років досвіду'});
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`${this.model} - ${this.manufacturer} - ${this.year} - ${this.maxSpeed} - ${this.volume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`максимальна швидкість підвищенна на ${newSpeed}`);
    }

    changeYear(newYear) {
        this.year += newYear;
        console.log(`змінився рік випуску на ${newYear}`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log('Водій доданий:', driver)
    }
}
let car1 = new Car1 ("Sedan", "BMW", 2021, 200, 2.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.changeYear(2022);
car1.addDriver({name:'Mike', age: 30, skills:'12 років досвіду'});
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, year,footSize) {
        this.name = name;
        this.year = year;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, year, foundShoe) {
        this.name = name;
        this.year = year;
        this.foundShoe = foundShoe;
    }

    findCinderella1(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoe) {
                return cinderella;
            }
        }
    }

    findCinderella2(cinderellas) {
        return cinderellas.find((cinderellas) => cinderellas.footSize === this.foundShoe);
    }
}
let cinderellas = [
    new Cinderella("Nadiia", 20, 33),
    new Cinderella("Anna", 22, 36),
    new Cinderella("Kristina", 25, 38),
    new Cinderella("Liliia", 18, 39),
    new Cinderella("Sophia", 24, 35),
    new Cinderella("Irina", 21, 40),
    new Cinderella("Alena", 19, 41),
    new Cinderella("Helena", 23, 34),
    new Cinderella("Mariia", 20, 42),
    new Cinderella("Dariia", 22, 43)
];
let prince = new Prince ('Leo', 23, 40)

console.log(prince.findCinderella1(cinderellas))
console.log(prince.findCinderella2(cinderellas))



//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
 function user (id, name, username, email, address, phone, website, company){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
 }
 let User = new user (
                  1,
                  'Leanne Graham',
                  'Bret',
                  'Sincere@april.biz',
                  {street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                      lat: '-37.3159',
                      lng: '81.1496'
    }
},
                  '1-770-736-8031 x56442',
                  'hildegard.org',
                  {name: 'Romaguera-Crona',
                      catchPhrase: 'Multi-layered client-server neural-net',
                      bs: 'harness real-time e-markets'
}
);

console.log(User);

