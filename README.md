# Challenge 1
In this challenge we will build an application that accepts an age input from a form and redirects it to the correct page based on its age.

Set up an application using ExpressJS, Nunjucks, EditorConfig, and ESLint.

## Routes
- `/`: Initial route that renders a page with a form with a single field age that represents the age of the user;
- `/check`: Route called by the homepage form via POST method that checks if the user's age is greater than or equal to 18 and redirects it to the /major route, otherwise redirects it to the route /minor (Remember to send the age as Query Param in redirection);
- `/major`: Route that renders a page with the text: You are major and has x years, where x must be the value entered in the input form;
- `/minor`: Route that renders a page with the text: You are minor and has x years, where x must be the value entered in the input form;

## Middlewares

There must be a middleware that is called on the /major and /minor routes and checks if the age information is not present in the Query Params. If this information does not exist it should redirect the user to the home page (form), otherwise the middleware should just continue with the normal flow.
