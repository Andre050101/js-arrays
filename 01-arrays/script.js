const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4]="Patrick";
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.splice(0, 0, "Sarah");
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFpres=false;
for(let i = 0; i < teachers.length; i++) {
  if(teachers[i] === "Fabio")
    isFpres=true;
}
const isFabioPresent = isFpres;
console.log(isFabioPresent);

/*Oppure con: teachers.includes("Fabio")*/

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let index=-1;/*Inizializzata a -1 cosicchè se l'elemento cercato non appartiene all'array, restituisco -1 per indicare che l'elemento non appartiene all'array, altrimenti restituisco l'indice di posizione dell'elemento*/
for(let i = 0; i < teachers.length; i++) {
  if(teachers[i] === "Lewis")
    index=i;
}
const lewisIndex = index;
console.log(lewisIndex);

/*Oppure con IndexOf*/

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let string="";
for(let i = 0; i < teachers.length-1; i++){
  string = string + teachers[i] + ", "
}
string = string + teachers[teachers.length-1];
const teachersString = string;
console.log(teachersString);

/*Oppure con teachers.join*/

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isEmpty=true;
if(teachers.length !== 0)
  isEmpty=false;
const isTeachersEmpty = isEmpty;
console.log(isTeachersEmpty);