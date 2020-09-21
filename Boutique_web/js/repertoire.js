var tab_photographes = []

function Photographe(nom, region, type) {
    this.nom = nom;
    this.region = region;
    this.type = type;
}

window.onload=function() {
  chargerPhotographes();
  document.getElementById("rafraichir").addEventListener("click", rafraichir);

};

//Création des objets liés aux photographes pour que leurs informations soient affichés lors du lancement de la page.
function chargerPhotographes() {
    var annie = new Photographe("Annie Simard", "Montréal", ["Évenement", "Corporatif"]);
    tab_photographes.push(annie);
    var joey = new Photographe("Joey Michaud", "Sherbrooke", ["Corporatif"]);
    tab_photographes.push(joey);
    var micheal = new Photographe("Micheal Smith", "Québec", ["Famille"]);
    tab_photographes.push(micheal);
    var steph = new Photographe("Stéphanie Dulude", "Québec", ["Mariage"]);
    tab_photographes.push(steph);
    var isabelle = new Photographe("Isabelle Thériault", "Québec", ["Famille", "Mariage"]);
    tab_photographes.push(isabelle);
    var magalie = new Photographe("Magalie Simoneau", "Montréal", ["Mariage"]);
    tab_photographes.push(magalie);
    var john = new Photographe("John Harvey", "Trois-Rivière", ["Corporatif"]);
    tab_photographes.push(john);

    afficherPhotographes(tab_photographes);

}

//Fonction qui va effectivement afficher les photographes lors du lancement de la page.
function afficherPhotographes(tableau) { 
    var affichageTable = "";

    tableau.forEach(function (photographe) {
        affichageTable += "<tr><td>" + photographe.nom + "</td><td>" + photographe.region + "</td><td>" + photographe.type.join(" - ") + "</td></tr>";
    })

    document.getElementById("tableau-photographes").innerHTML = affichageTable;

}

//Cette fonction travaille avec le filtre de type en récupérant l'option choisi par l'utilisateur dans l'id filtrer-type avec l'événement onClick.
//Par la suite, nous allons utiliser la technique de vider le tableau tab_photographes, créer seulement les objets qui correspondent au choix de l'utilisateur
//et les ajouter dans le tableau tab_photographes. Après ça, on va inséerer les lignes dans le tbody de la table dont l'id est tableau-photographes.
function filtrerParType(e) {
  
    let choixType = document.getElementById("filtrer-type").options[document.getElementById("filtrer-type").selectedIndex].text;

    if (choixType == "Famille") {
        tab_photographes = [];
        var micheal = new Photographe("Micheal Smith", "Québec", ["Famille"]);
        tab_photographes.push(micheal);
        var isabelle = new Photographe("Isabelle Thériault", "Québec", ["Famille", "Mariage"]);
        tab_photographes.push(isabelle);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + micheal.nom + "</td><td>" + micheal.region + "</td><td>" + micheal.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + isabelle.nom + "</td><td>" + isabelle.region + "</td><td>" + isabelle.type.join(" - ") + "</td></tr>";
    } else if (choixType == "Évenement") {
        tab_photographes = [];
        var annie = new Photographe("Annie Simard", "Montréal", ["Évenement", "Corporatif"]);
        tab_photographes.push(annie);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + annie.nom + "</td><td>" + annie.region + "</td><td>" + annie.type.join(" - ") + "</td></tr>";
    } else if (choixType == "Corporatif") {
        tab_photographes = [];
        var annie = new Photographe("Annie Simard", "Montréal", ["Évenement", "Corporatif"]);
        tab_photographes.push(annie);
        var joey = new Photographe("Joey Michaud", "Sherbrooke", ["Corporatif"]);
        tab_photographes.push(joey);
        var john = new Photographe("John Harvey", "Trois-Rivière", ["Corporatif"]);
        tab_photographes.push(john);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + annie.nom + "</td><td>" + annie.region + "</td><td>" + annie.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + joey.nom + "</td><td>" + joey.region + "</td><td>" + joey.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + john.nom + "</td><td>" + john.region + "</td><td>" + john.type.join(" - ") + "</td></tr>";
    } else {
        tab_photographes = [];
        var steph = new Photographe("Stéphanie Dulude", "Québec", ["Mariage"]);
        tab_photographes.push(steph);
        var isabelle = new Photographe("Isabelle Thériault", "Québec", ["Famille", "Mariage"]);
        tab_photographes.push(isabelle);
        var magalie = new Photographe("Magalie Simoneau", "Montréal", ["Mariage"]);
        tab_photographes.push(magalie);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + steph.nom + "</td><td>" + steph.region + "</td><td>" + steph.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + isabelle.nom + "</td><td>" + isabelle.region + "</td><td>" + isabelle.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + magalie.nom + "</td><td>" + magalie.region + "</td><td>" + magalie.type.join(" - ") + "</td></tr>";
    }
}

