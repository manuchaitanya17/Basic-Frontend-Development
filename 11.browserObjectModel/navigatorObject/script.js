//CHAPTER-6 NAVIGATOR OBJECT

/* A. INTRODUCTION TO NAVIGATOR OBJECT
  1. The navigator object in JavaScript provides information about the BROWSER ENVIROMENT and the USER'S 
     SYSTEM.
     
  2. It contains properties and methods that allow developers to access various details about the browser, 
     such as its name, version, platform, and capabilities. However, most of the properties are read-only,
     meaning that their values cannot be modified directly by JavaScript code. This is a security measure
     to prevent web applications from spoofing or falsifying the browser's identity.
  
  3. The navigator object is created by the browser during the initialization process when a new browsing
     session begins. */




/* B. NAVIGATOR OBJECT PROPERTIES
  1. navigator.userAgent: Returns the user-agent string representing the browser.
  
  2. navigator.platform: Returns the platform(OS) on which the browser is running  ("Win32","MacIntel").
  
  3. navigator.language: The navigator.language property returns a string representing the preferred language
     of the user's browser. This preference is typically derived from the browser's settings or the operating 
     system's language settings. Additionally, when a browser sends requests to web servers, it includes an
     Accept-Language Header in the HTTP request. This header indicates the preferred language(s) of the user 
     as configured in the browser settings.
  
  4. navigator.onLine: 
   - Returns a boolean indicating whether the browser is currently online. When the navigator.onLine property
     is accessed, the browser's JavaScript engine checks the current connectivity status of the device.
   - The browser may check for a network connection by ATTEMPTING TO ACCESS a known reliable network resource
     (e.g., a common website) and monitoring the success or failure of the request.
   - The browser may also check for network connectivity by attempting to communicate with a local router or
     server.
   - To optimize performance and avoid frequent network checks, the browser may cache the connectivity status
     and return the cached value for subsequent navigator.onLine requests. 
   - The navigator.onLine property is not a perfect indicator of the device's true network connectivity. It may
     not accurately reflect situations where the device has a network connection but is unable to access specific
     resources (e.g., due to firewalls, content blocking, or other network-related issues).
   - Modern browsers also provide event-based mechanisms to monitor changes in the online/offline status, such
     as the online and offline events. These events are triggered when the browser detects a change in the de-
     vice's network connectivity, allowing web applications to respond accordingly. 
  
  5. navigator.cookieEnabled: Returns a boolean indicating whether cookies are enabled in the browser.
  
  6. navigator.plugins: Returns an array of Plugin Objects representing the plugins installed in the browser.
   - Purpose: Plugins are designed to enhance the browser's default capabilities by adding support for specific 
     content types, media formats, or interactive features that the browser itself may not natively support.
   - Examples: Some common examples of browser plugins include:
     a) Adobe Flash Player: Allows the browser to display and interact with Flash-based content.
     b) Adobe Acrobat Reader: Enables the browser to display and interact with PDF documents.
     c) Media players: Enhance the browser's ability to play various audio and video formats.
     d) Browser Extensions/Addons: Small software programs that add new features or modify the behavior of the 
        browser.
   - Integration: Plugins are typically integrated with the browser through a Standardized Plugin Architecture
     or API, which allows the browser to RECOGNIZE, LOAD, and INTERACT with the installed plugins.
   - Installation: Users can install plugins manually by downloading and installing the plugin software, or the
     browser may automatically detect and install certain plugins when needed (e.g., prompting the user to
     install a plugin to view a specific content type).
   - Decline of Plugins: In recent years, the use of plugins has declined, as modern web standards and technolo-
     gies (such as HTML5, CSS, and JavaScript) have become more capable of handling the types of content and 
     interactivity that were previously dependent on plugins. Many browser vendors have also moved to deprecate or
     phase out support for older plugin technologies, such as Adobe Flash Player.
   - Accessing the Plugins: When we access the navigator.plugins property, it returns a PluginArray object, which 
     is a collection of Plugin objects. Each Plugin object represents a plugin installed in the browser.
   - Plugin Information: The Plugin objects returned by navigator.plugins provide the following information about
     each installed plugin:
       a) name: The name of the plugin.
       b) description: A description of the plugin.
       c) filename: The file name of the plugin.
       d) length: The number of MIME types supported by the plugin.
  
  7. navigator.mimeTypes: When you access navigator.mimeTypes, it returns a MimeTypeArray object, which is a collec-
     tion of MimeType Objects. Each MimeType object represents a MIME type supported by the browser.
   - Here's what the MimeType objects returned by navigator.mimeTypes contain:
     type: The MIME type, such as "text/html" or "image/png".
     description: A description of the MIME type.
     suffixes: A comma-separated list of file extensions associated with the MIME type.
     enabledPlugin: A reference to the Plugin object that handles the MIME type, if such a plugin is installed.
   - Usage: 
     Content Handling: Websites can use the MIME type information to determine how to handle and display different 
     types of content, such as images, videos, or documents.
     Plugin Detection: Websites can check the enabledPlugin property of a MimeType object to detect if a specific
     plugin is installed and enabled in the user's browser.
     File Upload Validation: Websites can use the MIME type and file extension information to validate the types of 
     files that users are trying to upload.
     Progressive Enhancement: Websites can use the MIME type information to provide alternative content or functio-
     nality for users with different browser capabilities or installed plugins.
     
  8. navigator.appName: Returns the name of the browser (e.g., "Netscape", "Microsoft).
  
  9. navigator.appVersion: Returns the version of the browser.
  
  10. navigator.product: Returns the name of the browser product (e.g., "Gecko"). */


    //Example-1
    console.log("Useragent: " + navigator.userAgent)


    //Example-2
    console.log("Platform: " + navigator.platform)


    //Example-3
    console.log("Language: " + navigator.language)


    //Example-4
    console.log("IsOnline: " + navigator.onLine)


    //Example-5
    console.log("CookiesEnabled: " + navigator.cookieEnabled)


    //Example-6
    //Step-1: Get the List of Plugins Installed in the Browser:
    const plugins = navigator.plugins;
    
    //Step-2: Iterate over the Plugins Array and log the name and description of each Plugin:
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];
      console.log(`Plugin name: ${plugin.name}`);
      console.log(`Plugin description: ${plugin.description}`);
      console.log(`Plugin filename: ${plugin.filename}`);
    
      //Step-3: Get the MIME types supported by the Plugin:
      const mimeTypes = plugin.types;
      for (let j = 0; j < mimeTypes.length; j++) {
        const mimeType = mimeTypes[j];
        console.log(`MIME type: ${mimeType.type}`);
        console.log(`MIME type description: ${mimeType.description}`);
        console.log(`MIME type file extensions: ${mimeType.suffixes}`);
      }
    }

    //Example-7
    console.log("MimeTypes: " + navigator.mimeTypes)

    //Example-8
    console.log("AppName: " + navigator.appName)

    //Example-9
    console.log("AppVersion: " + navigator.appVersion)

    //Example-10
    console.log("Product: " + navigator.product)




