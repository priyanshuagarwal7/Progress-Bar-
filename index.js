
let count=0
function prevfun(){
    if(count>=0){
        if(count==1){
            document.getElementById('block1').style.backgroundColor="white"
            document.getElementById('1').style.color = "purple"
            document.getElementById('2').style.border = "2px solid white"
            document.getElementById('midtext').innerHTML="Start Your Journey"
            count=count-1
        }
        else if(count==2){
            document.getElementById('block2').style.backgroundColor="white"
            document.getElementById('3').style.color = "purple"
            document.getElementById('4').style.border = "2px solid white"
            document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-1"
            count=count-1
        }
        else if(count==3){
            document.getElementById('block3').style.backgroundColor="white"
            document.getElementById('5').style.color = "purple"
            document.getElementById('6').style.border = "2px solid white"
            document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-2"
            count=count-1
        }
        else if(count==4){
            document.getElementById('block4').style.backgroundColor="white"
            document.getElementById('7').style.color = "purple"
            document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-3"
            // document.getElementById('2').style.border = "2px solid white"
            count=count-1
        }
    }
}

function nextfun(){
    if(count==0){
        document.getElementById("previous").disabled = true;
    }
    count= count+1
    if(count==1){
        document.getElementById("previous").disabled = false;
        document.getElementById('block1').style.backgroundColor="cyan"
        document.getElementById('1').style.color = "black"
        document.getElementById('2').style.border = "2px solid purple"
        document.getElementById('2').style.borderRadius = "50px"
        document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-1"
    }
    else if(count==2){
        document.getElementById('block2').style.backgroundColor="cyan"
        document.getElementById('3').style.color = "black"
        document.getElementById('4').style.border = "2px solid purple"
        document.getElementById('4').style.borderRadius = "50px"
        document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-2"
    }
    else if(count==3){
        document.getElementById('block3').style.backgroundColor="cyan"
        document.getElementById('5').style.color = "black"
        document.getElementById('6').style.border = "2px solid purple"
        document.getElementById('6').style.borderRadius = "50px"
        document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-3"
    }
    else if(count==4){
        document.getElementById('block4').style.backgroundColor="cyan"
        document.getElementById('7').style.color = "black"
        document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-4"
        // document.getElementById("next").disabled = true;
    }
}
function finishfun(){
    // document.getElementById("next").disabled = true;
    document.getElementById('block1').style.backgroundColor="cyan"
    document.getElementById('1').style.color = "black"
    document.getElementById('2').style.border = "2px solid purple"
    document.getElementById('2').style.borderRadius = "50px"
    document.getElementById('block2').style.backgroundColor="cyan"
    document.getElementById('3').style.color = "black"
    document.getElementById('4').style.border = "2px solid purple"
    document.getElementById('4').style.borderRadius = "50px"
    document.getElementById('block3').style.backgroundColor="cyan"
    document.getElementById('5').style.color = "black"
    document.getElementById('6').style.border = "2px solid purple"
    document.getElementById('6').style.borderRadius = "50px"
    document.getElementById('block4').style.backgroundColor="cyan"
    document.getElementById('7').style.color = "black"
    document.getElementById('midtext').innerHTML="Congratulations! You've completed Step-4"
    count=4
    
}