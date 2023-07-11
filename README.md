This repository demonstrates a bug in Expo Go with ``<ScrollView>`` on fast reloads.
# Setting up the app
Either...

1. Clone this repository and run ``npm install``,
or
2. Create a new Expo Go project with ``npx create-expo-app`` and replace the contents of the default ``App.js`` with the ``App.js`` provided in this repo.

# Steps to reproduce the error
Ensure that ``j = 3505`` on line 4 of ``App.js``.

Run ``npm start`` in a terminal to start the project. On an Android device, scan the QR code with the Expo Go app.

The app should successfully load a ScrollView with 3505 ``<Text>`` objects.

Perform a fast reload. This can be done by adding a newline or a space somewhere irrelevant in ``App.js`` and saving the file.

The app will display an **Uncaught Error**, reading **"Maximum call stack size exceeded"**. The call stack shows 97 frames, 82 of which are ``scheduleFibersWithFamiliesRecursively`` from  ``ReactNativeRenderer-dev.js``

## Other points of interest

- Changing line 4 to ``const j = 3504``, or any smaller number, and then performing two or more fast reloads will not cause an error. The app will, however, throw the same error the first fast reload after reducing ``j``.

- Duplicating line 17 such that the return value of ``Main`` appears as follows does not produce an error, as long as ``j`` is 3504 or less:
```jsx
<View>
    <ScrollView>
        {listItems}
        {listItems}
    </ScrollView> 
</View>
```

- In Expo SDK 48, the magic number is 3412 instead of 3504, where 3411 does not cause an error.

- In Expo SDK 49, fast reloading on these errors sometimes causes the Expo Go app to crash entirely. This did not happen with Expo SDK 48.
