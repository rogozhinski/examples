document.addEventListener('click', e => {

    const target = e.target;

    if (target.id.includes('login-button')){

        loginValue = document.getElementById("login-input").value;
        passwordValue = document.getElementById("password-input").value;

        toSell = {
            login: "login1",
            password: "password1"
        }

        window.fetch("http://localhost:9999/auth",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(toSell)
        }).then((response) => {return response.text()})
        .then((text) => {console.log(text)})
    };

    if (target.id.includes('logout-button')){
        
        window.fetch("http://localhost:9999/logout",{
            method: 'GET',
        });  
    }
  
});
    


