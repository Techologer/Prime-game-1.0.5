let getprime = 0;
let moneygeting = 0;
let caffetinening = 0;  
let priming = 0;
let reseting;
let priming2 = document.getElementById("blueprime")
let priming3 = document.getElementById("prime2")
let bluepriming = 0;
document.getElementById("blueprime").onclick = function(){
        bluepriming += 1;
        document.getElementById("bluepoints").innerHTML = "You have: " +bluepriming+ " Blue Prime Points"
}
document.getElementById("startprime1").onclick = function(){
    getprime += 1;
    document.getElementById("labelstatusprime").innerHTML = "You Have: " + getprime  + " Prime Points"
    if(getprime>=100){
       getprime = 0;
       moneygeting += 1;
       document.getElementById("money").innerHTML = "Prime money: " + moneygeting; 
    }
    if(moneygeting>=10){
        moneygeting = 0;
      caffetinening += 1;
      document.getElementById("caffetine").innerHTML = "Prime caffeine: " + caffetinening + "%"; 
    }
}
setInterval(function(){
     priming += 1;
     document.getElementById("primeinglabel").innerText = "Double Points: " + priming;
     if(priming>=1){
        getprime += 2;
        document.getElementById("labelstatusprime").innerHTML = "You Have: " + getprime  + " Prime Points"
        if(getprime>=130){
            getprime = 0;
         moneygeting += 1;
         document.getElementById("money").innerHTML = "Prime money: " + moneygeting; 
        }
     }
     document.getElementById("Reset1").onclick = function(){
        getprime = 0;
        document.getElementById("labelstatusprime").innerHTML = "You Have: " + getprime  + " Prime Points"
        moneygeting = 0;
        document.getElementById("money").innerHTML = "Prime money: " + moneygeting; 
        caffetinening = 0;
        document.getElementById("caffetine").innerHTML = "Prime caffeine: " + caffetinening + "%"; 
        priming = 0;
        document.getElementById("primeinglabel").innerText = "Double Points: " + priming;
     }
    
},1000)
const myprimes = document.querySelector("#myprimes");
const seemyprimes = document.querySelector("#seemyprimes");

myprimes.addEventListener("click", () =>{
    if(seemyprimes.style.display == "none"){
        seemyprimes.style.display = "block";
    }
    else{
        seemyprimes.style.display = "none";
    }
})
setInterval(function(){
    if(caffetinening>=10){
       priming2.classList.add("show-blueprime1")  
       priming3.classList.add("show-bluepriming2")
    }
})
