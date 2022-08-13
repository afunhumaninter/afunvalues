import drawCanvas from './modules/canvas.js'

function getQueryVariable(variable)
{
       let query = window.location.search.substring(1)
       let vars = query.split("&")
       for (var i=0;i<vars.length;i++) {
               let pair = vars[i].split("=")
               if(pair[0] == variable) {return pair[1]}
       }
       return(NaN);
}

function setBarValue(name, value) {
    var innerel = document.getElementById(name)
    var outerel = document.getElementById("bar-" + name)
    outerel.style.width = (value + "%")
    innerel.innerHTML = (value + "%")
    if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
        innerel.style.visibility = "hidden"
    }
}
function setLabel(val,ary) {
    if (val > 100) { return "" } else
    if (val >  90) { return ary[0] } else
    if (val >  75) { return ary[1] } else
    if (val >  60) { return ary[2] } else
    if (val >= 40) { return ary[3] } else
    if (val >= 25) { return ary[4] } else
    if (val >= 10) { return ary[5] } else
    if (val >=  0) { return ary[6] } else
    {return ""}
}

fetch("JSON/ideologies.json")
    .then(response => response.json())
    .then(data => parse_ideology(data))

function parse_ideology(ideologies){
    var moderate       = getQueryVariable("r")
    var socialist      = getQueryVariable("e")
    var authoritarian    = getQueryVariable("s")
    var nationalist       = getQueryVariable("n")
    var conventionalist = getQueryVariable("c")
    var radical        = (100 - moderate       ).toFixed(1)
    var capitalist       = (100 - socialist      ).toFixed(1)
    var libertarian  = (100 - authoritarian    ).toFixed(1)
    var globalist      = (100 - nationalist       ).toFixed(1)
    var conspiratorialist    = (100 - conventionalist ).toFixed(1)
    
    setBarValue("moderate", moderate)
    setBarValue("radical", radical)
    setBarValue("socialist", socialist)
    setBarValue("capitalist", capitalist)
    setBarValue("authoritarian", authoritarian)
    setBarValue("libertarian", libertarian)
    setBarValue("nationalist", nationalist)
    setBarValue("globalist", globalist)
    setBarValue("conventionalist", conventionalist)
    setBarValue("conspiratorialist", conspiratorialist)

    const radiArray = ["Center-Conservative","Moderate Conservative","Liberal Conservative","Conservative","High Conservative","Traditionalist","Reactionary"]
    const econArray = ["Communist","Socialist","Social Democracy","Centrist","Economic Liberalism","Capitalism","Proprietarianism"]
    const stteArray = ["Totalitarian","Authoritarian","Statism","Balanced","Civically Liberal","Libertarian","Anarchist"]
    const natnArray = ["Chauvinist","Nationalist","Patriot","Neutral","Diplomatic","Internationalist","One-World Globalist"]
    const convArray = ["Establishment-Aligned","Conventionalist","Mainstream","Distrustful","Unconventional","Conspiratorialist","Idiosyncratic"]

    document.getElementById("radicality-label").innerHTML = setLabel(moderate, radiArray)
    document.getElementById("economics-label").innerHTML = setLabel(socialist, econArray)
    document.getElementById("statism-label").innerHTML = setLabel(authoritarian, stteArray)
    document.getElementById("nation-label").innerHTML = setLabel(nationalist, natnArray)
    document.getElementById("conventionalism-label").innerHTML = setLabel(conventionalist, convArray)

    var ideology = ""
    var ideodist = Infinity
    for (var i = 0; i < ideologies.length; i++) {
        var dist = 0
        dist += Math.pow(Math.abs(ideologies[i].stats.radi - moderate), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.econ - socialist), 1.5)
        dist += Math.pow(Math.abs(ideologies[i].stats.stte - authoritarian), 1.75)
        dist += Math.pow(Math.abs(ideologies[i].stats.natn - nationalist), 1.5)
        dist += Math.pow(Math.abs(ideologies[i].stats.conv - conventionalist), 1.5)
        if (dist < ideodist) {
            ideology = ideologies[i].name
            ideodist = dist
        }
    }
    document.getElementById("ideology-label").innerHTML = ideology

    drawCanvas(ideology, moderate, radical, socialist, capitalist, authoritarian, libertarian, nationalist, globalist, conventionalist, conspiratorialist) 
} 
