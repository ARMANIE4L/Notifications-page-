document.addEventListener("DOMContentLoaded", function () {
    let notificationElements = [
        document.querySelector("#notification1"),
        document.querySelector("#notification2"),
        document.querySelector("#notification3"),
        document.querySelector("#notification4"),
        document.querySelector("#notification5"),
        document.querySelector("#notification6"),
        document.querySelector("#notification7")
    ]
 

    let notifNumber = document.querySelector("#notifNumber")
    let markAll = document.querySelector("#markAll")
    let calcNotifNumber = notificationElements.length
    notifNumber.innerHTML = calcNotifNumber

    function updateNotifNumber() {
        notifNumber.innerHTML = calcNotifNumber
    }

    let unread = true

    for (let i = 0; i < notificationElements.length; i++) {
        notificationElements[i].style.backgroundColor = "rgb(185, 211, 235)";
        
        notificationElements[i].addEventListener("click", function () {
            if (calcNotifNumber > 0 && notificationElements[i].style.backgroundColor === "rgb(185, 211, 235)") {
                    unread = false
                    notificationElements[i].style.backgroundColor = "gray"
                    calcNotifNumber--; 
                    updateNotifNumber()
            } 
        })

        markAll.addEventListener("click", function () {
            notifNumber.innerHTML = "0"
            notificationElements[i].style.backgroundColor = "gray"
        })
    }



})