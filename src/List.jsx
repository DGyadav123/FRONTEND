import React from 'react'

function List({list}) {
    console.log('Accepting props',list);
  return (
 <div>
       List Render
       {list.map(function(item){
         return (<div>{item.title} {item.projectCount}</div>);
       })}
  </div>
  )
}

export default List;