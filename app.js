var gender = ""
var ids = []
var currentID = 0
var name = ""
var kingdom=""
var animal = ""
var animalName = ""
var button = document.querySelector(".btn-info")


function getGender(value,id){
  nextID(id)
  gender = value
  if(gender=="boy"){
    document.querySelector(".hidden2-1").classList.remove('hidden');
    id = 2
  }
  else{
    document.querySelector(".hidden2-2").classList.remove('hidden');
    id = 3
  }
  ids.push(id)
  currentID = id
}

function getName(value,id){
  nextID(id)
  name = value
  document.querySelector(".hidden3-1").classList.remove('hidden');
  id =  4
  ids.push(id)
  currentID = id
  console.log(ids)

}

function getKingdom(value,id){
  nextID(id)
  kingdom = value
  if(gender=="boy"){
    document.querySelector(".hidden4-1").classList.remove('hidden');
    id = 5
  }
  else{
    document.querySelector(".hidden4-2").classList.remove('hidden');
    id=6
  }
  ids.push(id)
  currentID = id
  console.log(ids)

  if(kingdom=="Alicant"){
    document.querySelector(".hidden5-1").classList.remove('hidden');
    id=7
  }
  else if(kingdom=="Gardor"){
    document.querySelector(".hidden5-2").classList.remove('hidden');
    id=8
  }
  else{
    document.querySelector(".hidden5-3").classList.remove('hidden');
    id=9
  }
  ids.push(id)
  currentID = id
  console.log(ids)

  if(gender=="boy"){
    document.querySelector(".hidden6-1").classList.remove('hidden');
    id = 10
  }
  else{
    document.querySelector(".hidden6-2").classList.remove('hidden');
    id=11
  }
  ids.push(id)
  currentID = id
  console.log(ids)

  document.querySelector(".hidden7-1").classList.remove('hidden');
  id=12
  ids.push(id)
  currentID = id
  console.log(ids)

}

function getAnimal(value,id){
  nextID(id)
  animal = value
  document.querySelector(".hidden8-1").classList.remove('hidden');
  id=13
  ids.push(id)
  currentID = id
  console.log(ids)
}

function getAnimalName(value,id){
  nextID(id)
  animalName = value
  id=14
  document.querySelector(".buttonCreate").classList.remove('hidden');
  ids.push(id)
  currentID = id
  console.log(ids)
}


function nextID(id){
  if (id < currentID){
    console.log(ids)
    ids.forEach(element => document.getElementById(element).parentElement.classList.add('hidden'));
  }
  console.log(ids);
}

button.addEventListener("click",function(){
  var story
  if(gender=="boy"){
    story = '<p><h1>Once upon a time, in a land far far away, a little boy named '+name+' lived in the kingdom of '+kingdom+
    '. He was the prince, heir to the throne of '+kingdom+'. And he was always followed by his faithful '+animal+' named '+animalName+'.</h1></p>'
  }else{
    story = '<p><h1>Once upon a time, in a land far far away, a little girl named '+name+' lived in the kingdom of '+kingdom+
    '. She was the princess, heiress to the throne of '+kingdom+'. And she was always followed by her faithful '+animal+' named '+animalName+'.</h1></p>'
  }

  info = {
    "gender" : gender,
    "animal" : animal
  }

  console.log(story);
  localStorage.setItem("story",story);
  localStorage.setItem("info",JSON.stringify(info))

  window.location.href = "create.html"

})
