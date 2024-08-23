import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';

function ShoppingCart(){
  return(
    <div>
      <Content />
    </div>
  )
}

ReactDOM.render(<ShoppingCart />,document.getElementById("root"));

