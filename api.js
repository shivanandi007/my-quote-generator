var url="https://quotes.rest/qod?language=en";
fetch(url)
.then(response=>{
return response.json();
})
.then(data =>{
    console.log(data);
    this.data=data;
displayquote();
})


 function displayquote(data)
 {
    let index = Math.floor(Math.random()*data.length);
    let quote = data[index].text;
 }
 function giveadvice(){
     displayquote();
 }

