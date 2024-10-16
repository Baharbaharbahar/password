function verif() {
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    mail = document.getElementById("mail").value;
    homme = document.getElementById("homme").checked;
    femme = document.getElementById("femme").checked;
    foot = document.getElementById("foot").checked;
    hand = document.getElementById("hand").checked;
    tennis = document.getElementById("tennis").checked;
    pays = document.getElementById("pays").selectedIndex;
    remarques = document.getElementById("remarques").value;

    if (login == "") {
        alert("Écrire le login !");
    }
    pnt = email.indexOf(".");
    at = email.indexOf("@");
    ch1 = email.substr(0, at);
    ch2 = email.substr(at + 1, pnt - (at + 1));
    ch3 = email.substr(pnt);
    if (email == "" ||email.length>50) {
        alert("Entre Votre Email SVP");
        return false;
    }
    if (pnt == -1 || at == -1) {
        alert("Il n'y a pas de point / @");
        return false;
    }
    if (pnt < at) {
        alert("Vérifier Les Positions des Point et @ SVP");
        return false;
    }
    if (
        ch1 == "" ||
        ch2 == "" ||
        ch3 == "" ||
        !alphanum(ch1) ||
        !alphanum(ch2) ||
        !alpha(ch3)
    ) {
        alert("Vérifier Votre Email SVP");
        return false;
    }
    if (ch3.length < 2 || ch3.length > 4 && !alpha(ch3)) {
        alert("'.' doit contenir entre 2 et 4 caractères alphabétiques");
        return false;
    }
    if (password.length != 8) {
        alert("Écrire le password !");
    }
    var min = 0;
    var max = 0;
    var chiffre = 0;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= "A" || password.charAt(i) <= "Z") {
            min++;
        }
        if (password.charAt(i) < "a" || password.charAt(i) > "z") {
            max++;
        }
        if (password.charAt(i) < "0" || password.charAt(i) > "9") {
            chiffre++;
        }
        if (min == 0 || max == 0 || chiffre == 0 || ch.length(min+max+chiffre)<0) {
            alert("t comportant au moins une lettre majuscule, une lettre minuscule et un chiffre");
            return false;
        }
    }
    if (nom == "") {
        alert("Écrire le nom !");
        return false;
    }
    if (prenom == "") {
        alert("Écrire le prenom !");
        return false;
    }
    if (date_naiss = "") {
        alert("enter votre Date de Naissance !");
        return false;
    }
    if (mail == "") {
        alert("enter votre mail !");
        return false;
    }
    if (!homme && !femme) {
        alert("Écrire le choix !");
        return false;
    } if (!foot && !hand && !tennis) {
        alert("enter votre Sports!");
        return false;
    }
    if (pays == 0) {
        alert("enter votre pays!");
    }
    if (remarques == "") {
        alert("Écrire les remarques!");
    }
}


function alphanum(ch) {
    ch1=ch.toUpperCase();
    for (let i = 0; i < ch1.length; i++) {
        if (ch1[i] <= "A" && ch1[i] >= "Z" || ch1[i] <= "0" && ch1[i] >= "9") {
            return false;
        }
    }
    return true ;
}



function alpha(ch) {
    ch1=ch.toUpperCase();
    for (let i = 0; i < ch1.length; i++) {
        if (ch1[i] <= "A" && ch1[i] >= "Z" ) {
            return false;
        }
    }
    return true;
}