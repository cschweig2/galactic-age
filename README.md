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
    <td>AgeCalculator(25, 73)</td>
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
    <td>lifeExpectCalc()<br>activityLevel: 2, stressLevel: 6, vegIntake: 2</td>
    <td>toEqual(58)</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Adds to ageMercury() to output users expected years left of life on Mercury</td>
    <td>ageMercury(25)</td>
    <td>toBe('You are 103 years old on Mercury and you have 200 years left to live')</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Adds to constructor to include activity level, stress level, and vegetable intake to calculate life expectancy, and preset base life expectancy to 73</td>
    <td>AgeCalculator(25,2,6,2)</td>
    <td>toEqual(25,2,6,2)</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Adds to ageVenus() to output users expected years left of life on Venus</td>
    <td>ageVenus(25)</td>
    <td>toBe('You are 40 years old on Venus and you have 78 years left to live')</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Adds to ageMars() to output users expected years left of life on Mars</td>
    <td>ageMars(25)</td>
    <td>toBe('You are 13 years old on Mars and you have 26 years left to live')</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Adds to ageJupiter() to output users expected years left of life on Jupiter</td>
    <td>ageJupiter(25)</td>
    <td>toBe('You are 2 years old on Jupiter and you have 4 years left to live')</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Adds to ageMercury() to output years user has lived past life expectancy, if applicable</td>
    <td>ageMercury(75)</td>
    <td>toBe('You are 313 years old on Mercury and you have surpassed the life expectancy by 9 year(s)')</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Adds to ageVenus() to output years user has lived past life expectancy, if applicable</td>
    <td>ageVenus(75)</td>
    <td>toBe('You are 121 years old on Venus and you have surpassed the life expectancy by 3 year(s)')</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Adds to ageMars() to output years user has lived past life expectancy, if applicable</td>
    <td>ageMars(75)</td>
    <td>toBe('You are 40 years old on Venus and you have surpassed the life expectancy by 1 year(s)')</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Adds to ageJupiter() to output years user has lived past life expectancy, if applicable</td>
    <td>ageJupiter(75)</td>
    <td>toBe('You are 40 years old on Venus and you have surpassed the life expectancy by 1 year(s)')
  </tr>
  <tr>
    <td>16</td>
    <td>Test lifeExpectCalc() under all conditions (all additions to life expectancy)</td>
    <td>lifeExpectCalc()</td>
    <td>toEqual(93)</td>
  </tr>
  
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