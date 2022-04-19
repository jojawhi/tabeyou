## Disclaimer

This web-app is currently a personal practice project meant to show some of my development skills. It is currently lacking security features and should be considered to still be in 'alpha testing' mode. Feel free to make a throwaway user account with a fake email and play around with the current features, but be warned that any information you enter will not be secure yet, and your account information may be deleted or modified at any time without warning. I am not responsible for the loss or accidental release of any data entered into the app.

# Tabeyou

A web-app to help with weekly meal-planning and grocery shopping. The app is designed to mimic my family's own process for planning our meals and sticking to our grocery list.

For us, it solves the problem of having to remember what our best recipes are and what we've eaten recently. Sometimes when we sit down to make our plan, we find ourselves thinking, "What did we eat last week?" or, "What do we even know how to make?" With the app, we can look back at what we ate last week, what we bought, and how we scheduled our meals and use that history to help us plan our next week more efficiently. We also save paper by not having to write out our list!

## Stack

-   TypeScript, CSS, Node.js, Webpack, Firebase, Cloud Firestore

## Learning Focus

This was supposed to just be a simple To-Do list for The Odin Project, but I went a little overboard.

Tabeyou is my very first full-stack web-app. I've been using it to practice TypeScript, modules, design patterns, and functional programming, and it has been a blast!

The app uses Firebase to implement user authentication and Cloud Firestore's NoSQL database and API for the backend. This was also my first time using Firebase and connecting to a backend, which has really helped me gain some better understanding of RESTful APIs.

## Key Takeaways

-   This has been a large project for me to tackle, but the learning experience has felt amazing, with so many little victories of getting individual pieces working and then getting those pieces to work together.
-   I've gained appreciation for the importance of design patterns. As my codebase and file structure got more and more complicated, I recognized the need for a guiding principle of organization. I chose to implement a rudimentary version of MVC, which has worked so far in helping keep things more organized. However, there is a lot of room for improvement.
-   Expanding on the previous point, I also now see why frameworks like React, Vue, and Angular exist. Many of the problems I've encountered like disorganized file structure, repetitive code for generating HTML elements, and storing state-like variables are mostly solved in these frameworks.
-   I think I have really levelled up my research abilities with this project as well. It took some time to refine my wording, but I found several very niche algorithms on Stack Overflow that perfectly solved some issues I was having once I converted them to my particular use cases.

## Features in development

-   Change shopping day setting
-   Email verification
-   Form validation and user error feedback
-   Full landing page, complete with feature descriptions and information about how to use the app effectively and the benefits of the prescribed process
-   Meal plan and grocery list history storage
-   Add recipe to meal plan from recipe page
-   Populate current week's meal plan from meal plan history (if wanting to directly replicate a particularly successful/tasty week)
-   Search and sort recipes

## Future Features Wishlist

Meal Plans:

-   Additional sections for lunches/breakfasts if required

Recipes:

-   Unit conversion
-   1/2, double, triple, etc. recipe amounts
-   Unit conversion and multiplication combined (eg. half of 1/2 a cup, then converted to mL)
-   Image upload for recipe displays
-   Import recipe from a picture (text recognition) or website
-   Public repo of shared recipes and adding public recipe to personal recipe book
-   Export recipe to shareable PDF
-   Create a "Recipe Book" shareable PDF (all user's recipes)

Grocery Lists:

-   Tags for ingredients (eg. department/category)
-   Sort grocery list by tags (eg. sort by grocery store department (all produce items grouped together) to ease grocery shopping flow)
-   Public repo of most common ingredients
-   Ingredient recommendations based on common user behaviour

## Known Bugs

-   Instructions area displaying in recipe modal even if no instructions entered
-   2 new meal plans are being generated and written to the database when a new user signs up or a weekly rollover occurs. This also prevents a new weekly meal plan from displaying or being updated and a grocery list from being generated because the database query depends on there being only one mealPlan with 'expired: false' as a condition.

    -   The cause seems to be due to the onAuthStateChanged listener from the firebase API firing twice. Apparently this is a known Firebase bug as per this Stack Overflow question: https://stackoverflow.com/questions/37673616/firebase-android-onauthstatechanged-called-twice

    -   Fix added: There is now a duplicate meal plan check that runs every time the meal plan page is rendered. It's not an ideal or long-term solution, but it solves the immediate issue for now.
