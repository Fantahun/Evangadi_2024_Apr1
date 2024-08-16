import React, { Component } from 'react';
import SingleFood from './SingleFood'
import menus from '../CommonResource/data';

class Foods extends Component {
    render() {
        return (
   

      <div class="foods-container">

        {
                menus.map(
               
                    function(menu){
                        
                    // return <SingleFood img={menu.img} title={menu.title} price={menu.price} description={menu.desc} /
                    return <SingleFood menu={menu} />
                    
                    
                }
                
                )
        }

  
     </div>


            // {/* <SingleFood 
            // img= "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" 
            // title= "TIMATIM SELAXA (ቲማቲም ሰላጣ)" 
            // price= '5.99'  
            // desc= "Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice."
            // />

            // <SingleFood 
            // img= "https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" 
            // title= "TIBS (ጥብስ)" 
            // price= '22.99'  
            // desc= "Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain little to no vegetables. A particularly recommended variation is shekla tibs, in which the strips of meat arrive at your table roasting atop a clay pot stoked with hot coals – dramatic and delicious."
            // /> */}

        );
    }
}



export default Foods;
