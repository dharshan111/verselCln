const hamburge_dark_mode = document.getElementById("hamberg-dark");
const hamburge_light_mode = document.getElementById("hamberge-image");
const navbar_listts=document.getElementById('hideen-navlists');
let isopen=false;
const navlist_box=document.getElementById('nav-list');
const replace_image=document.createElement('img');
const logo=document.getElementById('logo');
const hamberg=document.getElementById('hamburger');
const mainBtns= document.querySelector(".main-btn");



hamburge_dark_mode.addEventListener("click", () => {
    if(!isopen){
        logo.classList.add('logo-return');
        hamberg.classList.add('hamburger-return');
        navlist_box.classList.add('nav_list-visible');
        navlist_box.classList.add('nav_list-dark-mode');
        navbar_listts.classList.add('nav_list-dark-mode');
        navbar_listts.classList.add('navbar_list_visible');
        hamburge_dark_mode.src="images/close.png";

        mainBtns.style.display = "flex";

        isopen=true;
    }
    else{
        logo.classList.remove('logo-return');
        hamberg.classList.remove('hamburger-return')
        navlist_box.classList.remove('nav_list-visible');
        navlist_box.classList.remove('nav_list-dark-mode');
        navbar_listts.classList.remove('nav_list-dark-mode');
        navbar_listts.classList.remove('navbar_list_visible');
        hamburge_dark_mode.src="images/menu.png";


        mainBtns.style.display = "none";


        isopen=false;
    }

});

hamburge_light_mode.addEventListener('click',()=>{
    if(!isopen){
        logo.classList.add('logo-return');
        hamberg.classList.add('hamburger-return');
        navlist_box.classList.add('nav_list-visible');
        navbar_listts.classList.add('navbar_list_visible');
        hamburge_light_mode.src="images/close.png"

        mainBtns.style.display = "flex";

        isopen=true;
    }
    else{
        logo.classList.remove('logo-return');
        hamberg.classList.remove('hamburger-return')
        navlist_box.classList.remove('nav_list-visible')
        navbar_listts.classList.remove('navbar_list_visible');
        hamburge_light_mode.src="images/lines.png";


         mainBtns.style.display = "none";

        isopen=false;
    }
})


























const sunBtn = document.querySelector('.fa-sun');
const moonBtn = document.querySelector('.fa-moon');
const body = document.body;

const dark_hamberg=document.getElementById('hamberg-dark');
const light_hamberg=document.getElementById('hamberge-image');

sunBtn.parentElement.style.display = 'none';


moonBtn.addEventListener('click', () => {
  body.classList.add('dark-theme');
  moonBtn.parentElement.style.display = 'none';
  sunBtn.parentElement.style.display = 'inline-block';
  dark_hamberg.style.display='inline';
  light_hamberg.style.display='none';
});


sunBtn.addEventListener('click', () => {
  body.classList.remove('dark-theme');
  sunBtn.parentElement.style.display = 'none';
  moonBtn.parentElement.style.display = 'inline-block';
  light_hamberg.style.display='inline';
  dark_hamberg.style.display='none';
});

 

function Validation(event){
    event.preventDefault();


        emailValidation();
        nameValidation();
        numberValidation(); 
        countryValidation(); 
        companyValidation(); 
        companySize();
        productValidation(); 
        textBox();


    if(emailValidation() && nameValidation() && numberValidation() && countryValidation() && companyValidation() && companySize() && productValidation() && textBox()){
        form.submit();
        alert("Form submitted")
    }

    let valid = true;

}


function emailValidation() {
    const email = document.getElementById('email-inp').value.trim();
    const emailError = document.getElementById('email-error');
    let valid = true;
    if(email === ''|| !email.includes('@')){
        emailError.textContent = 'Enter your Email correctly';
        document.getElementById('email-inp').style.border = '1px solid red';
        valid = false;
    }
    
    else{
        emailError.textContent = '';
        document.getElementById('email-inp').style.border = '1px solid green';      
    }

    return valid
}


