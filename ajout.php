<?php
$login=$_POST["login"];
$password=$_POST["password"];
$nom=$_POST["nom"];
$prenom=$_POST["prenom"];
$datenais=$_POST["date_naiss"];
$heure=$_POST["heure"];
$email=$_POST["mail"];
$sexe=$_POST["sexe"];
$foot=$_POST["foot"];
$hand=$_POST["hand"];
$tennis=$_POST["tennis"];
$pays=$_POST["pays"];
$remarques=$_POST["remarques"];
    if (!isset($_POST["foot"])){
        $foot="N";
    }if (!isset($_POST["hand"])){
        $hand="N" ;
    }if(!isset($_POST["tennis"])){
        $tennis="N";
    }
require("config.php");
$sql = "INSERT INTO test VALUES ('','$login', '$password', '$nom', '$prenom', '$datenais', '$heure', '$email', '$sexe', '$foot', '$hand', '$tennis', '$pays', '$remarques');";
mysqli_query($conn,$sql);
if (mysqli_affected_rows($conn)>0){
    echo "succées";
}else{
    echo "utilisateur existant";
}
mysqli_close($conn);


?>