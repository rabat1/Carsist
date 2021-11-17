import React from 'react'
import { View } from 'react-native';
import ServiceExpense from '../../../../Components/ServiceExpense'
import { CustomHeader } from '../../../../Navigation/CustomHeader';
const index = () => {
    const expenses = [
        {
            image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
           service_name: "Beachside Bar",
          date: '23/98/1999',
          mechanic_name: "$$",
          cost: 1244,
          
        },
        {
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            service_name: "Beachside Bar",
          date: '23/98/1999',
          mechanic_name: "$$",
          cost: 1245,
        
        },
        {
          image_url:
            "https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg",
            service_name: "Beachside Bar",
          date: '23/98/1999',
          mechanic_name: "$$",
          cost: 1254,
        
        },
        {
            image_url:
              "https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg",
              service_name: "Beachside Bar",
            date: '23/98/1999',
            mechanic_name: "$$",
            cost: 1224,
          
          },
          {
            image_url:
              "https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg",
              service_name: "Beachside Bar",
            date: '23/98/1999',
            mechanic_name: "$$",
            cost: 12444,
          
          },
          {
            image_url:
              "https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg",
              service_name: "Beachside Bar",
            date: '23/98/1999',
            mechanic_name: "$$",
            cost: 1246,
          
          },
           
      ];
    
    return (
<View>    
<CustomHeader isHome={true} title='Expenses' />
  
   <ServiceExpense data={expenses} />
     </View>
    )
}

export default index
