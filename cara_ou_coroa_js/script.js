const readline = require('readline');
const clear = require('clear');

function Menu() {
    clear();
    console.log("--------------------------------------------------------");
    console.log("███    ███ ███████ ███    ██ ██    ██ ");
    console.log("████  ████ ██      ████   ██ ██    ██ ");
    console.log("██ ████ ██ █████   ██ ██  ██ ██    ██ ");
    console.log("██  ██  ██ ██      ██  ██ ██ ██    ██ ");
    console.log("██      ██ ███████ ██   ████  ██████ ");
    console.log("");
    console.log("0 - Escolher coroa");
    console.log("1 - Escolher cara");
    console.log("Q- Sair");
    console.log("--------------------------------------------------------");
}
Menu();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function input() {
    rl.question('Insira a sua escolha: ', (resposta) => {
        let x = Number(resposta);
        rl.close();
        while (true) {
            if (resposta === "Q") {
                break;
            }
            else if (resposta === "0" || resposta === "1") {
                let resultado = Math.floor(Math.random() * 2);
                function cara(){
                    if (resultado === 0) {
                        return "coroa";
                    }
                    else if (resultado === 1){
                        return "cara";
                    }
                }
                let moeda = cara();
                if (x === resultado) {
                    console.log("Acertou!!!");
                    console.log("Lado da moeda: "+moeda);
                }
                else{
                    console.log("errou");
                    console.log("Lado da moeda: "+moeda);
                }
                break;
            }
        }
    });
}
input();