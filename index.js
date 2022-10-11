 
const loginButton = document.querySelector('.login-btn');
const login = document.querySelector('.login');
const signButton = document.querySelector('.sign-btn');
const sign = document.querySelector('.sign');


// ((e) =>{
//     loginButton.addEventListener('click', (e) =>{
//        console.log(e.type);
       
       
//     })  
// })();

function loginToggle(){
    if(login.style.display == 'block'){
        login.style.display = 'none';
    }
    else {
    login.style.display = 'block';
    }

}

function signToggle(){
    if(sign.style.display == 'flex'){
        sign.style.display = 'none';
    }
    else {
        sign.style.display = 'flex';
    }
}
