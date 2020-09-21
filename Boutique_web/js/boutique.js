var tab_produits = [];
var panier = [];

window.onload = function () {
    chargerProduits();


};

//Il s'agit de la fonction qui va charger les produits dans le catalogue du magasin en créant tout d'abord un tableau associatif (dictionnaire, dans d'autres langages).
function chargerProduits() {
    tab_produits["canon-t8i.jpg"] = 1199.00;
    tab_produits["canon-90D.jpg"] = 1999.99;
    tab_produits["nikon-z50.jpg"] = 1599.00;
    tab_produits["flash-godox.jpg"] = 229.95;
    tab_produits["objectif-canon.jpg"] = 669.00;
    tab_produits["objectif-canon-macro.jpg"] = 2899.00;
    tab_produits["trepied.jpg"] = 239.95
    tab_produits["sac.jpg"] = 69.95;
    tab_produits["carte-memoire.jpg"] = 52.95;

}

//Cette fonction va transférer/ajouter les produits à la table de la gauche pour que le total des produits soit calculé ensuite.
function ajouterAuPanier(item) {
    if ((itemExistant(item)) == false) {
        panier[item] = tab_produits[item];

        //À chaque création de l'élément html qui correspond à la table, on va créer des attributs applicables.
        //Dans ce cas, on va créer les lignes (en anglais, row).
        var ligneTable = document.createElement("tr");
        ligneTable.setAttribute("id", item);
        ligneTable.setAttribute("onClick", "retirerDuPanier()");
        ligneTable.onclick = retirerDuPanier;

        //Création des cellules liées à l'image et au prix.
        //Ajout des cellules dans les lignes de chaque produit dans le panier.
        var celluleImage = document.createElement("td");
        var cellulePrix = document.createElement("td");
        ligneTable.appendChild(celluleImage);
        ligneTable.appendChild(cellulePrix);

        //Création de l'émement html image et les attributs correspondants.
        //Ajout de l'image dans la cellule de l'image.
        var image = document.createElement("img");
        image.setAttribute("src", "images/" + item);
        image.setAttribute("width", "60px");
        celluleImage.appendChild(image);

        //Création de la variable du prix avec le format correcte et son ajout dans la cellule du prix.
        var prixContenu = document.createTextNode(panier[item].toFixed(2) + " $");
        cellulePrix.appendChild(prixContenu);

        //Finalement, toute la ligne sera ajouter au corps (élément body) du panier.
        document.getElementById("bodyPanier").appendChild(ligneTable);
        afficherTotal();
    }

}

//Fonction pour retirer chaque produit du panier.
function retirerDuPanier() {
    //This va récupérer l'objet/élément courant, qui est l'élément fils du node correspondant.
    //Donc, removeChild va supprimer l'élément tr de tbody.
    this.parentNode.removeChild(this);
    delete panier[this.id];
    afficherTotal();
}

//Fonction pour afficher le prix total après la somme de tous les produits.
//Il y a aussi le formatage du prix après la virgule.
function afficherTotal() {
    var montant = 0.0;
    //Boucle for pour ajouter les prix dans le panier de l'achat.
    for (var prix in panier) {
        montant += panier[prix];
    }
    document.getElementById("divTotalPanier").innerHTML = montant.toFixed(2)
}

/*  La fonction itemExistant valide si l'item est déjà dans le panier et
 *  retourne true s'il est présent, et false s'il ne l'est pas  */
function itemExistant(item) {
    for (var indice in panier) {
        if (indice == item) {
            alert("Ce produit existe déjà dans le panier");
            return true;
        }
    }
    return false;

}

//Il s'agit de la fonction qui sert à vérifier toutes les entrées par l'utilisateur dans les champs du formulaire de paiment.
//On a crée des variables booléenes pour chaque vérification afin de les récupérer plus tard et valider si toutes les données de l'utilisateur sont correctes.
function validerPaiement() {

    var titulaire = false;
    var titulaireNom = document.getElementById("nom").value.trim();
    if (titulaireNom.length < 3) {
        alert("Le nom doit être plus long que 3 caractères.");
    } else {
        titulaire = true;
    }

    var carte = false;
    var carteNumero = document.getElementById("numero").value.trim();
    if ((carteNumero.charAt(0) != 4) && (carteNumero.charAt(0) != 5)) {
        alert("Seulement les cartes Visa et MasterCard sont acceptées.");
    } else {
        carte = true;
    }

    var longueurCarte = false;
    if (carteNumero.length != 16) {
        alert("La carte de crédit doit avoir exactement 16 chiffres.");
    } else {
        longueurCarte = true;
    }

    var numeroCvc = false;
    var cvcNumero = document.getElementById("cvc").value.trim();
    if (!/^[0-9]+$/.test(cvcNumero)) {
        alert("Le code CVC doit être des chiffres");
    } else if (cvcNumero.length != 3) {
        alert("Le code CVC doit avoir exactement 3 chiffres");
    } else {
        numeroCvc = true;
    }

    var dateFormatage = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
    var date = new Date();
    var heure = new Date();
    var formatageHoraire = { hour: '2-digit', minute: 'numeric' }
    if (titulaire == true && carte == true && longueurCarte == true && numeroCvc == true) {
        alert("Paiement effectué avec succès le " + date.toLocaleString("fr-CA", dateFormatage) + " à " + heure.toLocaleString("fr-CA", formatageHoraire).replace('h', ':').replace(/ /g, ''));
    }
    return true;

}