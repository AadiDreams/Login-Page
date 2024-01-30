function value(){
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const users=["admin","user"];
    const passwords=["admin01","user01"];
    if(user==users[0] && pass==passwords[0]){
        self.location.href="./101.html";
    }
    else{
        window.alert("Invalid Credential");
    }
}
