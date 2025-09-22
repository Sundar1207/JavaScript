
document.getElementById("Form-Validate").addEventListener('submit' , function(event)
{
    event.preventDefault();
    let Uname=document.getElementById("Uname").value.trim()
    let uemail=document.getElementById("Uemail").value.trim()
    let password=document.getElementById("Upassword").value.trim()
    let confrimPassword=document.getElementById("Password").value.trim()
    
    let Nameerror = document.getElementById("UN") 
    let emailerror = document.getElementById("UE")
    let password_error = document.getElementById("UP")
    let confrimPassword_error = document.getElementById("UCP")

    let namepertern=/^[A-Za-z]+ [A-Za-z]$/
    let emailpertern=/^[a-z0-7]+@[a-z]{4,}\.[a-z]{2,}$/

    let valid=true

    if(Uname === "")
    {
        Nameerror.innerText="Enter The Value "
    }
    else if (!namepertern.test(Uname))
    {
            
        Nameerror.innerText="Enter the Full Name "
        valid=false
    }
    else if(namepertern.test(Uname))
    {
        Nameerror.innerText=""
        valid=true
    }


    if(uemail=== "")
    {
        emailerror.innerText="Enter The Value "
    }
    else if (!emailpertern.test(uemail))
    {
        emailerror.innerText="Enter Valid mail"
        valid=false
    }
    else if (emailpertern.test(uemail))
    {
        emailerror.innerText=""
        valid=true
    }


    if(password === "")
    {
        password_error.innerText="Enter The Value "
    }
    else if(password.length<3 || password_error.length>10)
    {
        password_error.innerText="Enter password 3 to 10 "
        valid=false
    }
     else if(password.length>3 || password_error.length<10)
    {
        password_error.innerText=""
        valid=true
    }


    if(confrimPassword === "")
    {
        confrimPassword_error.innerText="Enter The Value "
        valid=false
    }

    else if (confrimPassword !==password)
    {
        confrimPassword_error.innerText="*Not Match " 
        valid=false 
    }
     else if (confrimPassword===password)
    {
        confrimPassword_error.innerText="" 
        valid=true
    }

    if(valid)
    {
        alert(`Hii, ${Uname} succsess full open your acounds`)
    }
})



