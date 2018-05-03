window.addEventListener("load", function(){
   
   checkLogin();    
});

// function storeValues(){
//     if(localStorage.getItem("email") == ""){
//     var userName = document.getElementById("email");
//     localStorage.setItem("email", "asdfg");
//     }
//     else{
//         checkLogin();
//     }
//     // var userPass = document.getElementById("password");
//     // localStorage.setItem("Password", userPass.value);
//     checkLogin();
// }

function checkLogin() {
     var storedEmail = localStorage.getItem("email");
     var storedPass = localStorage.getItem("Password");

     var userName = document.getElementById("email");
     var password = document.getElementById("password").value;  
     document.getElementById("submit").addEventListener("click",function(){
        if(document.getElementById("popUp").classList.contains("show")){
            if(userName.value == localStorage.getItem("email")){
            document.getElementById("popUp").classList.remove("show");
            }
            if(document.getElementById("popUp").classList.contains("shake")){
                document.getElementById("popUp").classList.remove("shake");
            }
            if(userName.value !== localStorage.getItem("email")){
                document.getElementById("popUp").classList.add("shake");
            }
        }
        if(userName.value !== localStorage.getItem("email")){
            document.getElementById("popUp").classList.add("show");
            
        }
        if(password.value !== localStorage.getItem("Password")){
            document.getElementById("popUp2").classList.add("show")
        }
    });
}



