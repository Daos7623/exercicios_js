//Requisição dos usuários
class UserController {
    constructor() {throw new Error("Ocorreu um erro. Não foi possível fazer sua requisição") }

    static getUser(url) {
        let divUser = document.getElementById("content");        
        let userRequest = new XMLHttpRequest(); 
        userRequest.open("GET", url);

        userRequest.addEventListener ("load", () => {
            
            if (userRequest.status == 200) {
                       
            let userObj = JSON.parse(userRequest.responseText);
            
            //Instanciando o usuário na controller
            let gitUser = new User( userObj.avatar_url, 
                                    userObj.login, 
                                    userObj.name, 
                                    userObj.location, 
                                    userObj.followers, 
                                    userObj.following
                                    );
                                
            divUser.innerHTML = UserView.template(gitUser.returnUser()); 
                                        
        } else {
            divUser.innerHTML = `<div id="content" class="divContent">
                                 <h4>Tente novamente.</h4>
                                 </div>`
        }

                        
    });

    userRequest.send();  
}
}

