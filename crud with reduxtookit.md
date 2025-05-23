
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
----------------------------------

// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

const store = configureStore({
  reducer: {
    items: itemReducer
  }
});

export default store;
--------------------------------

// src/itemSlice.js
import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    editItem: (state, action) => {
      const { id, name } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.name = name;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addItem, editItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
---------------------------------

// src/App.js
import React from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="App">
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
----------------------------------------

// src/components/AddItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../itemSlice";

const AddItem = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    dispatch(addItem({ id: Date.now(), name }));
    setName("");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddItem;
----------------------------------

// src/components/ItemList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, editItem } from "../itemSlice";

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [editableItemId, setEditableItemId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (item) => {
    setEditableItemId(item.id);
    setEditedName(item.name);
  };

  const handleUpdate = (item) => {
    dispatch(
      editItem({
        id: item.id,
        name: editedName
      })
    );
    setEditableItemId(null);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editableItemId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ) : (
              <div>
                {item.name}
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;