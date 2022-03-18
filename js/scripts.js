var elFform = document.querySelector(".search-form")
var elInput = document.querySelector(".input")
var elSform = document.querySelector(".select-form")
var elList = document.querySelector(".list")
var elSelect = document.querySelector(".select")


function renderGenes(arr){
   
   var renderGeners = [];
   
   arr.forEach((film) => {
      
      film.genres.forEach(genre => {
         if(!renderGeners.includes(genre)){
            renderGeners.push(genre)
         }
      })
      
   })
   
   renderGeners.forEach(optionGenres =>{
      
      var elOption = document.createElement("option")
      
      elOption.textContent = optionGenres
      elOption.setAttribute("value", optionGenres)
      
      elSelect.appendChild(elOption)
      
   })
   
   
   console.log(renderGeners);
   
}
renderGenes(films)



films.forEach(film =>{
   
   var elItem = document.createElement("li") 
   var elInfo = document.createElement("div") 
   var elImg = document.createElement("img")
   var elBox = document.createElement("div")
   var elTitle = document.createElement("h2")
   var elDescribe = document.createElement("p")
   var elSubList = document.createElement("ul")
   
   
   film.genres.forEach(genre =>{
      
      var elSubItem = document.createElement("li")
      var elSubNames = document.createElement("p")
      
      
      elSubItem.setAttribute("class", "subitem")
      elSubNames.textContent = genre
      elSubNames.setAttribute("class", "genres")
      
      
      elSubList.appendChild(elSubItem)
      elSubItem.appendChild(elSubNames)
   })
   
   
   elItem.setAttribute("class", "item col-3")
   elInfo.setAttribute("class", "info")
   elImg.setAttribute("src", film.poster)
   elImg.setAttribute("class", "img")
   elBox.setAttribute("class", "box")
   elTitle.textContent = film.title
   elTitle.setAttribute("class", "title")
   elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
   elDescribe.setAttribute("class", "describe")
   elSubList.setAttribute("class", "sublist")
   
   
   
   elList.appendChild(elItem)
   elItem.appendChild(elInfo)
   elInfo.appendChild(elImg)
   elInfo.appendChild(elBox)
   elBox.appendChild(elTitle)
   elBox.appendChild(elDescribe)
   elBox.appendChild(elSubList)
})


elSform.addEventListener("submit", function(evt){
   
   evt.preventDefault()
   
   elList.innerHTML = null
   elInput.value = null
   
   films.filter(film => {
      
      if(film.genres.includes(elSelect.value)){
         
         var elItem = document.createElement("li") 
         var elInfo = document.createElement("div") 
         var elImg = document.createElement("img")
         var elBox = document.createElement("div")
         var elTitle = document.createElement("h2")
         var elDescribe = document.createElement("p")
         var elSubList = document.createElement("ul")
         
         
         film.genres.forEach(genre =>{
            
            var elSubItem = document.createElement("li")
            var elSubNames = document.createElement("p")
            
            
            elSubItem.setAttribute("class", "subitem")
            elSubNames.textContent = genre
            elSubNames.setAttribute("class", "genres")
            
            
            elSubList.appendChild(elSubItem)
            elSubItem.appendChild(elSubNames)
         })
         
         
         elItem.setAttribute("class", "item col-3")
         elInfo.setAttribute("class", "info")
         elImg.setAttribute("src", film.poster)
         elImg.setAttribute("class", "img")
         elBox.setAttribute("class", "box")
         elTitle.textContent = film.title
         elTitle.setAttribute("class", "title")
         elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
         elDescribe.setAttribute("class", "describe")
         elSubList.setAttribute("class", "sublist")
         
         
         
         elList.appendChild(elItem)
         elItem.appendChild(elInfo)
         elInfo.appendChild(elImg)
         elInfo.appendChild(elBox)
         elBox.appendChild(elTitle)
         elBox.appendChild(elDescribe)
         elBox.appendChild(elSubList)
      }
      if (elSelect.value == "all") {
         
         elList.innerHTML = null
         
         films.forEach(film =>{
            
            var elItem = document.createElement("li") 
            var elInfo = document.createElement("div") 
            var elImg = document.createElement("img")
            var elBox = document.createElement("div")
            var elTitle = document.createElement("h2")
            var elDescribe = document.createElement("p")
            var elSubList = document.createElement("ul")
            
            
            film.genres.forEach(genre =>{
               
               var elSubItem = document.createElement("li")
               var elSubNames = document.createElement("p")
               
               
               elSubItem.setAttribute("class", "subitem")
               elSubNames.textContent = genre
               elSubNames.setAttribute("class", "genres")
               
               
               elSubList.appendChild(elSubItem)
               elSubItem.appendChild(elSubNames)
            })
            
            
            elItem.setAttribute("class", "item col-3")
            elInfo.setAttribute("class", "info")
            elImg.setAttribute("src", film.poster)
            elImg.setAttribute("class", "img")
            elBox.setAttribute("class", "box")
            elTitle.textContent = film.title
            elTitle.setAttribute("class", "title")
            elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
            elDescribe.setAttribute("class", "describe")
            elSubList.setAttribute("class", "sublist")
            
            
            
            elList.appendChild(elItem)
            elItem.appendChild(elInfo)
            elInfo.appendChild(elImg)
            elInfo.appendChild(elBox)
            elBox.appendChild(elTitle)
            elBox.appendChild(elDescribe)
            elBox.appendChild(elSubList)
         })
      }
      
   })
   
   
})




elFform.addEventListener("submit", function(evt){
   
   evt.preventDefault()
   
   films.filter(film => {
      
      if (film.title.includes(elInput.value)) {
         
         elList.innerHTML = null
         
         var elItem = document.createElement("li") 
         var elInfo = document.createElement("div") 
         var elImg = document.createElement("img")
         var elBox = document.createElement("div")
         var elTitle = document.createElement("h2")
         var elDescribe = document.createElement("p")
         var elSubList = document.createElement("ul")
         
         
         film.genres.forEach(genre =>{
            
            var elSubItem = document.createElement("li")
            var elSubNames = document.createElement("p")
            
            
            elSubItem.setAttribute("class", "subitem")
            elSubNames.textContent = genre
            elSubNames.setAttribute("class", "genres")
            
            
            elSubList.appendChild(elSubItem)
            elSubItem.appendChild(elSubNames)
         })
         
         
         elItem.setAttribute("class", "item col-3")
         elInfo.setAttribute("class", "info")
         elImg.setAttribute("src", film.poster)
         elImg.setAttribute("class", "img")
         elBox.setAttribute("class", "box")
         elTitle.textContent = film.title
         elTitle.setAttribute("class", "title")
         elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
         elDescribe.setAttribute("class", "describe")
         elSubList.setAttribute("class", "sublist")
         
         
         
         elList.appendChild(elItem)
         elItem.appendChild(elInfo)
         elInfo.appendChild(elImg)
         elInfo.appendChild(elBox)
         elBox.appendChild(elTitle)
         elBox.appendChild(elDescribe)
         elBox.appendChild(elSubList)
         
      }
      
   })
   
   if(elInput.value == null || (elInput.value).trim() == ""){
      elList.innerHTML = null
      var empty = document.createElement("h2")
      empty.textContent = "Нou didn't enter anything in the search bar"
      empty.style.color = "#FFF"
      elList.appendChild(empty)
   }
   
})