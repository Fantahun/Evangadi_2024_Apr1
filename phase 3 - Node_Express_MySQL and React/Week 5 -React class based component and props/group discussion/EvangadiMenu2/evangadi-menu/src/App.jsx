import { useState } from 'react'
// import '../src/assets/style.css'
import './CommonResource/style.css'
import Header from './components/Header'
import Foods from './components/Foods'
import SingleFood from './components/SingleFood'
import menus from './CommonResource/data';


function App() {
  return (
    <>
          <Header />
      {/* <Foods /> */}
    

      <div class="foods-container">
      {
        menus.map(
       
            function(menu){
                
            // return <SingleFood img={menu.img} title={menu.title} price={menu.price} description={menu.desc} />
            return <SingleFood key={menu.id} menu={menu} />
              
          }
        
        )
}
</div>

    </>
  )
}

export default App
