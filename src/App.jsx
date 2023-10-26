 
import React, { Fragment }  from 'react';
import List from './List';
const title ='Tutorial'
console.log('TITLE', title);

const javascript={
    framework:'Angular',
    library:'React',
}

function App(props) {
    const title ='Tutorial'
    console.log('TITLE', title);
    console.log('props','props');

    const list =[{
      title:'React',
      projectCount:5
    },
    {
      title:'Angular',
      projectCount:4
    }
  ]
  return (
    <Fragment>
    <div>
        <h1>{title}{props.status}</h1>
        <label> Name </label>
        <input type='text'/>
        <div>
          Framework:-{javascript.framework}
          Library:-{javascript.library}
        </div>
        List Render
        {list.map(function(item){
          return (<div>{item.title} {item.projectCount}</div>);
        })}
      </div> 
      <List list={[...list]}/>
    </Fragment>
  );
}

export default App;