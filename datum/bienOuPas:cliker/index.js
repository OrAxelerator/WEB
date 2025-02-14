

let nombreDeClics = 0;
let prod1 = 0; // prod du bouton
let prod2 = 0;  //prod de l'interface
let production = prod1 + prod2; //prod total



let up1 = ['b1' , 'b2' ,'b3', 'b4' , 'b5' , 'b6'  , 'b7' , 'b8' , 'b9' , 'b10'];
let prix_up_1 = [15 ,17, 20, 40, 70, 100, 150, 300, 600, 1000, "plus d'amélioration disponile."];

let up2 = ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"];
let prix_up_2 = [50, 55, 70, 100, 250, 400, 800, 1400, 1800, 2000, "plus d'amélioration disponile."];


let prix_up_3 = [10000];
let up3 = "https://www.youtube.com/watch?v=xvFZjo5PgG0";


const boutonUp1 = document.getElementById("up1");
const boutonUp2 = document.getElementById("up2");
const boutonUp3 = document.getElementById("up3")

affichagePoint = ["Variable " , "Point "]



function deletetyleClasse(){ // SUPR CLASS
    const element = document.querySelector('#monBouton');
    element.classList.remove('b1', 'b2', 'b3', 'b4' , 'b5' , 'b6' , 'b7' , 'b8', 'b9' , 'b10');


    const element2 = document.querySelector('#up1');
    element2.classList.remove('buy-up1-n' , 'buy-up1-o');

    const element3 = document.querySelector('#up2');
    element3.classList.remove('buy-up2-n' , 'buy-up2-o');

    const element4 = document.querySelector('#up3');
    element4.classList.remove("buy-up3-o" , "buy-up3-n");   

   

};
deletetyleClasse();









// Augmenter score quand bouton cliquer
document.getElementById("monBouton").addEventListener("click", function() {
    nombreDeClics++;
    document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics; // Affichage de la nouvelle valeur
});

// A ENLEVER - 
document.getElementById("cheat").addEventListener("click", function() {
    nombreDeClics += 5000;
});


// Appeler la fonction toutes les secondes (1000 ms)
setInterval(ajouterPoint, 1000); // Fonction pour ajouter un point
setInterval(refresh,400);


function refresh(){ // refresh couler bouton V/R
nombreDeClics = nombreDeClics +1 -1;
    if (nombreDeClics >= prix_up_1[0]) {
        boutonUp1.className = "buy-up1-o";
        
    } else {
        boutonUp1.className = "buy-up1-n";
    };
    if (nombreDeClics >= prix_up_2[0]) {
        boutonUp2.className = "buy-up2-o";
        
    } else {
        boutonUp2.className = "buy-up2-n";
    };
    if (nombreDeClics >= 10000) {
        boutonUp3.className = "buy-up3-o";
        
    } else {
        boutonUp3.className = "buy-up3-n";
    };
 

   
};

//UP pour UP1 -> bouton principale
function mettreAJourClasseUp1() {
  const element = document.querySelector('#monBouton');
  element.classList.add(up1[0]);
  up1.shift();
};





// detection bouton up1
document.getElementById( "up1").addEventListener("click", function() {
   
    if (nombreDeClics >= prix_up_1[0]) { // ACHETE LA UP [0] 
        mettreAJourClasseUp1();
        
        nombreDeClics = nombreDeClics - prix_up_1[0]; //enleve point
        nombreDeClics = Math.round(nombreDeClics *100)/100; //arrondi
        document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics;  //affiche

        prod1 = prix_up_1[0]/15; //caclule valuer de prod de l'up
        prod1 = Math.round(prod1 * 100)/100; //arrondi
        production = prod1 + prod2 //calcule prod total
        prix_up_1.shift();
        document.getElementById("production1").innerText = "Production de la prochaine amélioration : " + Math.round(prix_up_1[0]/15 * 100) / 100 +"/s"; //affiche prix de la prochaine up
        document.getElementById("prod1").innerText = "production du bouton :" + prod1 //affiche prix 
        document.getElementById("productionTot").innerText = "production tot : " + production;
        document.getElementById("prix1").innerText = "Prix : " + prix_up_1[0];
    }
    else { // actualise nombre de clic
        nombreDeClics = Math.round(nombreDeClics *100)/100; 
        document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics;
    };
});



// detecte bouton up2
document.getElementById( "up2").addEventListener("click", function() {


    if (nombreDeClics >= prix_up_2[0]) { // ACHETE LA UP [0] 

        nombreDeClics = nombreDeClics - prix_up_2[0]; //enleve point
        nombreDeClics = Math.round(nombreDeClics *100)/100; //arrondi
        document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics;  //affiche

        prod2 = prix_up_2[0]/15; //caclule valuer de prod de l'up
        prod2 = Math.round(prod2 * 100)/100; //arrondi
        production = prod1 + prod2 //calcule prod total
        prix_up_2.shift();
        console.log(prod2)
        document.getElementById("production2").innerText = "Production de la procahine améliorations : " + Math.round(prix_up_2[0]/15 * 100) / 100 +"/s"; //affiche prix de la prochaine up
        document.getElementById("prod2").innerText = "production du bouton : " + prod2 //affiche prix 
        document.getElementById("productionTot").innerText = "production totale : " + production;
        document.getElementById("prix2").innerText = "Prix : " + prix_up_2[0];


    }else { // actualise nombre de clic
        nombreDeClics = Math.round(nombreDeClics *100)/100; 
        document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics;
    };
});

// BOUTON 3 
document.getElementById( "up3").addEventListener("click", function() {


    if (nombreDeClics >= prix_up_3[0]) { // ACHETE LA UP [0] 
        nombreDeClics = nombreDeClics - prix_up_3[0]; //enleve point
        nombreDeClics = Math.round(nombreDeClics *100)/100; //arrondi
        document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics;  //affiche
        console.log("yes")
        window.open(up3, "_blank");

       
    }else { // actualise nombre de clic
        nombreDeClics = Math.round(nombreDeClics *100)/100; 
        document.getElementById("resultat").innerText = affichagePoint[0] + " : " + nombreDeClics;
        console.log("pas assez de point")
    };
});







// Fonction pour ajouter un point qui est utiliser par set intervalle pour prdoction auto
function ajouterPoint() {
    pointParSeconde = production ;
    nombreDeClics += pointParSeconde 
    //console.log( pointParSeconde)
    nombreDeClics = Math.round(nombreDeClics *100)/100; 
    document.getElementById("resultat").innerText = affichagePoint[0] + ": " + nombreDeClics;
    document.getElementById("productionTot").innerText = "production tot : " + production;
}








 const cursor = document.querySelector('.custom-cursor');


document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`; 
  cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`; 
});





 