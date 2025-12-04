//  ESTUDAR SOBRE LEITURA DE ARQUIVOS JSON!!!
// fetch("script/users.json")
//     .then(res => res.json())
//     .then(dados => {
//         console.log(dados);
//     })
//     .catch(err => console.log("ERRO: ", err));


// função básica de login (INSEGURA)
function logar() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "Admin" && password == "Abcd123") {
        location.href = "principal.html";
    } else {
        alert("Usuário ou senha incorretos!")
    }
};

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})