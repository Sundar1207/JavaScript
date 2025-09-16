// var - function scope

function names() {
    if (true) {   // lowercase true, condition inside ()
        var x = 10;   // declared with var inside block
        console.log("Inside if: ", x);
    }

    // var is function-scoped → still accessible here
    console.log("Outside if: ", x);
}

names();
