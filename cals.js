let input=document.querySelector("input")

function addval(element)
{
    input.value+=element;
}

function Deleteval(de)
{
    input.value=input.value.slice(0,input.value.length-1)
}
function Clearval(cl)
{
    input.value=""
}

function Evalvate(val)
{
    input.value=eval(input.value)
}