/*
$('#cat').click(function(e){
    count++;
    console.log(count);
    $('#counter').append(count);
})
var elem2 = document.getElementById('cat2');
var count2=0;
var counter2= document.getElementById('counter');
elem2.addEventListener('click', function(){
    count2++;
    counter2.innerHTML=count2;
}, false);
*/
console.log("hello");
var catList={
  "catiteam":[
  {
    "name":"CAT 1",
    "img":"resource/cat.jpg",
    "count":0},
  {
    "name":"CAT 2",
    "img":"resource/cat2.jpg",
    "count":0},
  {
    "name":"CAT 3",
    "img":"resource/cat3.jpg",
    "count":0}
  ]};
for(var i in catList.catiteam)
{
  //var lis = document.getElementById('list');
  var lisIteam = document.createElement('li');
  lisIteam.textContent= catList.catiteam[i].name;
  console.log(lisIteam);
  console.log(catList.catiteam[i].name);
  document.getElementById('list').append(lisIteam);
  //var temp=document.getElementById('list');
  //temp.append(lisIteam);
  /*
  var nam = document.getElementById('name');
  nam.innerHTML=catlist.catiteam[i].name;
  var elem = document.getElementById('cat');
  elem.innerHTML="<img src=catlist.catiteam[i].img>";
  var counter= document.getElementById('counter');
  var count=0;

  elem.addEventListener('click', function(){
      count++;
      counter.innerHTML=count;
  }, false);
  */
}
