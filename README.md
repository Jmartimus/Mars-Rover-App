Welcome to the MarsRoverApp!

This project calls the mars rover api at Nasa to load pictures of the Mars surface based on your date input. 

The MarsRoverApp was really fun to work on because it utilizes many technologies that I was able to learn and review. I will explain the route that this app takes and then give a little more information about the different technologies used.

1. Using Material Ui's picker, the user is able to pick any date from the beginning date of the library of photos until today.  Access is restricted for dates before pictures were taken and for days after today (since those pics haven't been taken yet).
2. Once a date is set, it is converted into the correct format within the date-choice component and assigned to a piece of global state that uses Recoil.js.
3. The photoDateState atom (recoil jargon for the piece of state that carries information from component to component) carries the information to the useNasa hook. This is a custom hook that calls the Nasa Api using an API key and the date that was set.  The useNasa hook then sets another atom ('photo') with the freshly called pictures and sends all this over to the image-render component.
4. In the image-render component the pictures are recieved and displayed.  If there are several pictures, the pictures are paginated using Material Ui's pagination component so that the user can pick the page they want to look at and view pictures from there. The pictures can also be clicked to zoom in using Material Ui's Modal component.
5. Lastly, this whole app can be reset using the 'reset' button which brings the app back to the beginning.

This app was built for fun and also for learning, I enjoyed working on it and plan to continue building projects like this.  I hope you enjoy the MarsRoverApp.