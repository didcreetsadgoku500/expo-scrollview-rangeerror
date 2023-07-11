# Setting up the app
There are two ways to set up the app. Either...

1. Clone this repository and run ``npm install``,
or
2. Create a new Expo Go project with ``npx create-expo-app`` and replace the contents of the default ``App.js`` with the ``App.js`` provided in this repo.

# Steps to reproduce the bug
Ensure that ``j = 3412`` on line 4 of ``App.js``.

Run ``npm start`` in a terminal to start the project. On an Android device, scan the QR code with the Expo Go app.

The app should successfully load a ScrollView with 3412 ``<Text>`` objects.

Perform a fast reload. This can be done by adding a newline or a space somewhere irrelevant in ``App.js`` and saving the file.

The app will display an **Uncaught Error**, reading **"Maximum call stack size exceeded"**. The call stack shows 97 frames, 82 of which are ``scheduleFibersWithFamiliesRecursively`` from  ``ReactNativeRenderer-dev.js``

## Other points of interest

- Changing line 4 to ``const j = 3411``, or any smaller number, and then performing two or more fast reloads will not cause an error. The app will, however, throw the same error the first fast reload after reducing ``j``.

- Duplicating line 17 such that the return value of ``Main`` appears as follows does not produce an error, as long as ``j`` is less than 3412:
```jsx
<View>
    <ScrollView>
        {listItems}
        {listItems}
    </ScrollView> 
</View>
```
