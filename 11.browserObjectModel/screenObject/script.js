//CHAPTER-3 SCREEN OBJECT

/* A. INTRODUCTION TO SCREEN OBJECT
  1. The window.screen object contains information about the user's screen.
  
  2. The screen object in JavaScript provides information about the user's screen or display
     environment. It contains properties that describe various characteristics of the screen, 
     such as its dimensions, color depth, and pixel density.
     
  3. Browsers are responsible for managing the rendering and display of web content on various
     devices, including desktops, laptops, tablets, and smartphones. To accurately render content
     and provide a seamless user experience, browsers need to have access to information about 
     the user's screen or display environment. This is where the screen object comes into play. 
     
  4. Internally, browsers can access screen details using the screen object through Platform-
     Specific APIs provided by the device's Operating System.
     
  5. When a web page is loaded or when screen-related properties are accessed in JavaScript code, 
     the browser queries the operating system for information about the screen, such as its dim-
     ensions, color depth, pixel density, and orientation. 
     
  6. The Operating System provides APIs that allow browsers to retrieve screen-related information. 
     These APIs may vary depending on the platform (e.g., Windows, macOS, Linux, iOS, Android) and
     the programming environment (e.g., WinAPI, Cocoa, X11, Android SDK). 
     
  7. Once the screen details are obtained from the operating system, the browser exposes this inf-
     ormation through the properties and methods of the screen object in JavaScript. Developers
     can then access these properties to programmatically adapt their web applications based on 
     screen characteristics. */




/* B. PROPERTIS OF SCREEN OBJECT
  1. screen.width(R): Represents the width of the screen in pixels. Indicates the horizontal re-
     solution of the screen.
     
  2. screen.height(R): Represents the height of the screen in pixels. Indicates the vertical re-
     solution of the screen.
     
  3. screen.availWidth(R): Represents the width of the available screen space for displaying cont-
     ent, excluding taskbars, toolbars, and other operating system elements. May be smaller than
     the screen.width if the screen is not maximized or if operating system elements are present.
     
  4. screen.availHeight(R): Represents the height of the available screen space for displaying content,
     excluding taskbars, toolbars, and other operating system elements. May be smaller than the
     screen.height if the screen is not maximized or if operating system elements are present.
     
  5 screen.colorDepth(R): Represents the color depth of the screen in bits per pixel. Indicates the
    number of distinct colors that can be displayed on the screen. Higher color depth values result 
    in better color accuracy and visual quality.
    
  6. screen.pixelDepth(R): An alias for screen.colorDepth. Provides the same information about the color
     depth of the screen.
     
  7. screen.orientation(R): Represents the orientation of the screen, landscape or portrait in relation
     to its width and height. Provides information about the current orientation of the device, if 
     supported by the browser. This property returns an object of type ScreenOrientation, which
     contains details about how the screen is currently oriented. The screen.orientation object exposes
     several properties to query and monitor the orientation state of the screen:
     
     - type(R): Represents the current orientation type of the screen. Possible values include:
       a) portrait-primary: The screen is in the default portrait orientation (upright).
       b) portrait-secondary: The screen is in portrait orientation but upside down.
       c) landscape-primary: The screen is in the default landscape orientation (horizontal).
       d) landscape-secondary: The screen is in landscape orientation but rotated 180 degrees.
       
     - angle(R): Represents the current orientation angle of the screen. This is an integer value. This
       value indicates how much the screen is rotated clockwise from its natural orientation. */


  //Example-1
  console.log("Screen width:", screen.width);
  console.log("Screen height:", screen.height);


  //Example-2
  console.log("Available screen width:", screen.availWidth);
  console.log("Available screen height:", screen.availHeight);


  //Example-3
  console.log("Pixel depth:", screen.pixelDepth, "bits per pixel");


  //Example-4
  if (screen.orientation) {
    console.log("Screen orientation:", screen.orientation);
  } else {
    console.log("Screen orientation not supported.");
  }