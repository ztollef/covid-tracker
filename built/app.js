var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//select elements
var country_name_element = document.querySelector(".country .name");
var total_cases_element = document.querySelector(".total-cases .value");
var new_cases_element = document.querySelector(".total-cases .new-value");
var recovered_element = document.querySelector(".recovered .value");
var new_recovered_element = document.querySelector(".recovered .new-value");
var total_deaths_element = document.querySelector(".deaths .value");
var new_deaths_element = document.querySelector(".deaths .new-value");
var covid_chart = document.getElementById("covidChart").getContext('2d');
//app variables
var confirmed_list = [], recovered_list = [], deaths_list = [], formatted_Dates = [], dates = [];
var user_country;
//fetch data from api
function fetchData(country) {
    var _this = this;
    user_country = country;
    country_name_element.innerHTML = "Loading...";
    (confirmed_list = []),
        (recovered_list = []),
        (deaths_list = []),
        (formatted_Dates = []),
        (dates = []);
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    var api_fetch = function (country) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.covid19api.com/total/country/" +
                        country +
                        "/status/confirmed", requestOptions)
                        .then(function (resp) { return resp.json(); })
                        .then(function (data) {
                        data.forEach(function (obj) {
                            dates.push(obj.Date);
                            confirmed_list.push(obj.Cases);
                        });
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fetch("https://api.covid19api.com/total/country/" +
                            country +
                            "/status/recovered", requestOptions)
                            .then(function (resp) { return resp.json(); })
                            .then(function (data) {
                            data.forEach(function (obj) {
                                recovered_list.push(obj.Cases);
                            });
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fetch("https://api.covid19api.com/total/country/" +
                            country +
                            "/status/deaths", requestOptions)
                            .then(function (resp) { return resp.json(); })
                            .then(function (data) {
                            data.forEach(function (obj) {
                                deaths_list.push(obj.Cases);
                            });
                        })];
                case 3:
                    _a.sent();
                    updateUI();
                    return [2 /*return*/];
            }
        });
    }); };
    api_fetch(country);
}
fetchData("united-states");
function updateUI() {
    updateStats();
    drawChart();
}
function updateStats() {
    var total_cases = confirmed_list[confirmed_list.length - 1];
    var new_cases = total_cases - confirmed_list[confirmed_list.length - 2];
    var total_recovered = recovered_list[recovered_list.length - 1];
    var new_recovered = total_recovered - recovered_list[recovered_list.length - 2];
    var total_deaths = deaths_list[deaths_list.length - 1];
    var new_deaths = total_deaths - deaths_list[deaths_list.length - 2];
    country_list.forEach(function (country) {
        if (country.Slug === user_country) {
            country_name_element.innerHTML = country.Country;
        }
    });
    total_cases_element.innerHTML = total_cases;
    new_cases_element.innerHTML = "" + (new_cases >= 0 ? "+" : "-") + new_cases;
    recovered_element.innerHTML = total_recovered;
    new_recovered_element.innerHTML = "" + (new_recovered >= 0 ? "+" : "-") + new_recovered;
    total_deaths_element.innerHTML = total_deaths;
    new_deaths_element.innerHTML = "" + (new_deaths >= 0 ? "+" : "-") + new_deaths;
    dates.forEach(function (date) { return formatted_Dates.push(formatDate(date)); });
}
//use Chart.js to create graphs
var chart;
function drawChart() {
    if (chart) {
        chart.data.datasets[0].data = confirmed_list;
        chart.data.datasets[1].data = recovered_list;
        chart.data.datasets[2].data = deaths_list;
        chart.data.labels = formatted_Dates;
        chart.options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                position: 'top',
                text: "COVID-19 Cases in " + country_name_element.innerHTML,
                fontFamily: 'Arial',
                fontSize: 20,
            },
        };
        chart.update();
    }
    else {
        chart = new Chart(covid_chart, {
            type: "line",
            data: {
                datasets: [{
                        label: 'Confirmed Cases',
                        backgroundColor: 'black',
                        borderColor: 'black',
                        data: confirmed_list,
                        fill: false,
                        borderWidth: 2
                    },
                    {
                        label: 'Recovered',
                        backgroundColor: 'rgb(99, 185, 99)',
                        borderColor: 'rgb(99, 185, 99)',
                        data: recovered_list,
                        fill: false,
                        borderWidth: 2
                    },
                    {
                        label: 'Deaths',
                        backgroundColor: 'rgb(212, 118, 118)',
                        borderColor: 'rgb(212, 118, 118)',
                        data: deaths_list,
                        fill: false,
                        borderWidth: 2
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
                    text: "COVID-19 Cases in " + country_name_element.innerHTML,
                    fontFamily: 'Arial',
                    fontSize: 20,
                },
            }
        });
    }
}
//format dates
var monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(dateString) {
    var date = new Date(dateString);
    return date.getDate() + " " + monthsNames[date.getMonth()];
}
