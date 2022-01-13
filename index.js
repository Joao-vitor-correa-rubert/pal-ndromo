

//solução 2
function verificarPalindromo2(){
    if(!String) return "String inexistente";

    for(let i = 0; i < String.length / 2; i++){
        if (String[i] !== String[String.length -1 -i]){
            return false;
        }
    } 
    return true;
}
console.log(verificarPalindromo2("gato"))