function  nameValidation() {
    const name = document.getElementById('name-inp').value.trim();
    const nameError = document.getElementById('name-error');
    let valid = true;
    if(name === '' || /\d/.test(name)){
        nameError.textContent = 'Enter your Name';
        document.getElementById('name-inp').style.border = "1px solid red";
        valid = false
    }
    else{
        nameError.textContent = '';
        document.getElementById('name-inp').style.border = "1px solid green";
    }
    return valid
}


function numberValidation() {
    const number = document.getElementById('number-inp').value;
    const numError = document.getElementById('number-error');
    let valid = true;

    if(number === ''){
        numError.textContent = 'Enter your correct number';
        document.getElementById('number-inp').style.border = '1px solid red';
        valid = false
    }
    else{
        numError.textContent = '';
        document.getElementById('number-inp').style.border =' 1px solid green';
    }
    return valid
}


function countryValidation(){
    const country = document.getElementById('country-inp');
    const countryError = document.getElementById('country-error');

    let valid = true;

    if(country.value === ''){
        countryError.textContent = 'select country';
        document.getElementById('country-inp').style.border = '1px solid red';
        valid = false;
    }
    else{
        countryError.textContent = '';
        document.getElementById('country-inp').style.border = '1px solid green';
    }
    return valid;
}





function companyValidation(){
    const company = document.getElementById('company-inp').value.trim();
    const companyError = document.getElementById('company-error');
    let valid = true;

    if(company === ''){
        companyError.textContent = 'This field is required';
        document.getElementById('company-inp').style.border = '1px solid red';   
        valid = false
    }else if(!isValid(company)){
        companyError.textContent = 'Enter a valid website';
        document.getElementById('company-inp').style.border = '1px solid red';  
        valid = false
    }else{
        companyError.textContent = '';
        document.getElementById('company-inp').style.border = '1px solid green';   
        
    }
    return valid
}

function isValid(str){
    try {
        const url = new URL(str)
        return url.protocol === 'http:' || url.protocol === 'https:'; 
    } catch (error) {
        return false;
    }
}




function companySize() {
    const companySize = document.getElementById('company-size');
    const companySizeError = document.getElementById('company-sizeError');

    let valid = true;

    if(companySize.value === ''){
        companySizeError.textContent = 'select company size';
        document.getElementById('company-size').style.border = '1px solid red';
        valid = false
    }
    else{
        companySizeError.textContent = '';
        document.getElementById('company-size').style.border = '1px solid green';
    }
    return valid;
    
}

function productValidation(){
    const product = document.getElementById('product-inp');
    const productError = document.getElementById('product-error');

    let valid = true;

    if(product.value === ''){
        productError.textContent = 'select product';
        document.getElementById('product-inp').style.border = '1px solid red';
        valid = false
    }
    else{
        productError.textContent = '';
        document.getElementById('product-inp').style.border = '1px solid green';
    }
    return valid;
}


function textBox(){
    const textArea = document.getElementById('text-inp').value.trim();
    const textError = document.getElementById('text-error');

    let valid = true;

    if(textArea === '' || textArea.split(' ').length < 30){
        textError.textContent = 'Atleast 30 words';
        document.getElementById('text-inp').style.border = '1px solid red';
        valid = false;
    }
    else{
        textError.textContent = '';
        document.getElementById('text-inp').style.border = '1px solid green';
    }
    return valid
} 




const form = document.getElementById('form');
form.addEventListener("submit", Validation)

document.getElementById('email-inp').addEventListener('input', emailValidation)
document.getElementById('name-inp').addEventListener('input', nameValidation)
document.getElementById('number-inp').addEventListener('input', numberValidation)
document.getElementById('country-inp').addEventListener('input', countryValidation)
document.getElementById('company-inp').addEventListener('input', companyValidation)
document.getElementById('company-size').addEventListener('input', companySize)
document.getElementById('product-inp').addEventListener('input', productValidation)
document.getElementById('text-inp').addEventListener('input', textBox)
