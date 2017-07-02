# react_paginator

[![NPM](https://nodei.co/npm/react_paginator.png?compact=true)](https://npmjs.org/package/react_paginator)

![Screenshot from demo](img/demo1_screen.png)
![Screenshot from demo with MaterializeCSS](img/materialize_demo.png)

React-Paginator is a react component to create a great and easy to use pagination system.
You can customize it to adapt to your style

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

### Example with MaterializeCSS

```javascript
<Paginator 
  prevIcon={<i className="material-icons">chevron_left</i>} 
  nextIcon={<i className="material-icons">chevron_right</i>}
  liClass="waves-effect">

  // Elements...

</Paginator>
```

### Props

| Name    | Type    | Description                                      |
|---------|---------|--------------------------------------------------|
| perPage | Integer | Number of elements you want to show on each page |
| bsClass | String | Base class of pagination system |
| prevIcon | Node | Previous page icon |
| nextIcon | Node | Next page icon |
| liClass | String | Li element class |
| showOnly | Integer | Number of pages to show |
