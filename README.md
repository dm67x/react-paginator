# In development (v2)

Add more modular modules.

### Example of pagination system with this version

```javascript
<Paginator>

  <PaginationContent start={(currentPage-1) * perPage} end={(currentPage - 1) * perPage + perPage}>
    // your datas
  </PaginationContent>

  <PaginationLabel 
    disabled={currentPage == 1} 
    iclass="first" 
    value="First" 
    onClick={() => this.firstPage()}/>

  <PaginationIconNav
    icon={<i className="material-icons">chevron_left</i>}
    disabled={currentPage === 1}
    iclass="next"
    onClick={() => this.prevPage()}
  />

  {navLinks}

  <PaginationIconNav
    icon={<i className="material-icons">chevron_right</i>}
    disabled={currentPage === numberOfPages}
    iclass="prev"
    onClick={() => this.nextPage()}
  />

  <PaginationLabel 
    disabled={currentPage == numberOfPages} 
    iclass="last" 
    value="Last" 
    onClick={() => this.lastPage()}/>

</Paginator>
```

# react_paginator

[![NPM](https://nodei.co/npm/react_paginator.png?compact=true)](https://npmjs.org/package/react_paginator)

### Bootstrap theme
![Screenshot from demo](img/demo1_screen.png)

### Materialize theme
![Screenshot from demo with MaterializeCSS](img/materialize_demo.png)

### Custom materialize theme
![Custom Materialize Theme](img/custom_materialize.png)

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

| Name    | Type    | Description                                      | Default Value |
|---------|---------|--------------------------------------------------|---------------|
| perPage | Integer | Number of elements you want to show on each page | 1 |
| bsClass | String | Base class of pagination system | pagination |
| prevIcon | Node | Previous page icon | null |
| nextIcon | Node | Next page icon | null |
| pageClass | String | Li element class | null |
| pageNextClass | String | Next (li) element class | null |
| pagePrevClass | String | Previous (li) element class | null |
| blankClass | String | [...] element class | null |
| showOnly | Integer | Number of pages to show | 5 |
| firstPageLabel | Node | Go to first page element | null |
| lastPageLabel | Node | Go to last page element | null |
| showPage | Integer | Page to show | 1 |
| onPageChanged | Function | Event triggered when page change | null | 
