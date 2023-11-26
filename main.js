const displayData=(data)=>{
    result.value +=data
}

const reset=()=>{
    result.value=""
}

const output=()=>{
    if(result.value !=0){
        try{
            result.value = eval(result.value)
        }
        catch{
            result.value = "ERROR!!!!!!"
        }
    }
}

const removeLast = ()=>{
    result.value= result.value.slice(0,-1)
}