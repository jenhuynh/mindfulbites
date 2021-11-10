# Mindful Bites
<img src="https://img.icons8.com/windows/96/000000/lotus.png"/>

# Overview
Mindful Bites is a web app designed to improve mental health and well being. People are able to track their moods and get guided meditations based on how they are feeling.

<i>Feel free to view Mindful Bites on <a href="https://mindfulbites.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</a>.</i>

# Installation Process
###  Prerequisites
<p>This project relies on Docker to run the PostgreSQL server. You must install Docker first before continuing.

Use one of these methods to download Docker:
<ul>
  <li>Use <a href="https://brew.sh/">Homebrew</a> on macOS: brew install --cask docker</li>
  <li><a href="https://docs.docker.com/get-docker/">Follow the instructions on the Docker website</a></li>
</ul>

Once you've installed Docker Desktop, you'll need to launch the app. On macOS, it's located in /Applications/Docker.</p>

### Node and npm
<p>You'll need to install Node v14 and npm v8 or above.</p>

## Fork and Git Clone or Create a New Repository 
<p>Fork and learn to<a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"> Git Clone</a> my repository</p>
<p><a href="https://github.com/gsong/express-react-project-starter/generate">Generate a new repository </a>from this project.</p>
<p>See GitHub documentation for <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template">more details.</a></p>

# Set Up the Development Environment

<b> Install NPM Packages</b>
```sh
npm install
```
<b>Start the Development Environment</b>
```sh
npm start
```
<b>You should see the development environment display on <a href="http://localhost:3000"></a>http://localhost:3000.</b>

# Shut Down the Development Environment
1. `Ctrl-C` to stop the Express and React development servers.
1. `npm stop` to stop and destroy the PostgreSQL Docker container. Don't worry,
   your data is safe.

## Test the Web App on Heroku
<p>Here are some designated test users you can log in with to try out this app. 
 </p>
<img src="app/images/dylan_miles.jpg" >
<p><b>Dylan Miles</b></p>
<p><b>Email: </b>dylmiles160@gmail.com</p>
<p><b>Password: </b>dAFP?7\'</p>
<p>Date of Birth: February 12, 2005</p>
 <p><b>Bio:</b> Dylan Miles is a high school student at Oakridge High School. His school social worker recommended to use Mindful Bites to track his moods to understand his triggers more of when they tend to feel more anxious during the day.</p>

 <img src="app/images/diana_kim.jpg" >
 <p>Diana Kim</p>
<p><b>Email: </b>dianalinkim@gmail.com</p>
<p><b>Password: </b>>y8W6J(S</p>
<p>Date of Birth: November 8, 1991</p>
 <p><b>Bio:</b> Being a working adult, even after work Diana still felt stressed! She wondered why?! Diana started tracking her mood and started meditation. She found that the app helped managed her stress and helped her identify her triggers for when she felt stressed during meetings at work. </p>

# Tech Stack (PERN)
<h3><b> Tools </b></h3>
<ul>
  <li>Chrome Developer Tools</li>
  <li>VS Code</li>
  <li>TDD (Jest & RTL)</li>
  <li>Scrum</li>
  <li>Terminal</li>
  <li>Git</li>
  <li>GitHub</li>
</ul>

<h3><b> Languages </b></h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3><b> Frameworks </b></h3>
<ul>
  <li>PostgreSQL</li>
  <li>Express</li>
  <li>React.js</li>
  <li>Node.js</li>
</ul>

# MVP (Minimal Viable Product)
<ul>
  <li>User registration</li>
  <li>Form that tracks mood</li>
  <li>User receives a guided meditation based on mood entered</li>
</ul>

# Nice to Haves
<ul>
  <li>Add note component to mood tracker form</li>
  <li>Add photo component to mood tracker form</li>
  <li>Goals tracker</li>
  <li>Journal entry component</li>
  <li>Metrics gathering through like and dislike buttons </li>
  <li>Mood chart </li>
  <li>Export/downloaded mood history </li>
</ul>

# Data Schema

 <img src="https://raw.githubusercontent.com/jenhuynh/mindfulbites/main/mindful_bites_data_schema.png" width="300px">

 # Userflow
 <img src="https://raw.githubusercontent.com/jenhuynh/mindfulbites/main/mindful_bites_user_flow.png" width="300px">

 # Wireframe
 <img src="https://raw.githubusercontent.com/jenhuynh/mindfulbites/main/images/mindful_bites_mockup.png" width="300px">
<h6><i>Lotus icon by <a href="https://icons8.com/icon/WHysRa6y4Q4d/lotus">Icons8</a></i></h6>