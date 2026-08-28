<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="cont">
    <p id="para">0</p>
    <button id="btn">increase</button>
    <button id="btn1">decrease</button>
    <button id="btn2">reset</button>
   </div> 
   <script>
    let btn=document.querySelector("#btn");
    let btn1=document.querySelector("#btn1");
    let btn2=document.querySelector("#btn2");
    let para=document.querySelector("#para");

    let count=0;
    btn.addEventListener("click",()=>{
        count++;
        para.innerHTML=count;
    })
    btn1.addEventListener("click",()=>{
        if(count>0){
        count--;
        para.innerHTML=count;
        }
    })
    btn2.addEventListener("click",()=>{
        count=0;
        para.innerHTML=count;
    })
   </script>
</body>
</html> 
