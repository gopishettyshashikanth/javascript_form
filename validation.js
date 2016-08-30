function alphaBatsOnly(e){
    
    if((e.keyCode >= 97 && e.keyCode <=122 ) || (e.keyCode <= 90 && e.keyCode >=65)){ 
           
    }else{
        
        e.preventDefault();
    }
}
function numbersOnly(e){
    
    if(e.keyCode <=57 && e.keyCode >=48){
        
        
    }else{
        
        e.preventDefault();
    }
    
}