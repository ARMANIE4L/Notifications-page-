# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/Screenshot%20(369).png)

### Links

- Solution URL:(https://www.github.com/ARMANIE4L/notifications-page)
- Live Site URL: [Add live site URL here](https://armanie4l.github.io/notifications-page)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript


### What I learned

While building this project, i learned how to use loops to iteratye through an array, in this case, my notificationsElements array.

    let notificationElements = [
        document.querySelector("#notification1"),
        document.querySelector("#notification2"),
        document.querySelector("#notification3"),
        document.querySelector("#notification4"),
        document.querySelector("#notification5"),
        document.querySelector("#notification6"),
        document.querySelector("#notification7")
    ]

    ##The iteration using the for loop

    for (let i = 0; i < notificationElements.length; i++)


### Continued development

I hope to continue practicing on how to use eventListeners to target specific events. It is a concept i hope to grab fully soon.

### Useful resources

- chatgpt.openai.com - This bot helped check and modify my conditional statements. It also suggested using the array instead to hardcoding all the notifications.


## Author

- Website - (https://www.github.com/armsnie4l/)
- Frontend Mentor - [@armanie4l](https://www.frontendmentor.io/profile/armanie4l)
- Twitter - [@armanie4l](https://www.twitter.com/armanie4l)


