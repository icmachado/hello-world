function getTotalX(a, b) {
    var count = 0;
    for (var elem = 1; elem <= 100; elem++) {
        if (a.every(int => (elem % int == 0))) {
            
            if (b.every(int => (int % elem == 0))) {
                count++;
            }
        }
    }

    console.log(count);
}


var a = [2, 4];
var b = [16, 32, 96];
getTotalX(a, b);