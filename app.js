// instantaie a class
const github = new Github; 
// instantaite a ui class
const ui = new UI;
// get innput variable
const searchUser = document.getElementById('searchUser');
// addding event listerner
searchUser.addEventListener('keyup',(e) =>{
    // get input text
    const userText = e.target.value;

    if(userText !== '')
    {
        // make an http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('user not found','alert alert-danger');
            }
            else
            {
                // show users profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    }
    else
    {
        // clear everything
        ui.clearProfile();
    }
});