function init() {
    
    eventsListeners();
    bulidCountryDropDown();
    
}
function getAllControls(){
    
    var controls = {};
    controls.firstName = document.getElementById("txtFirstName");
    controls.lastName = document.getElementById("txtLastName");
    controls.password = document.getElementById("txtPassword");
    controls.age = document.getElementById("txtAge");
    controls.gender=document.getElementsByName("gender");
    controls.country =document.getElementById("ddlCountry");
    controls.state =document.getElementById("ddlState");
    controls.city =document.getElementById("ddlCity");
   // controls.register = document.getElementById("btnRegister");
    return controls;
}
function registerUser(){
    
 var userDetails = {};
 var controls = getAllControls();
    
userDetails.firstName = controls.firstName.value;
userDetails.lastName = controls.lastName.value;
userDetails.password = controls.password.value;
userDetails.age = controls.age.value;
userDetails.gender = getGender(controls.gender);    
userDetails.country = controls.country.value;    
userDetails.state = controls.state.value;
userDetails.city = controls.city.value;    
    
    console.log(userDetails);    
    
}
function getGender(genderList){

    for(var i=0;i<genderList.length;i++){
        
        if(genderList[i].checked){
            
           return genderList[i].value;
        }
    }
}

function bulidCountryDropDown(){

    var countryList = getCountryList();
    var ddlCountry = getAllControls().country;
    for (var i = 0; i < countryList.length; i++) {
        createOptionTag(countryList[i], ddlCountry);
    }
}
function createOptionTag(data,ctrl){
    
    var optionTag = document.createElement("option");
    optionTag.value = data.code;
    optionTag.textContent = data.name;
    ctrl.appendChild(optionTag);
}
function buildStateDropDown(){
    
    var  stateList =  getStateList();
    var ddlState = getAllControls().state;
    for(var i=0; i<stateList.length;i++){
        
        createStateOptionTag(stateList[i],ddlState); 
    }    
}
function createStateOptionTag(stateData, stateCtrl){
    
    var optionStateTag = document.createElement("option");    
    optionStateTag.value=stateData.countryCode; 
    optionStateTag.value = stateData.code;
    optionStateTag.textContent = stateData.name;
    
    if(stateVal != stateData.countryCode){    
        stateCtrl.remove(optionStateTag);    
    }
    if(stateVal == stateData.countryCode){    
        stateCtrl.appendChild(optionStateTag);    
    }
}
function buildCityDropDown(){
    
    var  cityList =  getCityList();
    var ddlCity = getAllControls().city;
    for(var i=0; i<cityList.length;i++){
        
        createCityOptionTag(cityList[i],ddlCity); 
    }    
}
function createCityOptionTag(cityData, cityCtrl){
    
    var optionCityTag = document.createElement("option");    
    optionCityTag.value=cityData.stateCode; 
    optionCityTag.value = cityData.code;
    optionCityTag.textContent = cityData.name;
    
    if(cityVal != cityData.stateCode){
        cityCtrl.remove(optionCityTag);    
    }
    if(cityVal == cityData.stateCode){
        cityCtrl.appendChild(optionCityTag);    
    }
}
function eventsListeners(){
    var controls = getAllControls();
    controls.country.addEventListener("change", loadState); 
    controls.state.addEventListener("change", loadCity); 
    controls.firstName.addEventListener("keypress",alphaBatsOnly);
    controls.lastName.addEventListener("keypress",alphaBatsOnly);
    controls.age.addEventListener("keypress",numbersOnly);   
}
var stateVal;
var cityVal;
function loadState(){
    stateVal = this.value;
    buildStateDropDown();
}
function loadCity(){
    
    cityVal = this.value;
    buildCityDropDown();   
}
init();