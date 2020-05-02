//CHART
chartIt();

async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('chartUK').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xs,
            datasets: [
                {
                label: 'COVID-19 cases in the UK',
                data: data.ys,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 5
            },
        {
            label: 'COVID-19 deaths in the UK',
                data: data.zs,
                fill: false,
                borderColor: 'rgba(173, 122, 30, 1)',
                borderWidth: 5
        }],
        },
        options: {
          scales: { 
          gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false},
            xAxes: [{
              scaleLabel: {
                // display: true,
                // labelString: 'Day, month, year of reporting'
              },
            }],
          },
        },
    });
}
// COVID-19 API

async function getData() {

    const xs = [];
    const ys = [];
    const zs = [];
    const response = await fetch('covid19/coviduk.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const column = row.split(',')
        const date = column[0];
        xs.push(date);
        const cases = column[4];
        ys.push(cases);
        const deaths = column[5];
        zs.push(deaths);
        console.log(date, cases, deaths);
    });
    return { xs, ys, zs};
}

// Smooth scroll
$(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
            800
        );
    }
});

// Bottom of the page
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        alert("You have reached the bottom.");
        alert("I hope you have enjoyed my website which is intended for educational demonstrations only.");
        alert("REMEMBER: follow government guidelines and stay indoors unless you need essential items, you are part of the essential workforce and/or need to exercise!");
    }
});

// QUIZ

function tabulateAnswers() {
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;

    var choices = document.getElementsByTagName('input');

    for (i = 0; i < choices.length; i++) {

        if (choices[i].checked) {

            if (choices[i].value == 'c1') {
                c1score = c1score + 1;
            }
            if (choices[i].value == 'c2') {
                c2score = c2score + 1;
            }
            if (choices[i].value == 'c3') {
                c3score = c3score + 1;
            }
        }
    }

    var maxscore = Math.max(c1score, c2score, c3score);

    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) {
        answerbox.innerHTML = "<h1>Phone 999 now for an ambulance</h1><br><h2>You must tell the operator that you might have coronavirus symptoms.</h2><br><p>The 999 operator will ask:<li>where you are</li><li>for your phone number in case you get cut off</li><br>The ambulance crew might arrive wearing protective clothing so that the virus is not spread.<br>Do not go to a GP or hospital instead of calling for an ambulance.</p>";
    }
    if (c2score == maxscore) {
        answerbox.innerHTML = "<h2>Book a call with a 111 nurse</h2><br><p>A nurse from the COVID clinical response service needs to speak to you.<br>When you book a call the nurse will:<li>know the answers you have already given</li><li>ask you some more questions about your symptoms and current health</li><br>It’s important that you speak to the nurse. You should get a call within 2 hours. The 111 service is very busy, so it could take longer than usual.</p>";
    }
    if (c3score == maxscore) {
        answerbox.innerHTML = "<h1>It's unlikely you have coronavirus - what to do next about your symptoms</h1><br><p>As you:<br><li>do not have a high temperature</li><li>do not have a continuous cough</li><br>It's unlikely you have a coronavirus (COVID-19) infection as these are the most common symptoms.</p>";
    }
}

function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
}

//Slides

var slideAtOne = 1;
showSlides(slideAtOne);

function plusSlides(n) {
    showSlides(slideAtOne += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("quizSlides");
    if (n > slides.length) { slideAtOne = 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideAtOne - 1].style.display = "block";
}