The Coastal Table App is a React Native-based mobile application designed for restaurant management, specifically focused on seafood restaurants with a relaxed, beachy vibe. The app allows restaurant chefs or managers to add and manage menu items, calculate the total cost of selected items, and view a dynamic list of available dishes. It focuses on providing an intuitive interface for managing starters and other dishes within the restaurant’s offerings.

This README will explain the various features, the code structure, and the development approach used in building the Coastal Table App. We will also provide reliable references that guided the design and implementation process.

2. App Overview
The Coastal Table App is developed as a single-screen mobile application in React Native. It incorporates functionalities such as:

Adding menu items with names, descriptions, and prices.
Automatically calculating the total cost of all items added.
Displaying the items added in a list using a FlatList component.
Using validation checks (if statements) to ensure that valid data is entered before the menu items are added.
Target Audience: The target audience for this app is restaurant chefs or owners who need an easy way to manage their seafood-centric menus and monitor prices on a day-to-day basis.

3. Features
3.1 Adding Menu Items
Users can add new menu items by filling out three fields:

Dish Name: Text input for the name of the dish.
Description: Text input to describe the dish.
Price: Numeric input for the price of the dish in the local currency.
The app performs validation to ensure all the fields are completed before adding an item to the list. This reduces the chance of errors such as missing names, descriptions, or invalid prices.

3.2 Validating User Input
The input fields are validated using if statements to prevent users from submitting incomplete or incorrect information. The checks include:

Empty strings for the dish name or description.
Invalid or non-numeric input for the price.
A feedback system using Alert to notify the user if they attempt to add an item without providing proper details.
3.3 Displaying Menu Items
Once items are added, they are displayed in a list format using FlatList. Each list item includes:

The dish name.
A short description of the dish.
The price, which is formatted to two decimal places.
This list allows the user to review and scroll through the menu items easily.

3.4 Automatic Price Calculation
The app calculates the total price of all the items added to the list. Each time a new item is added, the app updates the total and displays it at the bottom of the screen. This feature is useful for chefs or managers to keep track of costs without needing to calculate manually.

4. Code Structure
4.1 Main Component (App.tsx)
The entire functionality is contained within a single component (App.tsx), in line with the project's requirement to have one screen. The app utilizes React Native hooks to manage the state and logic.

Key Variables and States:
name: Stores the dish name input by the user.
description: Stores the description of the dish.
price: Stores the price input.
menuItems: An array to hold all the added menu items, including their name, description, and price.
total: A number representing the total price of all items in the list.
4.2 Adding New Items
The function addMenuItem is responsible for validating the input fields and adding the new item to the menuItems array if all conditions are met. Once the item is added, the total cost is updated using the price of the newly added item.

Here's how the validation works:

If any of the input fields (name, description, price) are empty, an alert is triggered, preventing the user from adding the item.
If all fields are valid, the item is added to the menuItems array, and the input fields are reset for the next entry.
4.3 Rendering the List of Items
The FlatList component is used to render the added menu items in a scrollable view. Each item in the list displays the name, description, and price of the dish. The unique id for each menu item is generated using Math.random() for simplicity, but this could be replaced by a more robust ID system in a real-world scenario.

4.4 Logo Integration
A logo image is added to the top of the screen using the Image component. The logo should be placed in the assets folder, and the require function is used to load it dynamically within the app.

 Reference

React Native Documentation (2023). React Native: A framework for building native apps using React. Available at: https://reactnative.dev/docs/getting-started (Accessed: 5 October 2024).

Harvard University IT (2021). Harvard Referencing Guide. Available at: https://guides.library.harvard.edu/cite/Harvard (Accessed: 7 October 2024).

Stack Overflow (2023). Handling state in React Native using hooks. Available at: https://stackoverflow.com/questions/56026043/react-native-hooks-and-async-storage (Accessed: 6 October 2024).

MDN Web Docs (2024). JavaScript Math.random function. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (Accessed: 7 October 2024).

BlueStacks (2024). Android Emulator for PC and Mac. Available at: https://www.bluestacks.com (Accessed: 6 October 2024).
