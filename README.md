# Week 1 Assignment: Flixster
Submitted by: **Roberto Martinez**

Estimated time spent: **6** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://facebook-university-projects.github.io/flixster_starter/)

## Application Features

### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

`NOTE` I switched up the load more current movies feature by using an infinite scroll instead of a button. This is because it would result in a better user experience since they wouldn't have to press a button and just have the new movies rendered as they scroll to the bottom of the page

`NOTE` I switched up the search feature to render the movies on change of input rather than a submit button. This would be better UX to automatically load the movies as they are typing, increasing movie discoverability.

### STRETCH FEATURES

- [x] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

`RESPONSE` The topics discussed helped me prepare for the final assignment. Learning the fundamentals allowed for me to do the flixster project on my own.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

`RESPONSE` If I had more time, I most likely would have added more search filters so that the user can find their way to their requested movie faster. I would have added lazy loading for the movie images as those can slow down the performance of the website if just rendered all at once.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

`RESPONSE` I enjoyed making some of the features into my own. I liked that there was freedom of choice when building this project. I would of liked to include more navigation features such as filtering or accounts.

### Open-source libraries used

`N/A`

### Shout out

Phineas,
