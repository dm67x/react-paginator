# react_paginator

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

![Screenshot from demo](img/demo1_screen.png)

React-Paginator is a react component to create a great and easy to use pagination system. Currently this component use Twitter Bootstrap style, so if you want to use it you must be add Bootstrap to your project.

### Usage

Three steps to start with react_paginator ;)

#### Install
`npm i --save react_paginator`

#### Import
`import Paginator from 'react_paginator'`

#### Add to DOM
```javascript
<Paginator>
  // Elements on what you want to paginate
</Paginator>
```

### Props

| Name    | Type    | Description                                      |
|---------|---------|--------------------------------------------------|
| perPage | Integer | Number of elements you want to show on each page |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/dm67x/react_paginator

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react_paginator

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/dm67x/react_paginator
