var max_radi, max_econ, max_stte, max_natn, max_conv // Max possible scores
max_radi = max_econ = max_stte = max_natn = max_conv = 0;
var radi, econ, stte, natn, conv // User's scores
radi = econ = stte = natn = conv = 0;
var qn = 0; // Question number
var prev_answer = null;
fetch("JSON/questions.json")
    .then(response => response.json())
    .then(data => load_questions(data))

function load_questions(data) {
    questions = data
    for (var i = 0; i < questions.length; i++) {
        max_radi += Math.abs(questions[i].effect.radi)
        max_econ += Math.abs(questions[i].effect.econ)
        max_stte += Math.abs(questions[i].effect.stte)
        max_natn += Math.abs(questions[i].effect.natn)
        max_conv += Math.abs(questions[i].effect.conv)
    }
    init_question();
}

function init_question() {
    document.getElementById("question-text").innerHTML = questions[qn].question;
    document.getElementById("question-number").innerHTML = "Question " + (qn + 1) + " of " + (questions.length);
    if (prev_answer == null) {
        document.getElementById("back_button").style.display = 'none';
        document.getElementById("back_button_off").style.display = 'block';
    } else {
        document.getElementById("back_button").style.display = 'block';
        document.getElementById("back_button_off").style.display = 'none';
    }

}

function next_question(mult) {
    radi += mult*questions[qn].effect.radi
    econ += mult*questions[qn].effect.econ
    stte += mult*questions[qn].effect.stte
    natn += mult*questions[qn].effect.natn
    conv += mult*questions[qn].effect.conv
    qn++;
    prev_answer = mult;
    if (qn < questions.length) {
        init_question();
    } else {
        results();
    }
}
function prev_question() {
    if (prev_answer == null) {
        return;
    }
    qn--;
    radi -= prev_answer * questions[qn].effect.radi;
    econ -= prev_answer * questions[qn].effect.econ;
    stte -= prev_answer * questions[qn].effect.stte;
    natn -= prev_answer * questions[qn].effect.natn;
    conv -= prev_answer * questions[qn].effect.conv;
    prev_answer = null;
    init_question();

}
function calc_score(score,max) {
    return (100*(max+score)/(2*max)).toFixed(1)
}
function results() {
    location.href = `results.html`
        + `?r=${calc_score(radi,max_radi)}`
        + `&e=${calc_score(econ,max_econ)}`
        + `&s=${calc_score(stte,max_stte)}`
        + `&n=${calc_score(natn,max_natn)}`
        + `&c=${calc_score(conv,max_conv)}`
}