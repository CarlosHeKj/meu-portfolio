*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
    color: white;

}
body{
    background-color: black;
    color: white;
    
}

#div_seta_baixo{
    border: 4px solid purple;
    width: 100px;
    height: 100px;
    left: 50%;
    font-size: 100px;
     display: flex;
     position: fixed;
     font-size: 50px;
     bottom: 20px;
     z-index: 5;
     justify-content: center;
    text-align: center;
    border-radius: 100px;
    animation: cb 500ms infinite linear;
    cursor: pointer;
}


#seta_cima{
    right: 0;
   
    display: flex;
    position: fixed;
    
    bottom: 0px;
    z-index: 5;
    
}
section{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid purple;
    gap: 1px;
    align-items: center;
    justify-content: center;
    min-height: 820px;
    min-width: 1100px;
    height: 100dvh;
    width: 100dvw;
    flex-wrap: wrap;
}
footer{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-wrap: wrap;
    height: 100px;
}
section>h2{
    position: absolute;
    top: 20px;
    font-size: 50px;
    left: 20px;
}
.p_sessao>h1{
    position: absolute;
    font-size: 120px;
    top: 20px;
    
    animation: rgb 2s infinite linear;
  
}
.p_sessao>h2{
    position: absolute;
    font-size: 80px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rgb 2s infinite linear;
}
.p_sessao>img{
    position: absolute;
    bottom: 0;
    right: 20px; 
    height: 600px;
   filter: drop-shadow(0px 0px 1px purple);
   
}
.s_sessao{
    min-width: 1000px;
}
.s_sessao>img{
    height: 250px;
    border: 5px solid ;
    border-radius: 50%;
    background: black;
    animation: rgb_img 2s infinite linear;
}


.div1{
    position: absolute;
    border-bottom: 15px solid purple;
    margin-left: 200px;
    width: 700px;
    height: 100px;
    
    top:40%;
    left: 800px;
    transform: translate(-50%, -50%);
    border-left: 15px solid purple;
    border-radius: 5px 5px 0 0;
    z-index: 1;
}
.div2{
    position: absolute;
    top:54%;
    left: 800px;
    transform: translate(-50%, -50%);
    margin-left: 200px;
    width: 700px;
    height: 100px;
    border-bottom: 15px solid purple;
    border-right: 15px solid purple;
    z-index: 1;
}
.div3{
    position: absolute;
    border-bottom: 15px solid purple;
    margin-left: 200px;
    width: 700px;
    height: 100px;
    
    top:80%;
    left: 800px;
    transform: translate(-50%, -50%);
    border-left: 15px solid purple;
    border-radius: 5px 5px 0 0;
    z-index: 1;
}
#h2:after{
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: pisca .7s infinite;
   }
.s_sessao>img:nth-child(4){
    top: 10%;
    z-index: 2;
    transition: all 200ms ease-in-out;
 }

.s_sessao>img:nth-child(5){
    top: 25%;
    z-index: 2;
    transition: all 200ms ease-in-out;
}
.s_sessao>img:nth-child(6){
    top: 55%;
    z-index: 2;
    transition: all 200ms ease-in-out;
}
.s_sessao>img:nth-child(7){
    background: black;
   top: 65%;
   z-index: 2;
   transition: all 200ms ease-in-out;
}
.s_sessao>img:nth-child(4):hover{
    transform: scale(1.1);
     }
     
     .s_sessao>img:nth-child(5):hover{
        transform: scale(1.1);
         }
         .s_sessao>img:nth-child(6):hover{
            transform: scale(1.1);
             }
             .s_sessao>img:nth-child(7):hover{
                transform: scale(1.1);
                 }
.div4{
    visibility: visible;
    opacity: 1;
    width: 100px;
    height: 100px;
    border: 1px solid purple;
}
.l_esquerdo{
    position: absolute;
    left: 500px;
}
.l_direito{
    position: absolute;
    background: black;
    right: 500px;
    
}
@media screen and  (min-width: 1800px) {
    body{
        background-color: black;
        color: white;
        overflow-x: hidden;
    }
    
}

    

@keyframes cb{
    0%{
        transform: translateY(-2px);
    }
    100%{
        transform: translateY(2px);
    }
}
@keyframes rgb{
 0%{
    filter: drop-shadow(0px 0px 5px green);
    
 }
 50%{
    filter: drop-shadow(0px 0px 5px blue);
   
 }
 100%{
    filter: drop-shadow(0px 0px 5px red);
    
 }
}
@keyframes rgb_img{
    0%{
       filter: drop-shadow(0px 0px 5px green);
       border-color: green;
    }
    50%{
       filter: drop-shadow(0px 0px 5px blue);
       border-color: blue;
    }
    100%{
       filter: drop-shadow(0px 0px 5px red);
       border-color: red;
    }
   }
   @keyframes pisca{
    0%, 100%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
}
