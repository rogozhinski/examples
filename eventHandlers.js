document.addEventListener('click', e => {

    const target = e.target;

    if (target.className.includes('login')){

        toSell = {
            authform: {
                login: 'login1',
                password: 'password1'
            }
        }

        window.fetch("http://localhost:9999/auth",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            mode: 'no-cors',
            body: JSON.stringify(toSell)
        });

    };

    if (target.className.includes('logout')){
        
        window.fetch("http://localhost:9999/logout",{
            method: 'GET',
            mode: 'no-cors',
        });  
    }
  
});
    


