var Id = document.getElementById("Id");
var Name = document.getElementById("Name");
var Gender = document.getElementById("Gender");
var Email = document.getElementById("Email");
var mainBtn = document.getElementById("mainBtn");
var Datalist;


 async function displayPerson() {
  var res = await fetch("http://localhost:5000/persons")
  var finalRes = await res.json();
  var cartona = ``;
  for (var i = 0; i < finalRes.data.length; i++) {

    cartona += `
        <tr>
        <td>${i + 1}</td>
        <td>${finalRes.data[i].id}</td>
        <td>${finalRes.data[i].name}</td>
        <td>${finalRes.data[i].gender}</td>
        <td>${finalRes.data[i].age}</td>
        <td>${finalRes.data[i].email}</td>
        <td><button class="btn btn-warning" onclick="Update(${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="Delete(${i})">Delete</button></td>
        </tr>
          `;
  }
  document.getElementById("tableData").innerHTML = cartona;
  Datalist = finalRes.data;

}
displayPerson();

//Add Function
async function addPerson() {

  if (!Id.value,  !Name.value,  !Gender.value,  !Age.value,  !Email.value) {
    alert("Please fill in all fields");
    return;
  }
     var item = {
      id:Id.value,
     name: Name.value,
     gender: Gender.value,
     age: Age.value,
     email: Email.value,
   };
  
   var res = await fetch("http://localhost:5000/persons",{method:"POST",headers: {
    "content-type": "application/json"
  },body: JSON.stringify(item)})
   var finalRes = await res.json();

  
 }

//Update Function 
 async function Update(index) {
  let person = Datalist[index];
  

  let newName = prompt("Enter new name", person.name);
  
  let newGender = prompt("Enter new gender", person.gender);
  
  let newAge = prompt("Enter new age", person.age);
 
  let newEmail = prompt("Enter new email", person.email);




    person.name = newName
   
    person.gender = newGender
   
    person.age = newAge
    person.email = newEmail

    let res = await fetch(`http://localhost:5000/persons/${person.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(person),
    });

    let finalRes = await res.json();
    if (finalRes.success) {
      Datalist[index] = person;
      displayPerson();
    } else {
      alert(finalRes.message);
    }

}



//Delete Function
async function Delete(index) {
  let person = Datalist[index];

  let res = await fetch(`http://localhost:5000/persons/${person.id}`, {
    method: "DELETE",
  });

  let finalRes = await res.json();
  if (finalRes.success) {
    Datalist.splice(index, 1);
    displayPerson();
  } else {
    alert(finalRes.message);
  }
}

