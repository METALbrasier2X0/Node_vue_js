var pow = function(b,n) {
    if (n <= 0) { 
      return 1;
    } else { 
       
      return (b * pow(b,n-1));
    }
  };
  console.log(pow(5,3));
