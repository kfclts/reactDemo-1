import React from 'react';

const Scroll = (props) => {
  return (
    // 第一層{} 是javascript
    // 第二層{}是object, 可以帶入css
    // css: overflow-y, JSX overflowY
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;