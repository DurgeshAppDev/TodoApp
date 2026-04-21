# 2-do (React Native Todo App)

A simple task management application built using React Native and Firebase.


# apk file link

 apk file:  https://drive.google.com/drive/folders/1RgetQzF2efIKkAoYtTHiddJ2XvO4N6ZN?usp=drive_link


## Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* View completed and pending tasks separately
* Firebase Authentication (user-based tasks)
* Real-time data sync using Firebase Realtime Database

## Tech Stack

* React Native
* Firebase Auth
* Firebase Realtime Database
* React Navigation
* react-native-vector-icons
* NativeWind

## Setup

Clone the repository:

```
git clone https://github.com/DurgeshAppDev/2-do-app.git
cd 2-do-app
npm install
```

## Run

```
npx react-native run-android
```

## Firebase Configuration

* Create a Firebase project
* Add Android app
* Download `google-services.json`
* Place it inside `android/app/`
* Enable Authentication and Realtime Database

## Project Structure

```
screens/
  HomeScreen.js
  CompletedTaskScreen.js
  PendingTaskScreen.js
  MenuScreen.js
  AboutScreen.js
navigation/
  AppNavigator.js
```

## Author

Durgesh Kumar
