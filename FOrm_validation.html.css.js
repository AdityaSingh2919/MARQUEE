<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .main{
            height: 100vh;
            width: 100%;
            background-color: bisque;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .cont{
            height: 50vh;
            width: 40vh;
            background-color: white;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            box-shadow: 2px 2px 2px 2px white;
        }
        h1{
            color: blue;
        }
        .btn{
            
           
            button{
                height: 30px;
                width: 10vh;
            color: white;
            background-color: blue;
             border-radius: 10px;
            }
        }
        #name{
            height: 20px;

        }
        #email{
            height: 20px;

        }
        #password{
            height: 20px;

        }
        #namepara{
            color: red;
        }
        #emailpara{
            color: red;
        }
        #passpara{
            color: red;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="cont">
            <h1>Form Validation</h1>

            <div class="namediv">
                <p>name</p>
                <input type="text" name="text" id="name" placeholder="Enter name">
                <p id="namepara"></p>
            </div>
            <div class="emaildiv">
                <p>email</p>
                <input type="email" id="email" placeholder="Enter email">
                <p id="emailpara"></p>
            </div>
            <div class="passdiv">
                <p>password</p>
                <input type="password" name="password" id="password" placeholder="Enter Password">
                <p id="passpara"></p>
            </div>
            
            <div class="btn">
                <button id="btn1">Register</button>
            </div>
        </div>
    </div>

    <script>
        let btn=document.querySelector("#btn1");
        let name=document.querySelector("#name");
        let nameError=document.querySelector("#namepara");

        let email=document.querySelector("#email");
        let emailError=document.querySelector("#emailpara");

        let pass=document.querySelector("#password");
        let passError=document.querySelector("#passpara");

        btn.addEventListener("click",()=>{
            let valid=true;

            if(name.value.length < 3){
                nameError.innerHTML="name must be atleast 3 character";
                valid=false;
            }
            if(!email.value.includes("@")){
                emailError.innerHTML="email must contain @"
                valid=false;
            }
            if(pass.value.length < 6){
                passError.innerHTML="must be at least 6 character";
                valid=false;
            }
                if(valid){
                    alert("Form registered successfully");
                }
            
        })
        

        
    </script>
</body>
</html>