/* C. NAVIGATOR OBJECT METHODS
  1. navigator.geolocation.getCurrentPosition(): The navigator.geolocation object in JavaScript provides access
     to the device's location information, such as latitude, longitude, and altitude. The navigator.geolocation 
     object is part of the Geolocation API, which is a web API provided by the web browser, but the actual
     navigator.geolocation object itself is stored in the browser's heap memory. How it works internally:
   - Browser Interaction: The JavaScript engine in the browser detects the access to the navigator.geolocation
   - User Permission Prompt: The browser will first check if the web application has been granted permission to 
     access the user's location information. If permission has not been granted yet, the browser will display a 
     permission prompt to the user, asking for their consent to share their location.
   - Location Retrieval: If the user grants permission, the browser's Geolocation API will attempt to retrieve 
     user's current location. The API will use various positioning methods, such as GPS, Wi-Fi, or cellular net-
     work data, to determine the user's location.
   - Positioning Methods: The navigator.geolocation object provides several methods to obtain the user's 
     location:
     a) getCurrentPosition(success, error, options): Retrieves the current position of the device.
     b) watchPosition(success, error, options): Continuously tracks the device's position and reports changes.
     c) clearWatch(watchId): Stops tracking the device's position.
   - The Geolocation API operates asynchronously, meaning that the location retrieval process happens in the 
     background.
   
  2. navigator.vibrate(): Vibrates the device (if supported) for a specified duration.
  
  3. navigator.mediaDevices.getUserMedia(): Prompts the user for permission to access media devices like cameras
     and microphones. 
   - User Interaction: The web application calls the navigator.mediaDevices.getUserMedia() method, passing in an
     object that specifies the types of media (e.g., video, audio) the application wants to access.
   - Permission Request: The browser's JavaScript engine receives the getUserMedia() call and checks if the web 
     application has permission to access the requested media devices. If the application does not have permiss-
     ion, the browser will display a permission prompt to the user, asking for their consent to access the 
     specified media devices.
   - User Consent: The user can either grant or deny permission to the web application. If the user grants
     permission, the browser will proceed to the next step. If the user denies permission, the getUserMedia() 
     method will reject with a PermissionDeniedError.
   - Media Device Enumeration: After the user grants permission, the browser's media engine will enumerate the 
     available media devices on the user's device, such as cameras and microphones. This enumeration process is 
     handled by the navigator.mediaDevices.enumerateDevices() method, which returns a list of MediaDeviceInfo
     objects representing the available media devices.
   - Media Stream Initialization: The browser's media engine will then create a MediaStream object, which is a 
     container for the media data captured from the selected media devices. The media engine will initialize the 
     necessary media capture and encoding processes to start capturing the media data from the selected devices.
   - Media Data Capture: The browser's media engine will continuously capture the media data (e.g., video frames,
     audio samples) from the selected media devices. This capture process is performed in a low-level, efficient
     manner, using the browser's internal media processing pipelines and hardware acceleration (if available).
   - Media Data Encoding: The captured media data is then encoded into a suitable format (e.g., H.264 for video, 
     Opus for audio) to be delivered to the web application. The encoding process is handled by the browser's 
     media engine, which 
     selects the appropriate codec and encoding parameters based on the media requirements and the device's 
     capabilities.
   - Media Stream Delivery: The encoded media data is then packaged into a MediaStream object and returned as the 
     resolved value of the getUserMedia() promise. The MediaStream object acts as a handle for the web application
     to access and manipulate the captured media data.
   - Media Stream Handling: The web application can then use the MediaStream object to display the media data in a
     <video> or <audio> element, or to process the data further, such as for video conferencing, screen sharing, or
     audio process. The web application is also responsible for managing the lifecycle of the MediaStream object, 
     such as stopping the stream when it's no longer needed or when the user revokes permission. */

 


/* D. MULTIPURPOSE INTERNET MAIL EXTENSION
  1. Multipurpose Internet Mail Extensions (MIME) is a standard that extends the format of email messages to
     support:
  - Non-ASCII Character Encoding: MIME allows email messages to include non-ASCII characters, such as those used
    in various languages, by encoding the text in different character sets.
  - Multimedia Attachments: MIME enables email messages to include attachments of various file types, such as
    images, audio files, video files, and documents, in addition to plain text.
  - Message Body Structures: MIME supports the ability to include multiple parts within a single email message, 
    such as an HTML message body with an attached image or document.
    
  2. The key components of MIME are:
  - MIME Types: MIME types, also known as media types, are a standard way of identifying different file formats
    and content types. They are defined in the format "type/subtype", such as "text/plain", "image/jpeg", or 
    "application/pdf".
  - MIME Headers: MIME headers are added to email messages to provide information about the content, such as the
    character encoding, the MIME type of attachments, and the message structure. */

