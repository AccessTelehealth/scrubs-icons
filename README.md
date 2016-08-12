# Icons for scrubs

## Adding icons

- Add your minimised icon to the `src` folder.
- Add an named export declaration to `src/index.js`:
```javascript
export { default as IconName } from './icon-name.svg'
```
- Create a build of the new version for es5
```node
npm run build
```
- You can then require your icons in your project:
```node
npm install dr-me/scrubs-icons
```

## Importing in es6 projects

```javascript
import { IconName } from 'scrubs-icons'
```

## Requiring in es5 projects
```javascript
require("scrubs-icons/dist").IconName
```
