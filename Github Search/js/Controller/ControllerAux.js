//Formulário de busca
let buttonSearch = document.querySelector("#userSearch");
let inputSearch = document.querySelector("#userForm");
let reposSearch = document.querySelector("#userRepos")

buttonSearch.addEventListener ("click", () => {
    let userURL = `https://api.github.com/users/${inputSearch.value}`
    let reposURL = `https://api.github.com/users/${inputSearch.value}/repos`;
    
    UserController.getUser(userURL);
    ReposController.getRepos(reposURL);
    inputSearch.value = "";
    inputSearch.focus();
});

inputSearch.addEventListener ("keyup", function (e) {
    let key = e.which || e.keyCode;
    if(key == 13) {
        let userURL = `https://api.github.com/users/${inputSearch.value}`
        let reposURL = `https://api.github.com/users/${inputSearch.value}/repos`;
        
        UserController.getUser(userURL);
        ReposController.getRepos(reposURL);
        inputSearch.value = "";
        inputSearch.focus();
    }
});
