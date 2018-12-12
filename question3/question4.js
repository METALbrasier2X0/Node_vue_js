function pow(b,n) {

    var a = b
    
    for (var i = 1; i < n; i++){

    a = a*b

    }

    console.log(a)
}

pow(5,2);