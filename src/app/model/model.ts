import { QueryFlags } from "@angular/compiler/src/render3/view/compiler";


let paperino: string | number | boolean | null;

paperino = 'ciao';

paperino = 5;

paperino = true;

paperino = null;

let topolino: any;

topolino = 5;

let minnie: number[] = [];

//let paperoga: string [] = ['qui', 7];

let qua:any = {name:'qui', age: 13};

qua.grade = 9;

qua.city = 'palermo';



let qui:any = {name: 'qui', age: 13};

let qui2 = { name: qui.name, age: qui.age};

let qui3 = {...qui2, city: 'palermo'}

