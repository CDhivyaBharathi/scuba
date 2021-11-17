AFRAME.registerComponent("game",{
    schema:{
        elementId : {type:"string",default:"#coin1"}
    },
    init:function(){
        var dur = 120
        const timerE1 = document.querySelector("#timer")
        this.starttimer(dur,timerE1)
    },
    update:function(){
        this.collided(this.data.elementId)
    },
    collided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e=>{
            if(elementId.includes("#coin")){
                element.setAttribute("visible", false);
                this.targetCounter()
                this.updateScore()
            }
            else {
                this.gameOver();
              }
        })
    },
    starttimer:function(dur,timerE1){
        var min;
        var sec;
       setInterval(()=>{
           if (dur>=0){
               min = parseInt(dur/60)
               sec = parseInt(dur%60)
               if (min <10){
                   min ="0"+min;
               }
               if (sec<10){
                   sec="0"+sec
               }
               timerE1.setAttribute("text",{
                   value : min+":"+sec
               })
               dur-=1;
           }
       },1000)

    },

    targetCounter:function(){
        var element=document.querySelector("#targets")
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", {
            value: currentTargets,
          });
    },
    updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        });
    },
    gameOver:function(){
        var diverEl = document.querySelector("#diver_model");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        diverEl.setAttribute("dynamic-body", {
     mass: 1
    });
    }
})



