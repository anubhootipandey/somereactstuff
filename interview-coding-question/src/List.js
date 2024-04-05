import { useState } from "react";

const List = ({onDelete, item})=>{
  const [checked, isChecked] = useState(false)

  return (
    <div style={{display:'flex'}}>
      < input type="checkbox"
      checked={checked}
      onChange={(e)=>isChecked(e.target.checked)}
      
      />
      {item}
      {
        checked && <button onClick={onDelete}>X</button>
      }
    </div>
  )
}

export default List;