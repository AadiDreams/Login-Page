function log(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    const users=new array("admin","user");
    const passwords=new array("admin01","user01");
    if(user==users[0] && pass==passwords[0]){
        self.location.href="./101.html";
    }
    else{
        window.alert("Invalid Credential");
    }
}
