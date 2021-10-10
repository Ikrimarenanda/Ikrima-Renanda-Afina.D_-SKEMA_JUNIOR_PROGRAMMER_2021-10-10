// panggil fungsi clearOutput().
function clearOutput() {
    document.getElementById("output").innerHTML = "0";
}

// Menghilangkan 0 didepan angkandengan removeZero()
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}

//mendefinisikan sebuah fungsi sebagai perc() untuk memanggil persen 
function perc() {
    removeZero()
    var value = document.getElementById("output").innerHTML;
    value = value/100;
    document.getElementById("output").innerHTML = value;
}

function fordisplay(myvalue) {
    removeZero()
    document.getElementById("output").innerHTML+=myvalue
}

//fungsi eval (persamaan) yang mengevaluasi / mengeksekusi persamaan yang diteruskan sebagai parameter (hasil dari perhitungan)
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}
