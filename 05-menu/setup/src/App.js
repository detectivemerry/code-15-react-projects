import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


// new array, spread operator, get only unique values
const allCategories = ['all', ...new Set(items.map((item)=>
  item.category
))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])
  const filterItems = (category) => {
    if(category == 'all'){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => 
      item.category === category
    )
    setMenuItems(newItems)
  }

  return(
  <main>
    <section className = "menu section">
      <div className = 'title'>
        <h2>our menu</h2>
        <div className = 'underline'></div>
      </div>
      <Categories categories = {allCategories} filterItems = {filterItems}/>
      <Menu menuItems = {menuItems}/>
    </section>
  </main>
  )
}

export default App;
