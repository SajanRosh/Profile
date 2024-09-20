let fullName = document.getElementById('name');
let userGender = document.getElementById('gender');
let dobirth = document.getElementById('dob');
let ages = document.getElementById('age');
let emailId = document.getElementById('email');
let address = document.getElementById('address');
let phoneNumber = document.getElementById('phoneNumber');
let cellPhone = document.getElementById('cellPhone');
let userName = document.getElementById('userName');
let passWord = document.getElementById('password');
let img = document.getElementById('picture');

async function fetchUserDetails() {
    let fetchData = await fetch('https://randomuser.me/api');
    let responseData = await fetchData.json();
    let details = responseData.results;
    console.log(details);

    fullName.innerText= details[0].name.first + " " + details[0].name.last;
    let genderFirstLetter = details[0].gender;    
    if(genderFirstLetter == 'male'){
        genderFirstLetter = 'Male'
    }else{
        genderFirstLetter = 'Female'
    }
    userGender.innerText = genderFirstLetter
    ages.innerText = details[0].dob.age;
    emailId.innerText = details[0].email;
    phoneNumber.innerText = details[0].phone;
    cellPhone.innerText = details[0].cell;
    img.src = details[0].picture.large;
    userName.innerText = details[0].login.username;
    passWord.innerText = details[0].login.password;
    address.innerHTML = details[0].location.street.number + " " + details[0].location.street.name + " Street" + ", " + '</br>'+ details[0].location.city + ", " + details[0].location.state + ", " + '</br>'+ details[0].location.country + ", " + details[0].location.postcode;

    const date = new Date(details[0].dob.date)
    dobirth.innerText = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
}
fetchUserDetails();