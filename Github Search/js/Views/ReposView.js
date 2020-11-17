// Criação da classe que gera a view dos repositórios
class ReposView {
    static template(repos) {
        return `
                <div id="repositories">
                    <a href="${repos.url}">
                    <img src="img/gitRepos.png" id="reposImg">
                    </a>
                    <p id="reposName">Repository:<br> ${repos.name}</p>   
                    <p id="reposName">Language:<br> ${repos.lang}</p>    
                </div>`;
    }

}