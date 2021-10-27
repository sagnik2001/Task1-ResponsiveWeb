function change_text(){
  document.getElementById("change1").innerHTML ="<img src='login.png'> Siddharth Goyal <i class='fas fa-caret-down'></i>"
  document.getElementById("change2").innerHTML ="<i class='fas fa-sign-out-alt'></i> Leave Group"
    document.getElementById("change2").style.backgroundColor = "white"
    document.getElementById("change2").style.color = "black"
    document.getElementById("vis1").style.display = "block"

}
function following(){
  document.getElementById("follow").innerText = "Followed"
  document.getElementById("follow").style.backgroundColor = "black"
  document.getElementById("follow").style.color = "white"
  document.getElementById("follow").style.fontSize = "12px"
}
function login(){
  document.getElementById("name1").style.display ="none"
  document.getElementById("name2").style.display ="none"
  document.getElementById("name3").style.display ="none"
  document.getElementById("for1").style.display ="block"
    document.getElementById("cre").innerHTML="Sign In"
          document.getElementById("cre2").innerHTML ="   Don’t have an account yet? <span style='color:#2F6CE5'>Create new for free!</span>"
   document.getElementById("login").innerHTML = "Sign In"
}
