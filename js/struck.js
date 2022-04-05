var elFform = document.querySelector(".search-form")
var elInput = document.querySelector(".input")
var elSform = document.querySelector(".select-form")
var elList = document.querySelector(".list")
var elSelect = document.querySelector(".select")
var cloudList = document.querySelector(".cloud")

var newBookmark = []

render(films,elList)

elList.addEventListener("click", evt =>{
   
   const cloudButton = evt.target.matches(".cloudImg")
   
   if(cloudButton){
      
      let btnId = evt.target.dataset.filmId;
      
      let findBtn = films.find(fl => fl.id == btnId)
      
      if(!newBookmark.includes(findBtn)){
         newBookmark.push(findBtn);
      }
      else{
         newBookmark.splice(findBtn, 1)
         // console.log(newBookmark.splice(btnId, 1))
         // console.log(newBookmark.splice(findBtn, 1))
      }
      if(newBookmark.length == 0){
         empty(cloudList)
      }
      
      newRender(newBookmark,cloudList)
      // renderThree(films,elList)

      // elList.innerHTML = null
      elInput.value = null
      
      const filtred = films.filter(film => film.genres.includes(elSelect.value))
      const secondFiltred = films.filter(film => elSelect.value == "all")
      
      renderThree(filtred,elList)
      renderThree(secondFiltred,elList)
      
   }
   
})

cloudList.addEventListener("click", evt => {
   if(evt.target.matches(".delete-btn")){
      
      let btnIdTwo = evt.target.dataset.dataId;
      
      console.log(newBookmark)
      
      console.log(btnIdTwo)
      
      let findArr = newBookmark.findIndex(fl => fl.id == btnIdTwo);
      
      newBookmark.splice(findArr, 1); 
      
      newRender(newBookmark,cloudList)
      
   }
   
   if(newBookmark.length == 0){
      empty(cloudList)
   }
   
})

renderGenes(films)

elSform.addEventListener("submit", function(evt){
   
   evt.preventDefault()
   
   elList.innerHTML = null
   elInput.value = null
   
   const filtred = films.filter(film => film.genres.includes(elSelect.value))
   const secondFiltred = films.filter(film => elSelect.value == "all")
   
   render(filtred,elList)
   render(secondFiltred,elList)
   
})




elFform.addEventListener("submit", function(evt){
   
   evt.preventDefault()
   
   let filtred = films.filter(film => {
      
      if (film.title.includes(elInput.value)) {
         elList.innerHTML = null
      }
      
   })
   
   render(filtred, elList)
   
   if(elInput.value == null || (elInput.value).trim() == ""){
      elList.innerHTML = null
      var empty = document.createElement("h2")
      empty.textContent = "Нou didn't enter anything in the search bar"
      empty.style.color = "#FFF"
      elList.appendChild(empty)
   }
   
})