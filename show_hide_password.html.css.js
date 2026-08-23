<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <input type="password" id="pass" placeholder="Enter Password">
    <button id="show">Show</button>

    <script>
        let pass=document.querySelector("#pass");
        let show=document.querySelector("#show");
        passin=false;
        show.addEventListener("click",()=>{
            // document.body.classList.toggle("type");
            if(passin==false){
            pass.type="text";
            passin=true;
            }
            else{
                pass.type="password";
                passin=false;
            }
        })

    </script>
</body>
</html>
