(() => {
    let mot = "devin";
    let tabmot = [];
    let tabvide = [];
    let nblf = 0;
    let lettre = [];
    let tabwrong = [];
    let nottrouve = true;
    let limit = 5;

    const initTab = () => {
        for (let index = 0; index < mot.length; index++) {
            tabmot.push(mot.charAt(index).toUpperCase());
        }
        for (let index = 0; index < mot.length; index++) {
            tabvide.push("_");
        }
    };

    document.getElementById("rest").innerText = limit;

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
    const felicitation = () => {
        // alert("bravo vous avez trouvé");
        document.getElementById("try").disabled = true;
    };

    const dommage = () => {
        document.getElementById("try").disabled = true;
        tabmot.forEach(element => {
            document.getElementById("reponse").innerText += element;
        });
    };
    initTab();

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
        nottrouve = tabvide.some(eleme => eleme == "_");
        if (
            pnblf == nblf &&
            tabwrong.find(e => e == lettre[lettre.length - 1]) == undefined
        ) {
            tabwrong.push(lettre[lettre.length - 1]);
            limit--;
            document.getElementById("rest").innerText = limit;
            modifwrong();
            if (limit == 0) {
                dommage();
            }
        }
        if (!nottrouve) {
            felicitation();
        }
    }
    document.getElementById("try").addEventListener("click", () => {
        if (nottrouve && limit > 0) {
            let es = document
                .getElementById("saisie")
                .value.charAt(0)
                .toUpperCase();
            document.getElementById("saisie").value = "";

            if (isNaN(es)) {
                lettre.push(es);
                guessLetter();
            }
        }
    });
})();