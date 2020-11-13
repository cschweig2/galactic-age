# Galactic Age Calculator

#### Code Review, Last Updated 11.13.2020

#### **By Chelsea Becker**

## Description

_This application will determine a user's age based on a planet's solar years._

## Setup/Installation Requirements
### View Online
1. _Open the webpage at https://cschweig2.github.io/galactic-age._
2. _Do x, y, and z to navigate application._

### View locally (on computer)
1. _Open web browser and go to https://github.com/cschweig2/galactic-age._
2. _After clicking the green "code" button, you can copy the URL for the repository._
3. _Open a terminal window, such as Command Prompt or Git Bash._<br>
  3a. _Type in this command: "git clone", followed by the URL you just copied. The full command should look like this: "git clone https://github.com/cschweig2/galactic-age"._
4. _You may view the website displaying the application by clicking the index.html file or view the code on your favorite text editor, such as Visual Studio Code._

## Known Bugs

1. _List known bugs, if any._

## Test Specs

<table>
  <tr>
    <th>Test #</th>
    <th>Expected Behavior</th>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Create a constructor that holds age and average life expectancy.
    <td>ageCalculator(25, 73)</td>
    <td>toEqual(25, 73)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Calculates age on Mercury</td>
    <td>ageMercury(25)</td>
    <td>toEqual(104)</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Calculates age on Venus</td>
    <td>ageVenus(25)</td>
    <td>toEqual(40)</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Calculates age on Mars</td>
    <td>ageMars(25)</td>
    <td>toEqual(13)</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Calculates age on Jupiter</td>
    <td>ageJupiter(25)</td>
    <td>toEqual(2)</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Calculates life expectancy based on user input</td>
    <td>lifeExpectCalc(activityLevel, stressLevel)<br>activityLevel: 2, stressLevel: 6</td>
    <td>toEqual(63)</td>
</table>
<br>


## Support and contact details

_If you run into any issues, you can contact the creator at cschweig2@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch._

## Technologies Used

_VS Code_ <br>
_HTML_ <br>
_CSS_ <br>
_Bootstrap_ <br>
_JavaScript_ <br>
_JQuery_ <br>

## Legal

*This software is licensed under the MIT license.*

Copyright (c) 2020 **Chelsea Becker**