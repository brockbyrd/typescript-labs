export {}
let message = "Welcome Back!";
console.log(message);

let x = 10;
let y = 20;

let sum;
const title = "Const must be initialized, let does not have to be initialized";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Brock";

let sentence: string = `My name is ${name} I am a beginner in TypeScript.`;

console.log(sentence);

let n: null = null;

let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Brock", 22]

enum Color {Red, Green, Blue};

let c: Color = Color.Green;

console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Brock';

let myVariable: any = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

let myVariable2: unknown = 10;
(myVariable2 as string).toUpperCase();


function hasName(obj: any): obj is { name: string }{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2: number) {
    return num1 + num2;
}

add(5, 10);
add(5, '10');