// const person: {
//     name: string;
//     age: number;
// } 
// const person : {
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// }= {
//     name : 'yota',
//     age: 30,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author'],
// }
enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

const person = {
    name : 'yota',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
}

person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['sport'];

console.log(person.name);