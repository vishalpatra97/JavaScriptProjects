function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if(color == '#000000'){
        for(let elm of txt){                 // in txt array has been stored on same classs name element. thats why we array for change on by one
            elm.style.color = "white";
        }
    }else{
            for(let elm of txt){                 
                elm.style.color = "black";
            }
        }
    }
