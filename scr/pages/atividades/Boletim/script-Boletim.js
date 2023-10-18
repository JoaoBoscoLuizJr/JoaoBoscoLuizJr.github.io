let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let user = { nome: "", instituicao: "", curso: "" };

function save() {
    campVazio
    let notas = [];
    let totalNotas = 0;
    user.nome = nomeUsuario.value;
    user.instituicao = nomeInstituicao.value;
    let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;

    document.querySelectorAll("div.input_group > input").forEach(e => {
        notas.push(parseFloat(e.value))
        totalNotas += parseFloat(e.value);
    });

    console.log(notas)
    if (!validarNotas()) {
        materias.push({
            id: materia.id++,
            nome: nomeMateria.value.toLocaleUpperCase(),
            notas: notas,
            total: totalNotas,
            info: `<hr>
                RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
                <table class="table">
                <tr>
                <td><b>1º Bimestre:</b> ${notas[0]}</li>
                </tr>
                <tr>
                <td><b>2º Bimestre:</b> ${notas[1]}</li>
                </tr>
                <tr>
                <td><b>3º Bimestre:</b> ${notas[2]}</li>
                </tr>
                <tr>
                <td><b>4º Bimestre:</b> ${notas[3]}</li>
                </tr>
                <tr>
                <td>TOTAL FINAL: <b> ${totalNotas} </b></li>
                </tr>
                <tr>
                <td>STATUS: <b>${isAprovadoOuReprovado(totalNotas)}</b></li>
                </tr>
                </table>
                `
        });
    }
    function validarNotas() {
        for (let i = 0; i < notas.length; i++) {
            if (i == 0 && notas[0] > 20) {
                alert("O valor máximo do primeiro bimestre é de 20 pontos");
                return true;
            } else if (i == 0 && notas[1] > 25) {
                alert("O valor máximo do segundo bimestre é de 25 pontos");
                return true;
            } else if (i == 0 && notas[2] > 25) {
                alert("O valor máximo do terceiro bimestre é de 25 pontos");
                return true;
            } else if (i == 0 && notas[3] > 30) {
                alert("O valor máximo do quarto bimestre é de 30 pontos");
                return true;
            }
            return false;
        }
    }

    console.log(materias)

    materias.forEach(e => {
        resultados += `<br>` + e.info;
    });

    resultNotas.innerHTML = resultados;
}

function verifcMat() {
    if (nome == nomeMateria) {
        return console.error("Matéria jé adicionada")
    }

}

function campVazio() {
    if ($("</input>").prop("required") === undefined) {
        $(document).on("subimit", function (e) {
            $(this)
                .find("input, select, textarea")
                .filter("[required]")
                .each(function () {
                    e.preventDefault();
                    $(this).css({ "border": "2px solid red" })
                    alert($(this).prev('label').html() + "Campo Vazio!");
                });
        });
    }

}

function isAprovadoOuReprovado(valor) {
    if (valor >= 60) {
        return "APROVADO"
    } else {
        return "REPROVADO"
    }
}