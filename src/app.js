//select elements
const country_name_element = document.querySelector(".country .name");

const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");

const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");

const total_deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");


let covid_chart = document.getElementById("covidChart").getContext('2d');

//app variables
let confirmed_list = [],
    recovered_list = [],
    deaths_list = [],
    formatted_Dates = [],
    dates = []
    
let country_code = "US";

let user_country;
country_list.forEach( country => {
    if(country.ISO2 === country_code){
        user_country = country.Country;
    }
})

//fetch data from api
function fetchData(country){
    user_country = country;
    country_name_element.innerHTML = "Loading...";
    
    confirmed_list, recovered_list, deaths_list, formatted_Dates, dates = [];

    var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

    const api_fetch = async (country) => {
        await fetch(
            "https://api.covid19api.com/total/country/" +
              country +
              "/status/confirmed",
            requestOptions
          )
        .then(resp =>  resp.json())
        .then(data => {
            data.forEach(obj => {
                dates.push(obj.Date);
                confirmed_list.push(obj.Cases);
            })
        })
        await fetch(
            "https://api.covid19api.com/total/country/" +
              country +
              "/status/recovered",
            requestOptions
          )
        .then(resp =>  resp.json())
        .then(data => {
            data.forEach(obj => {
                recovered_list.push(obj.Cases);
            })
        })
        
        await fetch(
            "https://api.covid19api.com/total/country/" +
              country +
              "/status/deaths",
            requestOptions
          )
        .then(resp =>  resp.json())
        .then(data => {
            data.forEach(obj => {
                deaths_list.push(obj.Cases);
            })
        })
        updateUI();
    }
    api_fetch(country);
}

fetchData(user_country);

function updateUI(){
    updateStats();
    drawChart();
    console.log(formatted_Dates)
}

function updateStats(){

    const total_cases = confirmed_list[confirmed_list.length -1];
    const new_cases = total_cases - confirmed_list[confirmed_list.length - 2];

    const total_recovered = recovered_list[recovered_list.length - 1];
    const new_recovered = total_recovered - recovered_list[recovered_list.length - 2];

    const total_deaths = deaths_list[deaths_list.length - 1];
    const new_deaths = total_deaths - deaths_list[deaths_list.length - 2];

    country_name_element.innerHTML = user_country;
    total_cases_element.innerHTML = total_cases;
    new_cases_element.innerHTML = `${new_cases >= 0 ? "+" : "-"}` + new_cases;

    recovered_element.innerHTML = total_recovered;
    new_recovered_element.innerHTML = `${new_recovered >= 0 ? "+" : "-"}` + new_recovered;

    total_deaths_element.innerHTML = total_deaths;
    new_deaths_element.innerHTML = `${new_deaths >= 0 ? "+" : "-"}` + new_deaths;

    dates.forEach(date => formatted_Dates.push(formatDate(date)));
}

//use Chart.js to create graphs
let chart;
function drawChart(){
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(covid_chart, {
        type: "line",
        data: {
            datasets: [{
                label: 'Confirmed Cases',
                backgroundColor: 'black',
                borderColor: 'black',
                data: confirmed_list,
                fill: false,
                
            borderWidth: 1
            },
            {
                label: 'Recovered',
                backgroundColor: 'rgb(99, 185, 99)',
                borderColor: 'rgb(99, 185, 99)',
                data: recovered_list,
                fill: false,
    
                borderWidth: 1
            },
            {
                label: 'Deaths',
                backgroundColor: 'rgb(212, 118, 118)',
                borderColor: 'rgb(212, 118, 118)',
                data: deaths_list,
                fill: false,               
                
                borderWidth: 1
            }],
            labels: formatted_Dates,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                position: 'top',
                text: `COVID-19 Cases in ${country_name_element.innerHTML}`,
                fontFamily: 'Arial',
                fontSize: 20,
            },       
        }
    });
}
//format dates
const monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(dateString){
    let date = new Date(dateString);
    return `${date.getDate()} ${monthsNames[date.getMonth()-1]}`;
}

