# OOP-Team-Profile-Generator

## Description
Webpage is a team profile generator ran with node. When index is ran the terminal will prompt user user to answer questions for a manger an employees. The user can choose between engineer and intern as options for employee roles. Once the questions are answered a index.html is generated with the users input. The index consists of a header and cards for each employee that was entered. Upon clicking employee email the app will open up your default email to send an email to the selection. Selecting the github username will open the user on GitHub.

## Dev Notes 
Classes for manager, intern and engineer are stored in lib and required by Employee class also stored in lib folder.

Generatehtml created blocks for each employee type and joins them to the main html code based on user seleciton. 

index.js requires the abforementioned classes, html, fs and inquirer. It includes the prompts for the user, determines roles based on user input, and writes to the index.html file.
## Walkthrough video
https://youtu.be/mR-5JB491II
![Alt Text](./media/walkthrough-tpg.gif)
## Site Link
https://will-pikus.github.io/OOP-Team-Profile-Generator/