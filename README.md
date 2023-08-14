# Weather

## Description
**Weather** is a project that provides real-time weather information for the Netherlands. By utilizing data retrieved from the weatherstack API, the project presents a snapshot of the current weather conditions. When the fetch API communicates with the weatherstack API, the response is captured in a JSON format. The retrieved data is then organized into a nested object for efficient handling.

Within the project's `weather.js` file, dedicated functions are responsible for extracting specific weather details:

* One function extracts the country name.
* Another function retrieves the icon representing the current weather.
* The final function acquires the temperature information.

These functions collectively work to access the propreties of the object and extract the relevant information, ultimately creating a comprehensive weather report. The extracted details are dynamically displayed in the user's browser.

## Executing the Project
To experience real-time weather information for the Netherlands, follow these steps using the "Live Server" extension in Visual Studio Code:

### Step 1: Download and Install Visual Studio Code
If you haven't already, download and install Visual Studio Code from the official website.

### Step 2: Open the Project Folder
Launch Visual Studio Code and open the folder containing your **Weather** files.

### Step 3: Install the "Live Server" Extension
Click on the "Extensions" icon in the left sidebar (or press `Ctrl+Shift+X`). In the search bar, type "Live Server" and select the extension published by Ritwick Dey. Click the "Install" button to integrate the extension into your development environment.

### Step 4: Start the Live Server
After installing the "Live Server" extension, open the HTML file of your project in Visual Studio Code. You can initiate the "Live Server" extension using any of the following methods:

* **Right-Click and Open with Live Server:** Right-click anywhere within the HTML file or over the file name in the "Explorer" tab and select "Open with Live Server". This action will start the local server and automatically open your project in your default web browser.
* **Use the Status Bar:** Alternatively, click the "Go Live" button located on the status bar at the bottom of the Visual Studio Code window. Clicking it will activate the local server and launch your project in a web browser.
* **Keyboard Shortcut:** For keyboard enthusiasts, use `Alt+L` followed by `Alt+O` to start the "Live Server" extension.

### Step 5: Explore the Real-Time Weather Information
As the project loads in your web browser, you'll be presented with the current weather details for the Netherlands, including the country name, weather icon, and temperature.

### Step 6: Stopping the Server
To halt the local server, you have two options:
* Close Visual Studio Code and the web browser tab displaying the project interface.
* Click the port number displayed in the status bar (usually located at the bottom right corner of Visual Studio Code), which will also terminate the server.

Please note that the **Weather** project utilizes JavaScript modules to enhance code organization and separation. Due to the use of modules, it's essential to execute the project within a local server environment, such as the "Live Server" extension, to ensure proper functionality and data retrieval.

By following these instructions, you'll gain immediate access to real-time weather information for the Netherlands, providing valuable insights into the current weather conditions.

## Update History

### Part I
* Release of the **Weather** project.
* The project only showcases the weather of one country, the Netherlands.

## Helpful Links
* **[Learn JavaScript](https://www.learnjavascript.com/)**: Deepen your JavaScript knowledge and explore its capabilities.
* **[Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):** Learn about the Fetch API and how to use it to make network requests in JavaScript.
* **[JavaScript Modules Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):** Get a comprehensive understanding of JavaScript modules and their role in structuring code.
* **[Visual Studio Code Download](https://code.visualstudio.com/):** Download Visual Studio Code to enhance your coding experience and productivity.
