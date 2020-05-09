//CHART
// We use asynchronous function that's making asynchronous calls with the await keyword
async function chartIt() {
    // charIt is going to wait until the data is done
    const data = await getData();
    const ctx = document.getElementById('chartUK').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.encounter,
            datasets: [
                {
                    label: 'COVID-19 cases in the UK',
                    data: data.cases,
                    borderColor: 'rgba(0, 0, 0, 0.7)',
                    borderWidth: 5,
                },
                {
                    label: 'COVID-19 deaths in the UK',
                    data: data.deaths,
                    borderColor: 'rgba(173, 122, 30, 1)',
                    borderWidth: 5,
                    hidden: true,
                }],
        },
        options: {
            scales: {
                gridLines: {},
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    },
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
            },
        },
    });
}
// Finally we call the function
chartIt();

async function getData() {
    // local variables
    const encounter = [];
    const cases = [];
    const deaths = [];
    const response = await fetch('covid19/coviduk.csv');
    const data = await response.text();
    // We want to split up all the rows and then each row, we want to split up all the columns. 
    // I'll start splitting data by a line break and using the slice function to get element 2 (index 1) to the end. I don't need the first row.
    const table = data.split('\n').slice(1);
    // I then split each one of these rows into the rows I need for my graph
    // forEach is a higher order function that allows me to apply something to every element of the array and each element of the array is represented by this variable row
    table.forEach(row => {
        // I want to split each row with commas
        const column = row.split(',')
        // Here I want the dates
        const date = column[0];
        // I want to parse this data and push it to the chart
        encounter.push(date);
        // Here I want the cases
        const UKcases = column[4];
        cases.push(UKcases);
        // Here I want the deaths
        const UKdeaths = column[5];
        deaths.push(UKdeaths);
    });
    // return object with all those arrays
    return { encounter, cases, deaths };
    // summary: I'm getting the raw data as text, I'm splitting it up, putting it into a variable called table, going through each row of the table and splitting each row into its corresponding columns.
}

// Smooth scroll
// We want to add an event "onclick" that grabs all the navbar links
$(".navbar a").on("click", function (e) {
    // We want to see if the hash value exists
    if (this.hash !== "") {
        e.preventDefault();
        // hash value goes into a variable
        const hash = this.hash;
        // target the body and call animate method
        $('html, body').animate({
            // animate will take an object and one of the property I will add is scrollTop
            scrollTop: $(hash).offset().top
            // It will scroll down from the top
        },
            // The speed parameter
            800
        );
    }
});

// Auto hide navbar in mobile
// We want to grab all the collapsed navbar links so when it is clicked, the navbar hides
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

// Bottom of the page
// add event listener for the window object with scroll as the first argument. The second argument: function to be executed when the user scrolls up and down the webpage
window.addEventListener("scroll", () => {
    // new constant equal to height of the document subtracted by height of the window
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    // New constant equal to the amount the user has scrolled down
    const scrolled = window.scrollY;
    // math.ceil rounds up the floating number of scrolled to the next decimal
    if (Math.ceil(scrolled) === scrollable) {
        alert("You have reached the bottom.");
        alert("I hope you have enjoyed my website which is intended for educational demonstrations only.");
        alert("REMEMBER: follow government guidelines and stay indoors unless you need essential items, you are part of the essential workforce and/or need to exercise!");
        alert("Let's all do our bit to flatten the curve and protect the NHS! Have a good day.");
    }
});


// QUIZ
//     Copyright (c) 2020 by Amy (https://codepen.io/amyfu/pen/oLChg)
//     Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//     The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// function to calculate the result of the questionnaire
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i = 0; i < choices.length; i++) {
        // if the radio is checked..
        if (choices[i].checked) {
            // add 1 to that choice's score
            if (choices[i].value == 'c1') {
                c1score = c1score + 1;
            }
            if (choices[i].value == 'c2') {
                c2score = c2score + 1;
            }
            if (choices[i].value == 'c3') {
                c3score = c3score + 1;
            }
            // If you add more choices and outcomes, you must add another if statement below.
        }
    }

    // Find out which choice got the highest score.
    // If you add more choices and outcomes, you must add the variable here.
    var maxscore = Math.max(c1score, c2score, c3score);
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');

    if (c1score == maxscore) {// If user chooses the first choice the most, this outcome will be displayed.
        answerbox.innerHTML = "<h1>Phone 999 now for an ambulance</h1><br><h2>You must tell the operator that you might have coronavirus symptoms.</h2><br><p>The 999 operator will ask:<li>where you are</li><li>for your phone number in case you get cut off</li><br>The ambulance crew might arrive wearing protective clothing so that the virus is not spread.<br>Do not go to a GP or hospital instead of calling for an ambulance.</p>";
    }
    if (c2score == maxscore) {// If user chooses the second choice the most, this outcome will be displayed.
        answerbox.innerHTML = "<h2>Book a call with a 111 nurse</h2><br><p>A nurse from the COVID clinical response service needs to speak to you.<br>When you book a call the nurse will:<li>know the answers you have already given</li><li>ask you some more questions about your symptoms and current health</li><br>It’s important that you speak to the nurse. You should get a call within 2 hours. The 111 service is very busy, so it could take longer than usual.</p>";
    }
    if (c3score == maxscore) {// If user chooses the third choice the most, this outcome will be displayed.
        answerbox.innerHTML = "<h1>It's unlikely you have coronavirus - what to do next about your symptoms</h1><br><p>As you:<br><li>do not have a high temperature</li><li>do not have a continuous cough</li><br>It's unlikely you have a coronavirus (COVID-19) infection as these are the most common symptoms.</p>";
    }
    // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
}