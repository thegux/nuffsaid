# React Coding Challenge

This project was developed as a challenge for Nuffsaid. It contains three card lists, each displaying cards based on a priority. The cards's content are provided by an "API".


## Getting Started
1. Install all the dependencies:
```
npm install .
```
2. Run the App Locally:
```
npm start
```

## The Architecture
This project uses a simple frontend architecture, divided in two main directories:
- Config: designed to contain context, routes, custom interfaces, theme
- Components: designed to contain components which can be nested, aka "shared-components"

As the application begins to grow, new directories might be added, such as templates/pages (for pages that can be controlled by the router), services (for methods that organize API communication), assets (for icons, images, and fonts), helpers (for validators and formatters), etc.
These aditions will not compromise the current architecture, requiring only few adjustemnts.


## Testing
This application contains a few tests to validate reducers' functionalities as well as components's updates based on context changes.
1. To test this appliction, you just need to run:
```
npm run test
```

## Main Libraries
- Material UI
- Styled-Components
- uui4


## Licensing
- Nuffsaid

