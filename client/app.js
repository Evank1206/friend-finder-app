$(document).ready(() => {


  $("#submit").on("click", (e)=>{
    e.preventDefault();
    let user =  $("#user").val();
    let city =  $("#city").val();
    let check = $("#check").val();

  axios.post('/api/signUp', {
    userName: user,
    city: city,
    likeAnimals: check
  }).then(function (response) {

    let list = document.getElementById('list');
    let li = document.createElement('li');

    for(var match of response.data.matches){
      var newLi = li.cloneNode(li);
      newLi.innerText = match.userName;
      list.appendChild(newLi);
    }

    // console.log(response.data);
    // let pElement = document.createElement("p");
    // pElement.append(response);
    // response.data.matches.forEach(match => {
    //   $("#some").append(match.userName);

      // }); 
    });
  });
});