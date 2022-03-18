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