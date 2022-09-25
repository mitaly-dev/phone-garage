
//display or none progress
const progress=(isProress)=>{
    let elements=document.getElementById('progress')
    if(isProress==true){
        elements.classList.remove('hidden')
    }
    else{
        elements.classList.add('hidden')
    }
}

//display or hidden all phone
const displayAllPhone=(display)=>{
    let phoneContainer=document.getElementById('phone-container')
   if(display==true){
     phoneContainer.classList.remove('hidden')
   }
   else{
    phoneContainer.classList.add('hidden')
   }

}

//search phone
const search=(num)=>{
    allBtn(false)
    progress(true)
    displayAllPhone(false)
    let inputElement=document.getElementById('search-field')
    let inputValue=inputElement.value
    if(inputValue==''){
       alert('Please provide us a phone name')
        progress(false)
        displayAllPhone(true)
    }
    else{
        getPhoneData(inputValue,num)
    }
    
}

//show all btn
const allBtn=(show)=>{
    let elements=document.getElementById('all-btn')
    if(show==true){
        elements.classList.remove('hidden')
    }
    else{
        elements.classList.add('hidden')
    }
}
    