//Cette fonction travaille avec le filtre de region en récupérant l'option choisi par l'utilisateur dans l'id filtrer-region avec l'événement onClick.
//Par la suite, nous allons utiliser la technique de vider le tableau tab_photographes, créer seulement les objets qui correspondent au choix de l'utilisateur
//et les ajouter dans le tableau tab_photographes. Après ça, on va inséerer les lignes dans le tbody de la table dont l'id est tableau-photographes.
function filtrerParRegion(e){

    let choixRegion = document.getElementById("filtrer-region").options[document.getElementById("filtrer-region").selectedIndex].text;

    if (choixRegion == "Montréal") {
        tab_photographes = [];
        var annie = new Photographe("Annie Simard", "Montréal", ["Évenement", "Corporatif"]);
        tab_photographes.push(annie);
        var magalie = new Photographe("Magalie Simoneau", "Montréal", ["Mariage"]);
        tab_photographes.push(magalie);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + annie.nom + "</td><td>" + annie.region + "</td><td>" + annie.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + magalie.nom + "</td><td>" + magalie.region + "</td><td>" + magalie.type.join(" - ") + "</td></tr>";
    } else if (choixRegion == "Québec") {
        tab_photographes = [];
        var micheal = new Photographe("Micheal Smith", "Québec", ["Famille"]);
        tab_photographes.push(micheal);
        var steph = new Photographe("Stéphanie Dulude", "Québec", ["Mariage"]);
        tab_photographes.push(steph);
        var isabelle = new Photographe("Isabelle Thériault", "Québec", ["Famille", "Mariage"]);
        tab_photographes.push(isabelle);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + micheal.nom + "</td><td>" + micheal.region + "</td><td>" + micheal.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + steph.nom + "</td><td>" + steph.region + "</td><td>" + steph.type.join(" - ") + "</td></tr>"
            + "<tr><td>" + isabelle.nom + "</td><td>" + isabelle.region + "</td><td>" + isabelle.type.join(" - ") + "</td></tr>";
    } else if (choixRegion == "Trois-Rivière") {
        tab_photographes = [];
        var john = new Photographe("John Harvey", "Trois-Rivière", ["Corporatif"]);
        tab_photographes.push(john);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + john.nom + "</td><td>" + john.region + "</td><td>" + john.type.join(" - ") + "</td></tr>";
    } else {
        tab_photographes = [];
        var joey = new Photographe("Joey Michaud", "Sherbrooke", ["Corporatif"]);
        tab_photographes.push(joey);
        document.getElementById("tableau-photographes").innerHTML = "<tr><td>" + joey.nom + "</td><td>" + joey.region + "</td><td>" + joey.type.join(" - ") + "</td></tr>";
    }
}

//Il s'agit de la fonction qui sera déclenchée à partir de l'événement onkeyup.
function filtrerParNom(e){

    var texteValeur;
    var saisie = document.getElementById("nom");
    var filtre = saisie.value.toUpperCase();
    var table = document.getElementById("tableau-photographes");
    var ligne = table.getElementsByTagName("tr");
    for (var cpt = 0; cpt < ligne.length; cpt++) {
        cellule = ligne[cpt].getElementsByTagName("td")[0];
        if (cellule) {
            texteValeur = cellule.textContent || cellule.innerText;
            if (texteValeur.toUpperCase().indexOf(filtre) > -1) {
                ligne[cpt].style.display = "";
            } else {
                ligne[cpt].style.display = "none";
            }
        }
    }
}

function rafraichir(){
  location.reload(); 
}
