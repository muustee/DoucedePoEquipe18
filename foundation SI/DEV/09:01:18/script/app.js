/*ex1*/
/*
let tableau = new Array (0,0,0,0,0,0,0)
*/
/*ex2*/
/*
let nbr = parseInt(window.prompt("Combien de valeurs souhaitez-vous entrer ?"))
let i=1
let tableau = new Array
let a
let pos=0
let neg=0
for (i;i<=nbr;i++){
  a = window.prompt("Entrez la valeur n°"+i)
  tableau.push(a)
  if (a<0){
  neg++
}
  else {
  pos++
}
}
document.write("Ce tableau compte "+pos+" valeurs positives et "+neg+" valeurs négatives.")
*/
/*ex3*/
/*
let tab1 = new Array (1,3,5,7,9,11)
let tab2 = new Array (0,2,4,6,8,10)
let tab3 = new Array
let i=0
let len=5
for(i;i<len;i++){
  tab3.push((tab1[i]+tab2[i]))
}
*/
/*ex4*/
/*
let tab = new Array
let n
let t=0
let i=0
let a = parseInt(window.prompt("Entrez un entier."))
for (i;i<n;i++){
  if (tab[i]==a){
    document.write("Cet entier se trouve à la "+i+"eme position du tableau.")
    t=1
  }
}
if (t==0){
  document.write("Cet entier est absent du tableau.")
}
*/
/*ex5*/
/*
let tab = new Array
let i = 0
let j = 0
for (i;i<13;i++){
  for (j;j<6;j++){
    tab.push(0)
  }
  tab.push("</br>")
}
*/

/*ex1*/
/*
let x = window.prompt("Entrez un nombre")
let ans=0
for(let y=1;y<=x;y++){
ans+=y
}
document.write(ans)
*/
/*ex2*/
/*
let a = window.prompt("Entrez un 1er nombre")
let b = window.prompt("Entrez un 2nd nombre")
for(let i=1;i<=a;i++){
document.write("*")
}
document.write("</br>")
for(let j=1;j<=(b-2);j++){
  document.write("*")
  for(let k=1;k<=(a-2);k++){document.write(". ")}
  document.write("*</br>")
}
for(let i=1;i<=a;i++){
document.write("*")
}
/*
/*ex3*/
/*
let x = parseInt(window.prompt("Entrez un nombre"))
for (let i=0;i<=10;i++){
document.write((x*i)+" ")
}
*/
/*ex4-5-6*/
/*
let a0=0, a1=0, a2=0, a3=0, a4=0, a5=0, b0=0, b1=0, b2=0, b3=0, b4=0, b5=0, c0=0, c1=0, c2=0, c3=0, c4=0, c5=0, a=0, b=0, c=0
for (let i=0; i<=100000; i++){
  a=Math.ceil(Math.random()*5)
  if(a==0){a0++}
  else if(a==1){ a1++}
  else if(a==2){a2++}
  else if(a==3){a3++}
  else if(a==4){a4++}
  else if(a==5){a5++}
  b=Math.round(Math.random()*5)
  if(b==0){b0++}
  else if(b==1){b1++}
  else if(b==2){b2++}
  else if(b==3){b3++}
  else if(b==4){b4++}
  else if(b==5){b5++}
  c=Math.floor(Math.random()*5)
  if(c==0){c0++}
  else if(c==1){c1++}
  else if(c==2){c2++}
  else if(c==3){c3++}
  else if(c==4){c4++}
  else if(c==5){c5++}
}
document.write("Pourcentage d'occurences de 0 avec la méthode 1 :" + ((a0/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 1 avec la méthode 1 :" + ((a1/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 2 avec la méthode 1 :" + ((a2/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 3 avec la méthode 1 :" + ((a3/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 4 avec la méthode 1 :" + ((a4/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 5 avec la méthode 1 :" + ((a5/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 0 avec la méthode 2 :" + ((b0/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 1 avec la méthode 2 :" + ((b1/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 2 avec la méthode 2 :" + ((b2/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 3 avec la méthode 2 :" + ((b3/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 4 avec la méthode 2 :" + ((b4/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 5 avec la méthode 2 :" + ((b5/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 0 avec la méthode 3 :" + ((c0/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 1 avec la méthode 3 :" + ((c1/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 2 avec la méthode 3 :" + ((c2/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 3 avec la méthode 3 :" + ((c3/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 4 avec la méthode 3 :" + ((c4/100000)*100) + "</br>")
document.write("Pourcentage d'occurences de 5 avec la méthode 3 :" + ((c5/100000)*100) + "</br>")
*/

let x = window.prompt("Entrez une phrase ?")
let alpha = "ZYXWVUTSRQPONMLKJIHGFEDCBAZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"
let pos
let crypt=""
let i=0
let lettre
for(i=0;i<x.length;i++){
  lettre = x.charAt(i)
  pos= alpha.lastIndexOf(lettre)
  if(pos!=(-1)){
    crypt+=alpha.charAt((pos+3)%26)
  }
  else{
    crypt+=lettre
  }
}
document.write(crypt)
