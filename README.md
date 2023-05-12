# Spiel-Take-Home
A UI take-home assignment

## Time taken
### Around 9 hours
- 4 hours furiously googling and learning React Native because I only know React, jaja
- 3 hours actually doing the work
- 2 hour refactoring code so that:
    - all the components are separate 
    - CSS values are stored in constants
    - Typescript interfaces are written
    - Directory structure is "production ready"
    - Data is passed in as though they were fetched (Everything renders dynamically)
    - Pressable components are switched to <Pressable>

## More comments
### Learning React Native
- It's quite different from React, and there are a lot of little kinks like Pixel translation and mobile-specific key components
- The code is still not perfect:
  - The image of the restaurant should've been in a slider component (hence no slider dots)
  - Not all CSS values are passed dynamically
  - Some short-term solutions are used to style some navbar icons because I ran out of time
  - I tried to use strictly Figma values but some of the rendered result looks different =. I opted for "visual proximity" over "parameter proximity". 
  - a dropdown arrow is missing from the upper navbar.

### Rendered result (if you don't want to 'npm install' 10000000 expo and react native packages on your machine)
![Screenshot from 2023-05-12 15-45-43](https://github.com/iggeehu/Spiel-UI/assets/69414708/c9d40b07-1bba-497d-95f2-2fc8c3c3ab24)
