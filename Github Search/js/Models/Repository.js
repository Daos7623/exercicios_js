// Criação da classe dos repositórios
class Repository {
    constructor(name, url, language){
        this._name = name;
        this._url = url;
        this._language = language;
    }

    getRepos() {
        return {
            name: this._name,
            url: this._url,
            lang: this._language
        };
    }
}