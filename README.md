# Covid-19 in the UK

## Project 2: Interactive Frontend Development - Code Institute
The purpose of my website is to attract web traffic from consumers who are looking for knowledge of the latest diesease,  the coronavirus, which also known as covid-19. With the sudden and global impact cause by this disastrous disease, now more than ever, it is vital to produce accurate information that'll help keep people safe, knowledgeable and prevent the spread of covid-19. 

A live demo can be seen <a href="https://alexrem1.github.io/Interactive-Frontend-Development/">here</a>.

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


## Technologies Used
- HTML: to structure and layout web content
- CSS: it is fundamental to web design and how it looks
- Bootstrap (4.3.1): it gives me a solid foundation of which I can build upon
- JQuery: a smooth scroll is used to give the user a seamless switch between sections
- Javascript: allows me to create more user interaction, for example within the questionnaire it allows multiple answers to be shown based on the answers submitted as well as reset those options.

## Testing

I have tested my website manually in the following ways:

1. Links:
    1. Clicked on the link
    2. Smooth scroll worked as intended and transitioned to the corresponding section.

2. Bar Chart:
    1. Unhide hidden "COVID-19 deaths in the UK" by clicking on the corresponding legend and then hide it
    2. Hide "COVID-19 cases in the UK" by clicking on the corresponding legend and then unhide it
    3. Hover over the individual dates on the graph for a summary of what occured that eg cases and/or deaths
    4. All actions worked as intended.
    5. However, I did notice that even with the "required" attribute in place, I was still able to click submit and recieve the default questionnaire answer outcome.

3. Questionnaire:
    1. Fill in answers for each question by clicking on desired options
    2. Click on submit to reveal outcome of selected answers
    3. Click on reset to reset the checked options and to hide the revealed questionnaire answer outcome
    4. All actions worked as intended.

4. FAQ:
    1. Click on a frequently asked question to reveal the answer
    2. Click on it again to hide the answer
    3. All actions work as intended.

5. Scrolled to the bottom:
    1. Scroll to the bottom
    2. Make my way through the pop up alerts
    3. All actions worked as intended

I have tested my website on
- Google Chrome
- Firefox
- Microsoft Edge
Compatability and functionality all work the same across all three browsers and work as intended.

Different screen sizes I have tested my website on include
- my laptop that has a screen size of 1171.2px(width) and 57.6px(height)
- my iPhone XS that has a 267.84px(width) and 542.4px(height)
- a macbook air that has 2560px(width) and 1600px(height)
- various chrome developer tools:
    - iPhone X 375px(width) and 812px(height)
    - iPad 768px(width) and 1024px(height)
    - iPad Pro 1024px(width) and 1366px(height)
Compatability and functionality all work the same across all three browsers and work as intended.

## Deployment
I deployed my site to Github pages directly from the master branch. Initially a new empty repository should be created via the "git init" command. Once my project was completely finished I typed "git status" in the command terminal. This command displays the state of the working directory and the staging area. It lets me see which changes have been staged, which haven't, and which files aren't being tracked by Git. My project files had been changed and needed to be added to the staging area ready for a commit and I do this with this by typing "git add (file path and/or file name)". Once all files have been added to the staging area I am now ready to commit, to do this I issue this command in the terminal "git commit -m "(messages explaining what you are committing)". Now that is done, I am are ready to push my code to our remote repository with the command "git push". The deployed site will update automatically upon new commits to said branch. In order for the site to deploy correctly on GitHub pages, the landing page has been named index.html.

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