function replace(str, fn) {
    let new_str = "";
    for(var i=0;i<str.length;i++) {
        new_str += fn(str[i]);
    }
    return new_str;
}

function my_fn(char) {

    char.replace("p", "m");
    char.replace("o", "a");
    char.replace("n", ""); //Test.de.string
    
}

console.log(replace("Je suis ton père", my_fn));