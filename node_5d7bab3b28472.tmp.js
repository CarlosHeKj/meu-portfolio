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
    
    animation: rgb_img 2s infinite linear;
  
}
.p_sessao>h2{
    position: absolute;
    font-size: 80px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rgb_img 2s infinite linear;
}
.p_sessao>img{
    position: absolute;
    bottom: 0;
    right: 20px; 
    height: 600px;
   filter: drop-shadow(0px 0px 1px purple);
   
}

.s_sessao>img{
    height: 250px;
    border: 5px solid ;
    border-radius: 50%;
    animation: rgb_img 2s infinite linear;
}

.s_sessao>img:nth-child(4){
   top: 10%;
}
.div1{
    position: relative;
    border-bottom: 5px solid purple;
    width: 500px;
    height: 100px;
    bottom: 150px;
    left: 15;
    border-left: 5px solid purple;
    border-radius: 5px 5px 0 0;
}
.div2{
    position: relative;
    
    width: 500px;
    height: 100px;
    border-bottom: 5px solid purple;
    border-right: 5px solid purple;

}
.s_sessao>img:nth-child(5){
    top: 25%;
}
.s_sessao>img:nth-child(6){
    top: 55%;
}
.s_sessao>img:nth-child(7){
   top: 65%;
}
.l_esquerdo{
    position: absolute;
    left: 500px;
}
.l_direito{
    position: absolute;
    right: 500px;
}
@media screen and  (min-width: 1800px) {
    body{
        background-color: black;
        color: white;
        overflow-x: hidden;
    }
}
@keyframes rgb{
 0%{
    filter: drop-shadow(10px -4px 5px green);
    
 }
 50%{
    filter: drop-shadow(10px -4px 5px blue);
   
 }
 100%{
    filter: drop-shadow(10px -4px 5px red);
    
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
