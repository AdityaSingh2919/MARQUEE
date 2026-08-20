<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .completed {
    text-decoration: line-through;
}
    </style>
</head>
<body>
    <input type="text" id="text" placeholder="Enter text">
    <button id="btn">Add Task</button>
    <div class="cont"></div>
     
    <script>
        let btn=document.querySelector("#btn");
        let txt=document.querySelector("#text");
        let add=document.querySelector(".cont");
        btn.addEventListener("click",()=>{
            if(txt.value==""){
                return;
            }
            let div=document.createElement("div");
            div.append(txt.value);
            
            let dlt=document.createElement("button");
            dlt.innerText="Delete";
            div.append(dlt);

            let complete=document.createElement("button");
            complete.innerHTML="Complete";
            div.append(complete);

            add.append(div);
            txt.value="";

            dlt.addEventListener("click",()=>{
                div.remove();
            })

            complete.addEventListener("click",()=>{
                div.classList.toggle("completed");
            })
            
        })
    </script>
</body>
</html>
