# Covid-19 in the UK

## Project 2: Interactive Frontend Development - Code Institute
The purpose of my website is to attract web traffic from consumers who are looking for knowledge of the latest diesease,  the coronavirus, which also known as covid-19. With the sudden and global impact cause by this disastrous disease, now more than ever, it is vital to produce accurate information that'll help keep people safe, knowledgeable and prevent the spread of covid-19. 

A live demo can be seen <a href="">here</a>.

## UX
My website is for everyone and anyone that may potentially be affected by this global pandemic. I want consumers to be able to soak of information provided on my website that will keep them safe, prevent the spread of the disease and ultimately flatten the curve. I aim to do so with a sleek and modern looking website, eye catching statistical information, a self-help section, a frequently asked question section, a dos and don'ts table and a by nature, a bold yet simplistic color scheme.

As a citizen concerned about the wellbeing of others and myself during this pandemic, I want information to be as clear and concise as possible, so that I can help prevent the spread of covid-19.
As a mother, I want to find general information on covid-19, so that I can better look after my family and keep them informed.
As a nurse, I want to make sure misinformation isn't being spread, so that the greater good of the human race is at the forefront against covid-19.

## Features
Bootstrap features such as the navbar, in conjuction with the jQuery smooth scroll, have been implemented to create a sleek and simple navigation tool that'll snap to the sections of page when clicked upon.

Chart.js allowed me to creative responsive and interactive statistical graphs which the user may interact with.

The form feature allows users to take part in a symptoms check up questionnaire which gives users different answers based on their answers. Users may also reset their answers to give new ones. This was solely allowed to work with the help of javascript.

A few other boostrap feaures (collapse, show, nav-pills) allowed for a well put together faq section. This allows the user to experience a neat and sleek way to obtain information upon clicking the question.

A "bottom of page" javascript code intiates messages once users have made their way through and to the bottom of the website.

When on mobile devices with a width of <576px I used JQuery code that automatically closes the navbar when a link is clicked.

Future additional features: a next/previous slideshow of the questionnaire.

## Technologies Used
- HTML: to structure and layout web content
- CSS: it is fundamental to web design and how it looks
- Bootstrap (4.3.1): it gives me a solid foundation of which I can build upon
- JQuery: a smooth scroll is used to give the user a seamless switch between sections
- Javascript: allows me to create more user interaction, for example within the questionnaire it allows multiple answers to be shown based on the answers submitted as well as reset those options.

## Testing

devices tested: tested microsoft edge: fine

internet explorer: graph does not load and bullet points are outside of the box

resolution tested eg iphone x (specs, is it supported?) ipad

links working, stats fine, quiz working, faq running as intended

to be completed.

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
I deployed my site to Github pages directly from the master branch. [steps i done to upload it] The deployed site will update automatically upon new commits to said branch. In order for the site to deploy correctly on GitHub pages, the landing page has been named index.html.
To run locally, you can clone this repository directly into the editor of your choice by pasting "git clone https://github.com/alexrem1/Interactive-Frontend_Development.git" into your terminal. To cut ties with this GitHub repository, type "git remote rm origin" into the terminal.

## Credits
Content: All content from my project was produced by except from
- The frequenly asked question design: <a href="https://codepen.io/moso/pen/vKGxMx">Morten Sørensen</a>
- Statistics Data converted into filtered UK data <a href="https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases">ECDC</a> 
- Questionnaire design and Javascript: <a href="https://codepen.io/amyfu/pen/oLChg">Amy</a>
- <a href="https://www.youtube.com/watch?v=V9CY0F4Wc7M">Scroll event</a> 
- <a href="https://youtu.be/y9nlfqT4s9s?t=1025">Smooth scroll JQuery</a> 

Media: the logo created for use in this site was obtained from <a href="https://www.freelogodesign.org/">here.</a>

## Acknowledgements
I received some inspiration for this project from the NHS 111.