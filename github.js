class Github{
    constructor() {
        this.client_id = '002c6e12524993ae388c';
        this.client_secret = '356d3976e9414196119f2929e93ffdbbd49ed24d';
        this.repos_count=5;
        this.repos_sort = 'created : asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return{
            // in es6 means profile : profile // we had created an object here coz we have to show repos also 
            profile,
            repos
        }
    }
}