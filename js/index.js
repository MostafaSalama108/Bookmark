
var inputWebsiteName = document.getElementById("inputWebsiteName")
var inputWebsiteUrl = document.getElementById("inputWebsiteUrl")
// var button = document.getElementById("btn")

var siteList ;


if(localStorage.getItem("sites") == null){
    siteList = []
}
else{
    siteList   =    JSON.parse(localStorage.getItem("sites"))
    display()
 }







function submit(){

if(inputWebsiteName.classList.contains("is-valid") && inputWebsiteUrl.classList.contains("is-valid") ){

    var site = {

        WebsiteName: inputWebsiteName.value,
        WebsiteUrl: inputWebsiteUrl.value,
    }

    siteList.push(site)
    localStorage.setItem("sites" , JSON.stringify(siteList)  )
    display()
    clear()
}

else{
    alert("Site Name or Url is not valid,")
}




   
    
}


function display(){
    var cartona = "";

    for( var i = 0 ; i < siteList.length ; i++ ){
        cartona += `<hr>
                <div class="col-3 text-center fw-bold">
                    
                    <div class="info-footer">
                        <p> ${i +1}</p>
                    </div>
                </div>
                <div class="col-3 text-center fw-bold">
                    <div class="info-footer">
                        <p> ${siteList[i].WebsiteName} </p>
                    </div>
                </div>
                <div class="col-3 text-center fw-bold">
                    <div class="info-footer">
                       <a href = "${siteList[i].WebsiteUrl}" target = "_blank"><button " class="  bt1 border-0 mb-2 text-white rounded-1 px-2 py-1"> <i class="fa-solid fa-eye"></i> Visit</button></a> 
                    </div>
                </div>
                <div class="col-3 text-center fw-bold">
                    <div class="  info-footer">
                        <button onclick = "deleteSite(${i})"  class=" bt2 border-0 text-white rounded-1 "> <i class="fa-solid fa-trash-can"></i> Delete</button>
                    </div>
                </div>`
    }
       document.getElementById("myRow").innerHTML = cartona
}



function deleteSite(deleteIndex){
    siteList.splice(deleteIndex , 1)
    display()
    localStorage.setItem("sites" , JSON.stringify(siteList)  )
    
   
    
}


function validateSite(element){
    // console.log(element.id , element.value);
var regex = {

    inputWebsiteName :/^[a-zA-Z]{3,12}[0-9]{0,4}$/,
    inputWebsiteUrl : /^http:\/\/[A-Za-z0-9]{3,10}\.(com|net)$/,

}

 

if(regex[element.id].test(element.value) == true){
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")

    element.nextElementSibling.classList.add("d-none")
    
}
else{
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")

    element.nextElementSibling.classList.remove("d-none")

}

}



function clear(){
    inputWebsiteName.value = null
    inputWebsiteUrl.value = null

    inputWebsiteName.classList.remove("is-valid")
    inputWebsiteUrl.classList.remove("is-valid")

}









// var hambozo = "http://googel.com"


// console.log(regex.test(hambozo));
