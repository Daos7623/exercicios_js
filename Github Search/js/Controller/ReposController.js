//Requisição dos repositórios
class ReposController {
    constructor() {throw new Error("Ocorreu um erro. Não foi possível fazer sua requisição") }
    
    static getRepos(url) {
        let reposDiv = document.querySelector("#userRepos");
        reposDiv.innerHTML = "";
        
        let reposReq = new XMLHttpRequest();
        
        reposReq.open("GET",url);

        reposReq.addEventListener("load", ()=> {

            if(reposReq.status == 200){
                
                let reposObj = JSON.parse(reposReq.responseText);

                for(let i=0; i < reposObj.length; i++){
                    let reposApi = new Repository(reposObj[i].name, reposObj[i].html_url, reposObj[i].language);
                    reposDiv.innerHTML += ReposView.template(reposApi.getRepos());
                }
            }
        })

        reposReq.send();
    }
}