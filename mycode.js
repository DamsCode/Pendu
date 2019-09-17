(() => {
    let tabmot = ["D", "E", "V", "I", "N", "E", "R"];
    let tabvide = ["_", "_", "_", "_", "_", "_", "_"];
    let nblf = 0;
    let lettre = [];
    let tabwrong = [];
    //    let display = document.getElementById("display").innerHTML;

    function modifdisplay() {
        document.getElementById("display").innerHTML = "";
        tabvide.forEach(element => {
            document.getElementById("display").innerHTML += `${element} `;
        });
    }

    function modifwrong() {
        document.getElementById("wrong").innerHTML = "";
        tabwrong.forEach(element => {
            document.getElementById("wrong").innerHTML += `${element} `;
        });
    }
    modifdisplay();

    function guessLetter() {
        let pnblf = nblf;
        tabmot.forEach((element, index) => {
            if (element === lettre[lettre.length - 1]) {
                tabvide[index] = element;
                modifdisplay();
                nblf++;
            }
        });
        if (
            pnblf == nblf &&
            tabwrong.find(e => e == lettre[lettre.length - 1]) == undefined
        ) {
            console.log("test");
            tabwrong.push(lettre[lettre.length - 1]);
            modifwrong();
        }
    }
    document.getElementById("try").addEventListener("click", () => {
        let es = document
            .getElementById("saisie")
            .value.charAt(0)
            .toUpperCase();
        document.getElementById("saisie").value = "";

        if (isNaN(es)) {
            lettre.push(es);
            guessLetter();
        }
    });
})();