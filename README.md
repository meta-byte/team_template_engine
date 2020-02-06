# team_template_engine


## Overview

A command line application that allows a user to generate a roster for an engineering team by following prompts. The user is prompted to add a Manager and then is prompted to a add however many Interns or Engineers they want. Once the user has completed adding team members, a name can be chosen and a stylized "team.html" file is created in the "Output" folder. Emails and github usernames entered will become usable links. The Materialize CSS framework was used for the styling of the roster. This application was designed to test my skill with Test Driven Development. Tests were passed prior to the development of the application. Object oriented programming was also a focus as objects are created from classes and constructors.


### Gallery

![Demo1](/demogifs/team_template_demo1.gif "Follow the prompts.")

![Demo2](/demogifs/team_template_demo2.gif "Generate a team roster.")

[Sample Team](output/sampleteam.pdf)

## Tech and Features Used

| Feature       | Summary                                                                                                  | 
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Materialize CSS Framework | Used Materialize to style the "team.html" document that is generated at the end of the prompts.|
| Node.js       | Node.js was used to run the application in testing and is what the app is designed to use.               |
| Inquirer      | Inquirer was used to ask the user questions and store their answers for use with Materialize and Github API. |
| Axios         | All Github API calls were done using the Axios package.                                                    |
| Util          | Util was used to allow me to asynchronously write the HTML file.                                             |


## Required Packages

* Inquirer
* Axios
* Util


## How to use

* Run Node on index.js
* Follow prompts to add team members
* Choose "n" when asked to ask another team member.
* Choose a team name. 
* "team.html" is generated in the "Output" folder. 


## Known Bugs

* Currently no form of validation anything can be entered in the prompts. 
* Entering an invalid Github username may cause the program to stop in some instances.
* An invalid Github username will still be a link and clicking it will give the user a 404 error.


## Future Development

* User will be able to choose the color palette of the document.
* Validation will be added to create a smoother user experience.

## Contact Info

mail: hylander.garrett@gmail.com

Phone: (801)-592-0371

[Linkedin](https://www.linkedin.com/in/garrett-h-859007a0/)
