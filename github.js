class GitHub {
    constructor() {
        this.client_id = 'eec2a43b84c53a9e182c';
        this.client_secret = '5f46b62039a8eff3149346fe45800b63cc8833ef';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = 
            await fetch (
                `https://api.github.com/users/${user}
                ?client_id=${this.client_id}&client_secret=${this.client_secret}`
            );
        const repoResponse =
            await fetch(
                `https://api.github.com/users/${user}/repos
                ?per_page=${this.repos_count}&sort=${this.repos_sort}
                &client_id=${this.client_id}
                &client_secret=${this.client_secret}`
            );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {profile, repos};
    }
}