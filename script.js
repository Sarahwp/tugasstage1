// PAGE 1
// data indonesia
let getKasusCovidInd = async () => {
    let API = await fetch ('https://covid19.mathdro.id/api/countries/Indonesia');
    let option =  await API.json();
    return option;
}

getKasusCovidInd().then(kasusCovid =>
    {let summaryData = kasusCovid;
    document.getElementById("confirmedind").innerHTML = `${summaryData.confirmed.value}`
    document.getElementById("recoveredind").innerHTML = `${summaryData.recovered.value}`
    document.getElementById("deathsind").innerHTML=`${summaryData.deaths.value}`
    console.log(summaryData)
})

// data global
let getKasusCovidGlbl = async () => {
    let API = await fetch ('https://covid19.mathdro.id/api/');
    let option =  await API.json();
    return option;
}

getKasusCovidGlbl().then(kasusCovidGlbl => 
    {let summaryData = kasusCovidGlbl;
    document.getElementById("confirmedglb").innerHTML = `${summaryData.confirmed.value}`
    document.getElementById("recoveredglb").innerHTML = `${summaryData.recovered.value}`
    document.getElementById("deathsglb").innerHTML = `${summaryData.deaths.value}`
    console.log(summaryData)
})
  
  

// PAGE 2
let button = document.querySelector(".searchButton");
let API3 = `https://covid19.mathdro.id/api/confirmed`;
let countries =[];

button.addEventListener ("click", () => {
    let search = document.getElementById("inputKeyword").value;
    console.log(search);
    console.log("button was pressed");
    
    fetch(API3, {method: "GET"})
    .then (result => result.json())
    .then (result =>{
        console.log(result)

    for (let i= 0; i <= result.length; i++){
                if (result[i].countryRegion.toLowerCase() === search.toLowerCase()) {
                    countries = i;
                    break; 
                    
                }
                if (countries == []) {
                    let hideCountry = document.getElementById("case-container");
                    hideCountry.display = "none";
                    alert ("No information for that Country")               
                }
                else {
                    let data = document.getElementById("case-container");
                    data.innerHTML = `<div class="data-boxes">
                    <div class= "terkonfirmasi"> <h3>Confirmed</h3> <p> ${result[i].confirmed}</p> </div>
                    <div class ="sembuh"> <h3>Recovered</h3><p>${result[i].recovered}</p></div>
                    <div class= "meninggal"><h3>Deaths</h3><p>${result[i].deaths}</p></div>
                    </div>`;                 
                }
            }
            })
            .catch (error =>{console.log(error)})
        });
 
// tampilkan banyak negara
const API4 = `https://covid19.mathdro.id/api/confirmed`;
fetch(API4)
.then (res => res.json())
.then (data =>{
    console.log(data);

for (let i= 0; i <= 150; i++){ 
    let caseCountries = document.getElementById("case-global");
    caseCountries.innerHTML += `<div class="negara">
    <h2 class="datadata">Country : ${data[i].countryRegion}</h2>
    <div class= "row"> 
          <div class= "three columns">
             <div class="card redcard"> 
             <div class="cardheading"> 
             <h4>Confirmed</h4> <h2> ${data[i].confirmed}</h2>
             </div></div>
         </div>

          <div class= "three columns">
             <div class="card bluecard"> 
             <h4>Recovered</h4><h2>${data[i].recovered}</h2>
             </div>
         </div>

          <div class= "three columns">
             <div class="card yellowcard"> 
             <h4>Deaths</h4><h2>${data[i].deaths}</h2>
             </div>
          </div>       
    </div>
    
    </div>`; 
    }
})

// switch page
        window.onload = () => {
            const tab_switchers = document.querySelectorAll('[data-switcher]');
        
            for (let i = 0; i < tab_switchers.length; i++) {
                const tab_switcher = tab_switchers[i];
                const page_id = tab_switcher.dataset.tab;
        
                tab_switcher.addEventListener('click', () => {
                    document.querySelector('.tabs .tab.active').classList.remove('active');
                    tab_switcher.parentNode.classList.add('active');
        
                    SwitchPage(page_id);
                });
            }
        }
        
        function SwitchPage (page_id) {
            console.log(page_id);
        
            const current_page = document.querySelector('.pages .page.active');
            current_page.classList.remove('active');
        
            const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
            next_page.classList.add('active');
        }