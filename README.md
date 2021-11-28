# NCS Problem Simulator
------------------------------
## Overview
------------------------------
This is the final project of 2021_Fall_OSSP.
NCS Problem Simulator provides autogenerated calculation problems, measures time to solve problems by timer, and grades answers that user inputs.
Users can practice managing time spent while solving problems, and check skill levels by grading results. 
## Features
---------------------------------
+ Random problem generator : creates random multiplication and division problems.
+ Timer : Timer starts after 3 seconds of countdown(Preparation time). Clicking grading button stores the time spent.
+ Save current screen as PDF : users can save screen as PDF and prints it in order to solve problems by hand like actual test sites.
+ Grading : grades answer of users, then suggests user skill level based on scores and spent time.
## Installation
-------------------------------------
1. Download a zip file from lateset relase of Github repository.
2. Extract the zip file.
3. Access web page by 'index.html'.
## How to use
-------------------------------------
1. First page shows brief how to use guide and grading criteria. User goes to problem solving page by clicking 'Create new problems' button.
2. Problems are auto-generated. If users want to change problems, users click 'Recreate problems' button.
3. Users can save current problem solving page as PDF and prints it out by 'Save as PDF' button.
4. Timer starts by clicking start icon(▶) of timer. After 3 seconds of countdown, timer starts. Users can stop and reset timer by stop icon(⏹), or pause timer by pause icon.(⏸︎)
5. User inputs answers in white box between numbers by keyboard. After finishing answer inputs, pressing 'Grading' button will stops timer and notifiy users correct/incorrect answers.
6. Users can check final results based on incorrect problems and spent time at the bottom of pages.
7. Users can go back to first page by clicking 'Back to first page' button, or solve other problems by clicking 'Recreate Problems' button.
## Extension
--------------------------------------
```` javascript
if (Math.abs(eval(questionArray1[i].innerHTML) - eval(questionArray2[i].innerHTML)) > 200)
{
    i--;
}

if (Math.abs(result1 - result2) > 0.01) 
{
                    i--;
}        
````
Users can change the level of problem difficulty by modifying numerical values of codes above.
This will help users to practice easier problems and improve themselves by increasing difficulty gradually.
Codes of level adjustment part is in the makeExp() function of test.html.
## Releases
--------------------------------------
v0.1.0
- Create button of making PDF file
- Modifying padding

v1.0.0
- Fix minor bug
- Design changes
- Adjust the level of difficulty
- Add Readme file

v1.0.1
- Update fonts
- Add thumbnail image
## ScreenShots
--------------------------------------
- Main page
<img width="80%" src="https://user-images.githubusercontent.com/92297642/143734625-c06a726f-0145-4b81-a6e1-ea3305a2bc11.png"/>

- Test page
<img width="80%" src="https://user-images.githubusercontent.com/92297642/143734483-ab3449b3-1f35-4dee-ba57-7e298204e970.png"/>

- Result
<img width="80%" src="https://user-images.githubusercontent.com/92297642/143734610-b83e52c0-142f-406a-acdb-9781d2fc1704.png"/>

## Demo Video
--------------------------------------
https://user-images.githubusercontent.com/92297642/143735222-87597279-a101-4960-ac7c-fcbda91b44db.mp4

## Members
--------------------------------------
+ Hanbin Lee, 2016313695
  + E-Mail) binch9431@skku.edu
+ Sihyeon Hong, 2017311200
  + E-Mail) hongsihyeon179@gmail.com
+ HyunJoong Kim, 2017312334
  + E-Mail) khj98@skku.edu
