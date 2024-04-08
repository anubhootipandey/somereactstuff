import React, { useState } from 'react'

const List = () => {
    const [list1, setList1] = useState([
        {title: 'Item 1', checked: false},
        {title: 'Item 2', checked: false},
        {title: 'Item 3', checked: false}
    ]);
    const [list2, setList2] = useState([
        {title: 'Item A', checked: false},
        {title: 'Item B', checked: false},
        {title: 'Item C', checked: false}
    ]);

    const handleCheckboxChange = (index) => {
        const newList1 = [...list1];
        newList1[index].checked = !newList1[index].checked;
        setList1(newList1);
    };

    const handleSwapItems = () => {
        const newList1 = [...list1];
        const newList2 = [...list2];

        newList2.forEach((item, index) => {
            if(item.checked){
                const temp = newList1[index].title;
                newList1[index].title = newList2[index].title;
                newList2[index].title = temp;
            }
            newList1[index].checked = false;
        });
        setList1(newList1);
        setList2(newList2);
    };

  return (
    <div>
        <div>
            <h3>List 1</h3>
            <ul>
                {list1.map((item, index) => (
                    <li key={index}>
                        <input type='checkbox' checked={item.checked} onChange={() => handleCheckboxChange(index)} />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3>List 2</h3>
            <ul>
                {list2.map((item, index) => (
                    <li key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
        <button onClick={handleSwapItems}>SwapItems</button>
    </div>
  )
}

export default List;