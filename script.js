/* tira-teima */
function MudaDesenho(){
    const x = document.querySelector('#x').value;
    const y = document.querySelector('#y').value;

    const msg = document.querySelector(".msg");
    
    if(x <= 432 && y <= 468 && x > 0 && y > 0){
        msg.innerHTML = "Dentro";
    }

    else{
        msg.innerHTML = "Fora";
    }
}

/* vice-lider */
function MudaDesenho1(){
    const A = parseInt(document.querySelector('#A').value);
    const B = parseInt(document.querySelector('#B').value);
    const C = parseInt(document.querySelector('#C').value);

    const msg1 = document.querySelector(".msg1");
    
    if(A <= 100 && A > B && A < C || A < B && A > C){
        msg1.innerHTML = A;
    }

    else if(B <= 100 && B > A && B < C || B < A && B > C){
        msg1.innerHTML = B;
    }

    else if(C <= 100 && C > A && C < B || B < A && B > C){
        msg1.innerHTML = C;
    }
}

/* zero ou um */
function MudaDesenho2(){
    
    const alice =document.querySelector('#alice').value;
    const beto =document.querySelector('#beto').value;
    const clara =document.querySelector('#clara').value;
    const abc = alice + beto + clara;
    
    const msg2 = document.querySelector(".msg2");

    //alert(`${abc}`);

    if( abc == "100" || abc == "011"){
        msg2.innerHTML = "alice";
    }

    else if( abc == "010" || abc == "101"){
        msg2.innerHTML = "beto";
    }

    else if( abc == "001" || abc == "110"){
        msg2.innerHTML = "clara";
    }

    else {
        msg2.innerHTML = "*"
    }
}

