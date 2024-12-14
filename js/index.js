const bookmarkName = document.getElementById("bMname");
const bookmarkUrl = document.getElementById("bMurl");
const tableBody = document.getElementById("tbody");
if(localStorage.getItem("sites")===null){
      sites = []
}
else{
      sites = JSON.parse(localStorage.getItem("sites"));
}
displayData();
function checkName(){
      const regex = /^[A-Za-z_]{3,}$/;
      if(regex.test(bookmarkName.value) ){
            bookmarkName.classList.remove("is-invalid");
            bookmarkName.classList.add("is-valid");
      }
      else{
            bookmarkName.classList.add("is-invalid");
            bookmarkName.classList.remove("is-valid");
      }

}
function checkUrl(){
      const regex = /^www\.[A-za-z]{3,}\.com$/;
      if(regex.test(bookmarkUrl.value)&& bookmarkUrl.value!==null){
            bookmarkUrl.classList.remove("is-invalid");
            bookmarkUrl.classList.add("is-valid");
      }
      else{
            bookmarkUrl.classList.add("is-invalid");
            bookmarkUrl.classList.remove("is-valid");
      }

}
function clearForm(){
      bookmarkName.value = "";
      bookmarkName.classList.remove("is-valid");
      bookmarkUrl.value="";
      bookmarkUrl.classList.remove("is-valid");
}
function submit(){
      if(bookmarkName.value!=="" && bookmarkUrl.value!=="" && bookmarkName.classList.contains("is-valid") && bookmarkUrl.classList.contains("is-valid")){
sites.push({name:bookmarkName.value,url:bookmarkUrl.value})
localStorage.setItem("sites",JSON.stringify(sites));
displayData();
 clearForm();
}
}
function displayData(){
      if(localStorage.getItem("sites")!=null){
      let displaySites = JSON.parse(localStorage.getItem("sites"));
      let content="";
      for (let i=0;i<displaySites.length;i++){
            content+= `<tr>
              <td class="text-center">${i+1}</td>   
             <td class="text-center">${displaySites[i].name}</td>
             <td class="text-center"> <a href="https://${displaySites[i].url}"><button class="visit rounded-2 py-2 px-3"><i class="fa-solid fa-eye"></i> visit</button></a></td>
             <td class="text-center"><button onclick="deleteI(${i})" class="my-delete rounded-2 py-2 px-3"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
     
           <tr>`
     }
     tableBody.innerHTML = content;
      }

}
function deleteI(i){
sites.splice(i,1);
localStorage.setItem("sites",JSON.stringify(sites));
displayData();

}