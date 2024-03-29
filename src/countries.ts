let country_list = [
    {"Country":"Saint Vincent and Grenadines","Slug":"saint-vincent-and-the-grenadines","ISO2":"VC"},
    {"Country":"Slovenia","Slug":"slovenia","ISO2":"SI"},
    {"Country":"Guadeloupe","Slug":"guadeloupe","ISO2":"GP"},
    {"Country":"Honduras","Slug":"honduras","ISO2":"HN"},
    {"Country":"Lao PDR","Slug":"lao-pdr","ISO2":"LA"},
    {"Country":"South Africa","Slug":"south-africa","ISO2":"ZA"},
    {"Country":"French Guiana","Slug":"french-guiana","ISO2":"GF"},
    {"Country":"Isle of Man","Slug":"isle-of-man","ISO2":"IM"},
    {"Country":"Jordan","Slug":"jordan","ISO2":"JO"},
    {"Country":"United Kingdom","Slug":"united-kingdom","ISO2":"GB"},
    {"Country":"Botswana","Slug":"botswana","ISO2":"BW"},
    {"Country":"China","Slug":"china","ISO2":"CN"},
    {"Country":"Fiji","Slug":"fiji","ISO2":"FJ"},
    {"Country":"Seychelles","Slug":"seychelles","ISO2":"SC"},
    {"Country":"Uzbekistan","Slug":"uzbekistan","ISO2":"UZ"},
    {"Country":"Congo (Kinshasa)","Slug":"congo-kinshasa","ISO2":"CD"},
    {"Country":"Cook Islands","Slug":"cook-islands","ISO2":"CK"},
    {"Country":"Djibouti","Slug":"djibouti","ISO2":"DJ"},
    {"Country":"Norfolk Island","Slug":"norfolk-island","ISO2":"NF"},
    {"Country":"Republic of Kosovo","Slug":"kosovo","ISO2":"XK"},
    {"Country":"Guatemala","Slug":"guatemala","ISO2":"GT"},
    {"Country":"Kazakhstan","Slug":"kazakhstan","ISO2":"KZ"},
    {"Country":"Madagascar","Slug":"madagascar","ISO2":"MG"},
    {"Country":"Syrian Arab Republic (Syria)","Slug":"syria","ISO2":"SY"},
    {"Country":"Algeria","Slug":"algeria","ISO2":"DZ"},
    {"Country":"Czech Republic","Slug":"czech-republic","ISO2":"CZ"},
    {"Country":"Iran, Islamic Republic of","Slug":"iran","ISO2":"IR"},
    {"Country":"Rwanda","Slug":"rwanda","ISO2":"RW"},
    {"Country":"Japan","Slug":"japan","ISO2":"JP"},
    {"Country":"Lithuania","Slug":"lithuania","ISO2":"LT"},
    {"Country":"Germany","Slug":"germany","ISO2":"DE"},
    {"Country":"Saint Helena","Slug":"saint-helena","ISO2":"SH"},
    {"Country":"United Arab Emirates","Slug":"united-arab-emirates","ISO2":"AE"},
    {"Country":"Uruguay","Slug":"uruguay","ISO2":"UY"},
    {"Country":"Comoros","Slug":"comoros","ISO2":"KM"},
    {"Country":"Switzerland","Slug":"switzerland","ISO2":"CH"},
    {"Country":"Turks and Caicos Islands","Slug":"turks-and-caicos-islands","ISO2":"TC"},
    {"Country":"Virgin Islands, US","Slug":"virgin-islands","ISO2":"VI"},
    {"Country":"Bahrain","Slug":"bahrain","ISO2":"BH"},
    {"Country":"Kenya","Slug":"kenya","ISO2":"KE"},
    {"Country":"Russian Federation","Slug":"russia","ISO2":"RU"},
    {"Country":"Ecuador","Slug":"ecuador","ISO2":"EC"},
    {"Country":"French Southern Territories","Slug":"french-southern-territories","ISO2":"TF"},
    {"Country":"Holy See (Vatican City State)","Slug":"holy-see-vatican-city-state","ISO2":"VA"},
    {"Country":"Korea (South)","Slug":"korea-south","ISO2":"KR"},
    {"Country":"Nauru","Slug":"nauru","ISO2":"NR"},
    {"Country":"US Minor Outlying Islands","Slug":"us-minor-outlying-islands","ISO2":"UM"},
    {"Country":"Nepal","Slug":"nepal","ISO2":"NP"},
    {"Country":"Andorra","Slug":"andorra","ISO2":"AD"},
    {"Country":"Chad","Slug":"chad","ISO2":"TD"},
    {"Country":"Paraguay","Slug":"paraguay","ISO2":"PY"},
    {"Country":"San Marino","Slug":"san-marino","ISO2":"SM"},
    {"Country":"Sudan","Slug":"sudan","ISO2":"SD"},
    {"Country":"Trinidad and Tobago","Slug":"trinidad-and-tobago","ISO2":"TT"},
    {"Country":"Western Sahara","Slug":"western-sahara","ISO2":"EH"},
    {"Country":"Argentina","Slug":"argentina","ISO2":"AR"},
    {"Country":"Gabon","Slug":"gabon","ISO2":"GA"},
    {"Country":"Gambia","Slug":"gambia","ISO2":"GM"},
    {"Country":"Mayotte","Slug":"mayotte","ISO2":"YT"},
    {"Country":"Papua New Guinea","Slug":"papua-new-guinea","ISO2":"PG"},
    {"Country":"Bahamas","Slug":"bahamas","ISO2":"BS"},
    {"Country":"Barbados","Slug":"barbados","ISO2":"BB"},
    {"Country":"Heard and Mcdonald Islands","Slug":"heard-and-mcdonald-islands","ISO2":"HM"},
    {"Country":"Marshall Islands","Slug":"marshall-islands","ISO2":"MH"},
    {"Country":"Venezuela (Bolivarian Republic)","Slug":"venezuela","ISO2":"VE"},
    {"Country":"Afghanistan","Slug":"afghanistan","ISO2":"AF"},
    {"Country":"Congo (Brazzaville)","Slug":"congo-brazzaville","ISO2":"CG"},
    {"Country":"Puerto Rico","Slug":"puerto-rico","ISO2":"PR"},
    {"Country":"Serbia","Slug":"serbia","ISO2":"RS"},
    {"Country":"Yemen","Slug":"yemen","ISO2":"YE"},
    {"Country":"Brunei Darussalam","Slug":"brunei","ISO2":"BN"},
    {"Country":"Italy","Slug":"italy","ISO2":"IT"},
    {"Country":"Jersey","Slug":"jersey","ISO2":"JE"},
    {"Country":"Macedonia, Republic of","Slug":"macedonia","ISO2":"MK"},
    {"Country":"Poland","Slug":"poland","ISO2":"PL"},
    {"Country":"Tuvalu","Slug":"tuvalu","ISO2":"TV"},
    {"Country":"Belize","Slug":"belize","ISO2":"BZ"},
    {"Country":"Bouvet Island","Slug":"bouvet-island","ISO2":"BV"},
    {"Country":"Hong Kong, SAR China","Slug":"hong-kong-sar-china","ISO2":"HK"},
    {"Country":"Niger","Slug":"niger","ISO2":"NE"},
    {"Country":"Pakistan","Slug":"pakistan","ISO2":"PK"},
    {"Country":"South Sudan","Slug":"south-sudan","ISO2":"SS"},
    {"Country":"Swaziland","Slug":"swaziland","ISO2":"SZ"},
    {"Country":"Turkey","Slug":"turkey","ISO2":"TR"},
    {"Country":"Burkina Faso","Slug":"burkina-faso","ISO2":"BF"},
    {"Country":"Saint-Martin (French part)","Slug":"saint-martin-french-part","ISO2":"MF"},
    {"Country":"El Salvador","Slug":"el-salvador","ISO2":"SV"},
    {"Country":"Finland","Slug":"finland","ISO2":"FI"},
    {"Country":"Malaysia","Slug":"malaysia","ISO2":"MY"},
    {"Country":"Mexico","Slug":"mexico","ISO2":"MX"},
    {"Country":"Spain","Slug":"spain","ISO2":"ES"},
    {"Country":"Faroe Islands","Slug":"faroe-islands","ISO2":"FO"},
    {"Country":"Lebanon","Slug":"lebanon","ISO2":"LB"},
    {"Country":"Saint Lucia","Slug":"saint-lucia","ISO2":"LC"},
    {"Country":"Bangladesh","Slug":"bangladesh","ISO2":"BD"},
    {"Country":"Moldova","Slug":"moldova","ISO2":"MD"},
    {"Country":"Norway","Slug":"norway","ISO2":"NO"},
    {"Country":"Gibraltar","Slug":"gibraltar","ISO2":"GI"},
    {"Country":"Greenland","Slug":"greenland","ISO2":"GL"},
    {"Country":"Montenegro","Slug":"montenegro","ISO2":"ME"},
    {"Country":"Palestinian Territory","Slug":"palestine","ISO2":"PS"},
    {"Country":"Niue","Slug":"niue","ISO2":"NU"},
    {"Country":"Viet Nam","Slug":"vietnam","ISO2":"VN"},
    {"Country":"Cuba","Slug":"cuba","ISO2":"CU"},
    {"Country":"Guernsey","Slug":"guernsey","ISO2":"GG"},
    {"Country":"Montserrat","Slug":"montserrat","ISO2":"MS"},
    {"Country":"Palau","Slug":"palau","ISO2":"PW"},
    {"Country":"Peru","Slug":"peru","ISO2":"PE"},
    {"Country":"Benin","Slug":"benin","ISO2":"BJ"},
    {"Country":"Korea (North)","Slug":"korea-north","ISO2":"KP"},
    {"Country":"Netherlands","Slug":"netherlands","ISO2":"NL"},
    {"Country":"Tonga","Slug":"tonga","ISO2":"TO"},
    {"Country":"Cape Verde","Slug":"cape-verde","ISO2":"CV"},
    {"Country":"Grenada","Slug":"grenada","ISO2":"GD"},
    {"Country":"Indonesia","Slug":"indonesia","ISO2":"ID"},
    {"Country":"New Zealand","Slug":"new-zealand","ISO2":"NZ"},
    {"Country":"Nicaragua","Slug":"nicaragua","ISO2":"NI"},
    {"Country":"Panama","Slug":"panama","ISO2":"PA"},
    {"Country":"Bhutan","Slug":"bhutan","ISO2":"BT"},
    {"Country":"Cayman Islands","Slug":"cayman-islands","ISO2":"KY"},
    {"Country":"Singapore","Slug":"singapore","ISO2":"SG"},
    {"Country":"Qatar","Slug":"qatar","ISO2":"QA"},
    {"Country":"Sierra Leone","Slug":"sierra-leone","ISO2":"SL"},
    {"Country":"American Samoa","Slug":"american-samoa","ISO2":"AS"},
    {"Country":"Bolivia","Slug":"bolivia","ISO2":"BO"},
    {"Country":"Sao Tome and Principe","Slug":"sao-tome-and-principe","ISO2":"ST"},
    {"Country":"Vanuatu","Slug":"vanuatu","ISO2":"VU"},
    {"Country":"Zimbabwe","Slug":"zimbabwe","ISO2":"ZW"},
    {"Country":"ALA Aland Islands","Slug":"ala-aland-islands","ISO2":"AX"},
    {"Country":"Angola","Slug":"angola","ISO2":"AO"},
    {"Country":"Antarctica","Slug":"antarctica","ISO2":"AQ"},
    {"Country":"Kuwait","Slug":"kuwait","ISO2":"KW"},
    {"Country":"Denmark","Slug":"denmark","ISO2":"DK"},
    {"Country":"Greece","Slug":"greece","ISO2":"GR"},
    {"Country":"Australia","Slug":"australia","ISO2":"AU"},
    {"Country":"Falkland Islands (Malvinas)","Slug":"falkland-islands-malvinas","ISO2":"FK"},
    {"Country":"Solomon Islands","Slug":"solomon-islands","ISO2":"SB"},
    {"Country":"Cocos (Keeling) Islands","Slug":"cocos-keeling-islands","ISO2":"CC"},
    {"Country":"Eritrea","Slug":"eritrea","ISO2":"ER"},
    {"Country":"India","Slug":"india","ISO2":"IN"},
    {"Country":"Namibia","Slug":"namibia","ISO2":"NA"},
    {"Country":"Mauritius","Slug":"mauritius","ISO2":"MU"},
    {"Country":"Sri Lanka","Slug":"sri-lanka","ISO2":"LK"},
    {"Country":"Croatia","Slug":"croatia","ISO2":"HR"},
    {"Country":"Estonia","Slug":"estonia","ISO2":"EE"},
    {"Country":"Haiti","Slug":"haiti","ISO2":"HT"},
    {"Country":"Hungary","Slug":"hungary","ISO2":"HU"},
    {"Country":"Brazil","Slug":"brazil","ISO2":"BR"},
    {"Country":"Malta","Slug":"malta","ISO2":"MT"},
    {"Country":"Slovakia","Slug":"slovakia","ISO2":"SK"},
    {"Country":"Bosnia and Herzegovina","Slug":"bosnia-and-herzegovina","ISO2":"BA"},
    {"Country":"Monaco","Slug":"monaco","ISO2":"MC"},
    {"Country":"Senegal","Slug":"senegal","ISO2":"SN"},
    {"Country":"Svalbard and Jan Mayen Islands","Slug":"svalbard-and-jan-mayen-islands","ISO2":"SJ"},
    {"Country":"Albania","Slug":"albania","ISO2":"AL"},
    {"Country":"Georgia","Slug":"georgia","ISO2":"GE"},
    {"Country":"Kiribati","Slug":"kiribati","ISO2":"KI"},
    {"Country":"Oman","Slug":"oman","ISO2":"OM"},
    {"Country":"Pitcairn","Slug":"pitcairn","ISO2":"PN"},
    {"Country":"Côte d'Ivoire","Slug":"cote-divoire","ISO2":"CI"},
    {"Country":"Guinea-Bissau","Slug":"guinea-bissau","ISO2":"GW"},
    {"Country":"Mongolia","Slug":"mongolia","ISO2":"MN"},
    {"Country":"Tanzania, United Republic of","Slug":"tanzania","ISO2":"TZ"},
    {"Country":"Bermuda","Slug":"bermuda","ISO2":"BM"},
    {"Country":"Colombia","Slug":"colombia","ISO2":"CO"},
    {"Country":"Malawi","Slug":"malawi","ISO2":"MW"},
    {"Country":"Timor-Leste","Slug":"timor-leste","ISO2":"TL"},
    {"Country":"Cambodia","Slug":"cambodia","ISO2":"KH"},
    {"Country":"Central African Republic","Slug":"central-african-republic","ISO2":"CF"},
    {"Country":"Maldives","Slug":"maldives","ISO2":"MV"},
    {"Country":"Cameroon","Slug":"cameroon","ISO2":"CM"},
    {"Country":"Chile","Slug":"chile","ISO2":"CL"},
    {"Country":"Netherlands Antilles","Slug":"netherlands-antilles","ISO2":"AN"},
    {"Country":"Saint-Barthélemy","Slug":"saint-barthélemy","ISO2":"BL"},
    {"Country":"South Georgia and the South Sandwich Islands","Slug":"south-georgia-and-the-south-sandwich-islands","ISO2":"GS"},
    {"Country":"Thailand","Slug":"thailand","ISO2":"TH"},
    {"Country":"Belarus","Slug":"belarus","ISO2":"BY"},
    {"Country":"French Polynesia","Slug":"french-polynesia","ISO2":"PF"},
    {"Country":"Guinea","Slug":"guinea","ISO2":"GN"},
    {"Country":"Kyrgyzstan","Slug":"kyrgyzstan","ISO2":"KG"},
    {"Country":"Micronesia, Federated States of","Slug":"micronesia","ISO2":"FM"},
    {"Country":"Austria","Slug":"austria","ISO2":"AT"},
    {"Country":"Martinique","Slug":"martinique","ISO2":"MQ"},
    {"Country":"Anguilla","Slug":"anguilla","ISO2":"AI"},
    {"Country":"Antigua and Barbuda","Slug":"antigua-and-barbuda","ISO2":"AG"},
    {"Country":"Réunion","Slug":"réunion","ISO2":"RE"},
    {"Country":"Taiwan, Republic of China","Slug":"taiwan","ISO2":"TW"},
    {"Country":"Tokelau","Slug":"tokelau","ISO2":"TK"},
    {"Country":"Libya","Slug":"libya","ISO2":"LY"},
    {"Country":"New Caledonia","Slug":"new-caledonia","ISO2":"NC"},
    {"Country":"Aruba","Slug":"aruba","ISO2":"AW"},
    {"Country":"Mauritania","Slug":"mauritania","ISO2":"MR"},
    {"Country":"Zambia","Slug":"zambia","ISO2":"ZM"},
    {"Country":"Azerbaijan","Slug":"azerbaijan","ISO2":"AZ"},
    {"Country":"British Indian Ocean Territory","Slug":"british-indian-ocean-territory","ISO2":"IO"},
    {"Country":"Bulgaria","Slug":"bulgaria","ISO2":"BG"},
    {"Country":"Guam","Slug":"guam","ISO2":"GU"},
    {"Country":"Samoa","Slug":"samoa","ISO2":"WS"},
    {"Country":"Israel","Slug":"israel","ISO2":"IL"},
    {"Country":"Suriname","Slug":"suriname","ISO2":"SR"},
    {"Country":"Saudi Arabia","Slug":"saudi-arabia","ISO2":"SA"},
    {"Country":"Tunisia","Slug":"tunisia","ISO2":"TN"},
    {"Country":"Equatorial Guinea","Slug":"equatorial-guinea","ISO2":"GQ"},
    {"Country":"Jamaica","Slug":"jamaica","ISO2":"JM"},
    {"Country":"Latvia","Slug":"latvia","ISO2":"LV"},
    {"Country":"Mali","Slug":"mali","ISO2":"ML"},
    {"Country":"Mozambique","Slug":"mozambique","ISO2":"MZ"},
    {"Country":"Saint Pierre and Miquelon","Slug":"saint-pierre-and-miquelon","ISO2":"PM"},
    {"Country":"Egypt","Slug":"egypt","ISO2":"EG"},
    {"Country":"Ghana","Slug":"ghana","ISO2":"GH"},
    {"Country":"Somalia","Slug":"somalia","ISO2":"SO"},
    {"Country":"Ukraine","Slug":"ukraine","ISO2":"UA"},
    {"Country":"Burundi","Slug":"burundi","ISO2":"BI"},
    {"Country":"Dominican Republic","Slug":"dominican-republic","ISO2":"DO"},
    {"Country":"Lesotho","Slug":"lesotho","ISO2":"LS"},
    {"Country":"Romania","Slug":"romania","ISO2":"RO"},
    {"Country":"Turkmenistan","Slug":"turkmenistan","ISO2":"TM"},
    {"Country":"Wallis and Futuna Islands","Slug":"wallis-and-futuna-islands","ISO2":"WF"},
    {"Country":"Iceland","Slug":"iceland","ISO2":"IS"},
    {"Country":"Armenia","Slug":"armenia","ISO2":"AM"},
    {"Country":"Canada","Slug":"canada","ISO2":"CA"},
    {"Country":"Cyprus","Slug":"cyprus","ISO2":"CY"},
    {"Country":"Ireland","Slug":"ireland","ISO2":"IE"},
    {"Country":"Nigeria","Slug":"nigeria","ISO2":"NG"},
    {"Country":"Luxembourg","Slug":"luxembourg","ISO2":"LU"},
    {"Country":"Philippines","Slug":"philippines","ISO2":"PH"},
    {"Country":"British Virgin Islands","Slug":"british-virgin-islands","ISO2":"VG"},
    {"Country":"Christmas Island","Slug":"christmas-island","ISO2":"CX"},
    {"Country":"France","Slug":"france","ISO2":"FR"},
    {"Country":"Iraq","Slug":"iraq","ISO2":"IQ"},
    {"Country":"Liberia","Slug":"liberia","ISO2":"LR"},
    {"Country":"Saint Kitts and Nevis","Slug":"saint-kitts-and-nevis","ISO2":"KN"},
    {"Country":"Togo","Slug":"togo","ISO2":"TG"},
    {"Country":"Morocco","Slug":"morocco","ISO2":"MA"},
    {"Country":"Northern Mariana Islands","Slug":"northern-mariana-islands","ISO2":"MP"},
    {"Country":"Uganda","Slug":"uganda","ISO2":"UG"},
    {"Country":"Dominica","Slug":"dominica","ISO2":"DM"},
    {"Country":"Ethiopia","Slug":"ethiopia","ISO2":"ET"},
    {"Country":"Macao, SAR China","Slug":"macao-sar-china","ISO2":"MO"},
    {"Country":"Portugal","Slug":"portugal","ISO2":"PT"},
    {"Country":"Liechtenstein","Slug":"liechtenstein","ISO2":"LI"},
    {"Country":"Myanmar","Slug":"myanmar","ISO2":"MM"},
    {"Country":"Sweden","Slug":"sweden","ISO2":"SE"},
    {"Country":"Belgium","Slug":"belgium","ISO2":"BE"},
    {"Country":"Costa Rica","Slug":"costa-rica","ISO2":"CR"},
    {"Country":"Guyana","Slug":"guyana","ISO2":"GY"},
    {"Country":"Tajikistan","Slug":"tajikistan","ISO2":"TJ"},
    {"Country":"United States of America","Slug":"united-states","ISO2":"US"}];

const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const change_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close-button");
const input = document.getElementById("search-input");

function createCountryList(){
    const num_countries = country_list.length;

    let i = 0, ul_list_id;

    country_list.forEach( (country, index) => {
        if (index % Math.ceil(num_countries/num_of_ul_lists) == 0){
            ul_list_id = `list-${i}`;
            country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
            i++;
        }

        document.getElementById(`${ul_list_id}`).innerHTML += `
        <li onclick="fetchData('${country.Slug}')" id="${country.Country}">
        ${country.Country}
        </li>
        `;
    });
}

let num_of_ul_lists = 3;
createCountryList();

change_country_btn.addEventListener("click", function(){
    input.value = "";
    resetCountryList();
    search_country_element.classList.toggle("hide");
    search_country_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
});

country_list_element.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
});

input.addEventListener("input", function(){
    let value=input.value.toUpperCase();

    country_list.forEach(country => {
        if (country.Country.toUpperCase().startsWith(value)) {
            document.getElementById(country.Country).classList.remove("hide");
        }else {
            document.getElementById(country.Country).classList.add("hide");
        }
    });
});

function resetCountryList(){
    country_list.forEach(country => {
            document.getElementById(country.Country).classList.remove("hide");
    });
}