function render(arr,list) {
   
   arr.forEach(film =>{
      
      var elItem = document.createElement("li") 
      var elInfo = document.createElement("div") 
      var elImg = document.createElement("img")
      var elBox = document.createElement("div")
      var elTitleBox = document.createElement("div")     
      var elTitle = document.createElement("h2")
      var elSvg = document.createElement("img")
      var bookmarkBtn = document.createElement("button")
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
      elSvg.setAttribute("src", "./img/bookMark.svg")
      elSvg.setAttribute("class", "cloudImg")
      elImg.setAttribute("class", "img")
      bookmarkBtn.style.cursor = "pointer"
      elSvg.dataset.filmId = film.id;
      elBox.setAttribute("class", "box")
      elTitleBox.setAttribute("class", "title-box")
      elTitle.textContent = film.title
      elTitle.setAttribute("class", "title")
      bookmarkBtn.setAttribute("class", "me-1 mt-1 starSvg")
      elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
      elDescribe.setAttribute("class", "describe")
      elSubList.setAttribute("class", "sublist")
      
      list.appendChild(elItem)
      elItem.appendChild(elInfo)
      elInfo.appendChild(elImg)
      elInfo.appendChild(elBox)
      elBox.appendChild(elTitleBox)
      bookmarkBtn.appendChild(elSvg)
      elTitleBox.appendChild(elTitle)
      elTitleBox.appendChild(bookmarkBtn)
      elBox.appendChild(elDescribe)
      elBox.appendChild(elSubList)
   })
   
}
function renderTwo(arr,list) {
   
   list.style.width = "100%"
   
   arr.forEach(film =>{
      
      var elItem = document.createElement("li") 
      var elInfo = document.createElement("div") 
      var elImg = document.createElement("img")
      var elBox = document.createElement("div")
      var elTitleBox = document.createElement("div")     
      var elTitle = document.createElement("h2")
      var elSvg = document.createElement("img")
      var bookmarkBtn = document.createElement("button")
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
      
      elItem.setAttribute("class", "item col-2")
      elInfo.setAttribute("class", "info")
      elImg.setAttribute("src", film.poster)
      elSvg.setAttribute("src", "./img/bookMark.svg")
      elSvg.setAttribute("class", "cloudImg")
      elImg.setAttribute("class", "img")
      bookmarkBtn.style.cursor = "pointer"
      elSvg.dataset.filmId = film.id;
      elBox.setAttribute("class", "box")
      elTitleBox.setAttribute("class", "title-box")
      elTitle.textContent = film.title
      elTitle.setAttribute("class", "title")
      bookmarkBtn.setAttribute("class", "me-1 mt-1 starSvg")
      elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
      elDescribe.setAttribute("class", "describe")
      elSubList.setAttribute("class", "sublist")
      
      list.appendChild(elItem)
      elItem.appendChild(elInfo)
      elInfo.appendChild(elImg)
      elInfo.appendChild(elBox)
      elBox.appendChild(elTitleBox)
      bookmarkBtn.appendChild(elSvg)
      elTitleBox.appendChild(elTitle)
      elTitleBox.appendChild(bookmarkBtn)
      elBox.appendChild(elDescribe)
      elBox.appendChild(elSubList)
   })
   
}

function renderThree(arr,list) {
   
   list.innerHTML = null
   list.style.width = "73.8%"
   
   arr.forEach(film =>{
      
      var elItem = document.createElement("li") 
      var elInfo = document.createElement("div") 
      var elImg = document.createElement("img")
      var elBox = document.createElement("div")
      var elTitleBox = document.createElement("div")     
      var elTitle = document.createElement("h2")
      var elSvg = document.createElement("img")
      var bookmarkBtn = document.createElement("button")
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
      
      elItem.setAttribute("class", "item col-4")
      elInfo.setAttribute("class", "info")
      elImg.setAttribute("src", film.poster)
      elSvg.setAttribute("src", "./img/bookMark.svg")
      elSvg.setAttribute("class", "cloudImg")
      elImg.setAttribute("class", "img")
      bookmarkBtn.style.cursor = "pointer"
      elSvg.dataset.filmId = film.id;
      elBox.setAttribute("class", "box")
      elTitleBox.setAttribute("class", "title-box")
      elTitle.textContent = film.title
      elTitle.setAttribute("class", "title")
      bookmarkBtn.setAttribute("class", "me-1 mt-1 starSvg")
      elDescribe.textContent = film.overview.split(" ").slice(0,20).join(" ") + "...";
      elDescribe.setAttribute("class", "describe")
      elSubList.setAttribute("class", "sublist")
      
      list.appendChild(elItem)
      elItem.appendChild(elInfo)
      elInfo.appendChild(elImg)
      elInfo.appendChild(elBox)
      elBox.appendChild(elTitleBox)
      bookmarkBtn.appendChild(elSvg)
      elTitleBox.appendChild(elTitle)
      elTitleBox.appendChild(bookmarkBtn)
      elBox.appendChild(elDescribe)
      elBox.appendChild(elSubList)
   })
   
}
function newRender(arr,list) {
   
   list.innerHTML = null
   list.style.width = "26.2%"
   
   arr.forEach(elem =>{
      
      var cloudElement = document.createElement("li")
      var cloudBox = document.createElement("div")
      var cloudTitle = document.createElement("h3")
      var cloudBtn = document.createElement("button")
      
      cloudBox.setAttribute("class", "cloudBox")
      cloudBtn.setAttribute("class", "btn btn-danger delete-btn")
      cloudElement.setAttribute("class", "cloudItem")
      
      cloudTitle.style.color = "#fff"
      cloudBtn.textContent = "Delete";
      cloudTitle.textContent = elem.title;
      cloudBtn.dataset.dataId = elem.id;
      
      cloudElement.appendChild(cloudBox)
      cloudBox.appendChild(cloudTitle)
      cloudBox.appendChild(cloudBtn)
      list.appendChild(cloudElement)
   })
   
}
function newRenderTwo(arr,list) {
   
   list.innerHTML = null
   list.style.width = "0%"
   
   arr.forEach(elem =>{
      
      var cloudElement = document.createElement("li")
      var cloudBox = document.createElement("div")
      var cloudTitle = document.createElement("h3")
      var cloudBtn = document.createElement("button")
      
      cloudBox.setAttribute("class", "cloudBox")
      cloudBtn.setAttribute("class", "btn btn-danger delete-btn")
      cloudElement.setAttribute("class", "cloudItem")
      
      cloudTitle.style.color = "#fff"
      cloudBtn.textContent = "Delete";
      cloudTitle.textContent = elem.title;
      cloudBtn.dataset.dataId = elem.id;
      
      cloudElement.appendChild(cloudBox)
      cloudBox.appendChild(cloudTitle)
      cloudBox.appendChild(cloudBtn)
      list.appendChild(cloudElement)
   })
   
}

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
   
}

function empty(list) {

   list.innerHTML = null

   let title = document.createElement("h2")
   let item = document.createElement("li")

   item.style.listStyle = "none"
   title.style.color = "#fff"

   title.textContent = "Your BookMark's empty... Add and watch new Movies)"

   list.appendChild(item)
   item.appendChild(title)
}