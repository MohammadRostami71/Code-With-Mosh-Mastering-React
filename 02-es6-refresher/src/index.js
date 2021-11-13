// var -> function
//let -> block
//const -> block

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }

}

sayHello();

const person = {
    name: 'mohammad',
    walk() {
        console.log(this);
    },
    talk() {
        // let self = this;
        setTimeout(() => {
            console.log('this', this);
        }, 1000)
    }
}
person.talk();
person.name = '';

const targetMember = "name"
person[targetMember.value] = 'rostami';
person.walk();
person.talk();

const walk = person.walk.bind(person);
// console.log(walk)
walk();

// const square = function (number) {
//     return number * number
// }
const square = number => number * number
console.log(square(5));

const job = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]

// const activeJobs = job.filter(function (job) {
//     return job.isActive
// });

const activeJobs = job.filter(job => job.isActive);

console.log(activeJobs);

const colors = ['red', 'green', 'blue'];

// const items = colors.map(function (color) {
//     return '<li>' + color + '<li/>'
// })
// const items = colors.map(color =>'<li>' + color + '<li/>');
const items = colors.map(color => `<li>${color}<li/>`);
console.log(items)

const address = {
    street: '',
    city: '',
    country: ''
};
// const street = address.street;
// const city = address.city;
// const country = address.country;

const {street, city, country} = address;

const first = [1, 2, 3];
const second = [4, 5, 6];
// const combined = first.concat(second);
const combined = [...first, ...second];
console.log(combined);

const one = {name: 'mohammad'};
const two = {job: 'developer'};
const merge = {...one, ...two, location: 'iran'};
console.log(merge);


import Me from './me'
import Teacher, {promote} from './teacher'

//Default -> import ... from '';
//Named -> import {...} from '';

const me = new Me('mohammad')


const teacher = new Teacher('mohammad', 'MSc');
teacher.teach();