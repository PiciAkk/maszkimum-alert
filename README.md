# maszkimum-alert **(Android-only)**

*Coming soon on iOS, and on the web.*

Alerting mobile app based on the [Maszkimum](https://github.com/davidfegyver/szabadfogasu-maszk) web API

## When did the project start?

A few weeks ago I noticed a 15 year old, Hungarian, non-skid programmer called [Dávid Fegyver](https://github.com/davidfegyver). I was browsing his projects, when I noticed an AI-based mask detecting system made for a competition. He made a feature request called [`Alerting system to an operator`](https://github.com/davidfegyver/szabadfogasu-maszk/issues/4). I contacted him, and started making an alerting mobile app.
## How to use it

**1.** Run the app: there's a bunch of methods for doing that
  - You can download the `.apk` file directly from GitHub releases (easiest method)
    - On your phone, go to GitHub releases
    - Download the latest release
    - Open your phone's file manager
    - Click on the downloaded app
    - Install it
    - Start it
  - You can compile the app for yourself (if you don't trust GitHub releases :laughing:)
    - Open up a terminal
    - *Install git for your system (only, if you haven't did it already)*
    - Clone this GitHub repository
    ```bash
    git clone https://github.com/piciakk/maszkimum-alert
    ```
    - Navigate to the cloned GitHub repo:
    ```bash
    cd maszkimum-alert
    ```
    - *Install Node & NPM (only, if you haven't did it already)*
    - *Install Expo using NPM (only, if you haven't did it already)*
    ```bash
    npm install -g expo-cli
    ```
    - Compile the application
    ```bash
    expo build:android
    ```
    - One liner for the above steps (NPM & Node & git & expo required)
    ```bash
    git clone https://github.com/piciakk/maszkimum-alert && cd maszkimum-alert && expo build:android
    ```
    - Install the app on your phone
      - Go to [expo.dev](https://expo.dev)
      - Click on `Builds`
      - Select `maszkimum-alert` from the list
      - Click on the `Download` button
      - Find the downloaded `.apk` file, and install it
      - Start it
  - You can launch the app in development mode using `expo` (not recommended for everyday use)
    - Clone this repo (git required)
    ```bash
    git clone https://github.com/maszkimum-alert
    ```
    - Navigate to the cloned repository
    ```bash
    cd maszkimum-alert
    ```
    - Start the app (Expo, Node, and NPM required)
    ```bash
    expo start
    ```
**2.** Start the Maszkimum web API
  - Install Python3 if you haven't did it already

**3.** Find out the IP address of the server computer

**4.** Enter the IP address

**5.** Wait for the notification
