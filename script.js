"use strict";

//Je commence par déclarer un tableau vide appelé "names" 
//J'ajoute ensuite "Vincent", "Paul", et "Arthur" dans le tableau via la méthode Push pour chaque élément du tableau
//J'ajoute a la fin "va a la peche"

let names=[];
names.push('Vincent',"Paul",'Arthur');

names.forEach(name =>{
    name += 'va a la peche ';
    console.log(name)
})