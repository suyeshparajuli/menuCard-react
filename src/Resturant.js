import React, { useState } from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard'
 const Resturant = () => {
   const [menuList , setMenuList] = useState(Menu)
   const filterItem = (element) =>{
     const newList = Menu.filter((menuList)=>{
      return menuList.category === element
     })
     setMenuList(newList);
     if(element === 'all'){
      setMenuList(Menu);
     }
   }
  return (
    <div>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={()=>filterItem('breakfast')}>
           breakfast
          </button>
          <button className='btn-group__item' onClick={()=>filterItem('lunch')}>
            lunch
          </button>
          <button className='btn-group__item' onClick={()=>filterItem('evening')}>
            evening
          </button>
          <button className='btn-group__item' onClick={()=>filterItem('dinner')}>
            dinner
          </button>
          <button className='btn-group__item' onClick={()=>filterItem('all')}>
           all
          </button>
        </div>
      </nav>
      <MenuCard menuList={menuList}/>
    </div>

  )
}

export default Resturant;
