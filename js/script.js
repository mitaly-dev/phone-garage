const getPhoneData=async(name,sliceNum)=>{
    let res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${name}`)
    let data=await res.json()
    displayPhone(data.data,sliceNum)
   
}
getPhoneData('samsung')

//display all phone 
const displayPhone=(data,sliceNum)=>{
    displayAllPhone(true)
    if(data.length==0){
        document.getElementById('not-found').innerText='sorry not found,Please search again'
    }
    else{
        document.getElementById('not-found').innerText=''
    }
    let ul= document.getElementById('phone-list')
    ul.textContent='' 

    let phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent=''

    if(data.length>10 && sliceNum){
        data=data.slice(0,sliceNum)
        allBtn(true)
    }
    else{
        allBtn(false)
    }

    data.forEach(phone=>{
        let {phone_name,image,slug}=phone
        //aside phone name
        let li=document.createElement('li')
        li.innerText=`${phone_name}`
        ul.appendChild(li)
        li.classList.add('py-2','border-b')
        
        let div=document.createElement('div')
        div.classList.add('card', 'card-compact', 'w-full', 'bg-base-100', 'shadow-xl','py-5','border','shawdow-sm')
        div.innerHTML=`
            <figure class='p-4'><img src="${image}" alt="Shoes" /></figure>
            <div class="card-body px-5">
                <h2 class="card-title font-semibold text-2xl">${phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p class="text-xl font-bold py-2">Price : $<span>1200</span></p>
                <div class="card-actions items-center grid grid-cols-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="orange"
                    stroke-width="2"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                     />
                </svg>
                
                <label onclick="modal('${slug}')" for="my-modal-3" class="btn modal-button p-2 py-3 text-white text-[15px] rounded-lg outline-none bg-green-900"">Details</label>
                
                </div>
            </div>
        `
        phoneContainer.appendChild(div)
    })
    progress(false)
}



// search event 
document.getElementById('search-btn').addEventListener('click',function(){
   search(9)
})

document.getElementById('search-field').addEventListener('keydown',function(event){
if(event.key=='Enter'){
    search(9)
}
})
//all btn
document.getElementById('all-btn').addEventListener('click',function(){
    search()
})

//modal button event
const modal=async (slug)=>{
    let res=await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    let data=await res.json()
    data=data.data
    let {name,brand,image,mainFeatures,releaseDate}=data

const phoneDetails=()=>{
    let sum=''
    for(let feature in mainFeatures){
          sum=sum+ `<h3 class="font-semibold">${feature} : </h3> ${mainFeatures[feature]}`
    }
    return sum;
}   
    let modalBody=document.getElementById('moday-body')
    modalBody.innerHTML=`
           <div class='grid grid-cols-3 gap-5'>
           <div class="col-span-1">
           <img src="${image}" alt="Shoes" />
           </div>
            <div class='col-span-2'>
            <h3><span  class="font-semibold"> Name : </span  class="font-semibold">${name}</h3>
            <h3><span  class="font-semibold"> Brand : </span>${brand?brand:"N/A"}</h3>
            <h3><span  class="font-semibold"> Release Date : </span>${releaseDate?releaseDate:"N/A"}</h3>
             <h3><span  class="font-semibold"></span>${mainFeatures? phoneDetails():'N/A'}</h3>
             
            
           </div>
           </div>
    `
}
