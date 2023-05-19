# Work Day Scheduler

A browser-based daily planner application. This application features dynamically updated HTML and CSS powered by jQuery. The user can add events to a daily planner and keep track of tasks that need to be completed during standard business hours (9AM to 5PM).

## Screenhot

Here is a screenshot of the application:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Live Demo

Here is a live demo for the application here: 
[Live Demo](https://eanthonycarranza.github.io/Work-Scheduler/)
## Features

* Current day is displayed at the top of the planner.
* Timeblocks are avalible for standard business hours.
* Each timeblock is color-coded to reference the past,present, or future times.
* Users can click into a timeblock to enter an event.
* The event text is save onto local storage when the save button for that timeblock is clicked.
* Saved events persist om the page even if the user refershes the page.

## File structure

### index.html

This file contains the HTML structure for the Work Day Scheduler which defines the visual layout to include a header for the current day and series of time blocks that are representing standard buisness hours. Each time block consists of an hour label, a text area for the user to input an event, and a save button to store the event in the browser's local storage.

### script.js

This JavaScript file powers the dynamic functionality of the work scheduler. It uses jQuery to add event listeners, manipulate the DOM, and interact with the broweser's local storage. The files code to:

* Display the current time for the planner.

* Apply past, present, or future CSS classes to each time block based on the current hour.

* Retrieve and display the user's saved events from local storage when the page is refreshed.

### style.css

This file contains the custom CSS styles for the application. It defines styles the elements and states, including: 

* General styles: Font settings that are being applied to the body of the document, and textarea elements are styles to have a transparent background, no border, and other properties.

* Time block styles: Each time block, represented by the .time-block class, is given a specific border radius. The .row class has a white border on top.

* Hour label styles: The .hour class sets the background color and text color of the hour labels and applies a dashed black border at the top.

* Past, present, future styles: The .past, .preset, and .future classes color-code the time blocks depending on whether the hour they represent is in the past(grey), present(red), or future(green).

* Save button styles: The .saveBtn class styles the save button with a border, border radius, and specific colors, When the user hovers other the save button, the icon inside it increases in size due to the styles in the .saveBtn i:hover rule.

# License

This project is licensed under the MIT License.

