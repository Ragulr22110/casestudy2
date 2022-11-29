function validate(callback) { 

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("psw").value;


    if(userName == "admin" && password == "1234") {
        callback();
    }
    else{
        alert("login id or password is wrong")
        return false;
    }
    
}

$('#logOut').on('click',(e)=>{
    e.preventDefault();
    // Sign-out successful.
    window.localStorage.removeItem('user');
    window.location="index.html";
    console.log('logout successfully');
})