import './app.css'

import BlogPost from './components/BlogPost'
import Welcome from './components/Welcome'

function App() {

  const posts = 
    [
      {
        id:1,
        "title": "SQL Server 2022",
        "focus": "Database Administration",
        "description": "Designed to equip students with the knowledge and skills necessary to manage and maintain SQL Server 2022 databases.",
        "cost": "FREE",
        "image": "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/sql.png"
      },
      
      {
        id:2,
        "title": "SharePoint 2019",
        "focus": "SharePoint Development",
        "description": "Focuses on providing comprehensive understanding and practical skills in SharePoint Development.",
        "cost": "FREE",
        "image": "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/sharepoint.png"
      },
      {
        id:3,
        "title": "MuleSoft 4",
        "focus": "MuleSoft Development",
        "description": "Aims to prepare participants for creating and integrating APIs and applications within the MuleSoft platform.",
        "delivery": "Online",
        "duration": "3 months",
        "cost": "FREE",
        "image": "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/mulesoft.png"
      }, {
        id:4,
        "title": "Power BI Desktop",
        "focus": "Power BI",
        "description": "Focuses on empowering participants to analyze data, create insightful reports, and develop interactive dashboards.",
        "delivery": "Online",
        "duration": "3 months",
        "cost": "FREE",
        "image": "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/bi.png"
      },
      {
        id:5,
        "title": "Automated Testing",
        "focus": "Software Testing",
        "description": "Designed to prepare participants for the challenges of ensuring software quality and reliability.",
        "delivery": "Online",
        "duration": "3 months",
        "cost": "FREE",
        "image": "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/qa.png"
      },
      {
        id:6,
        "title": "Cloud Computing",
        "focus": "AWS",
        "description": "Crafted to train participant how to manage cloud infrastructure using Amazon Web Services (AWS).",
        "delivery": "Online",
        "duration": "3 months",
        "cost": "FREE",
        "image": "https://www.evangadi.com/themes/humans//assets/hammerlook/img/icon/aws2.png"
      }
    ]
  

  return (
    <>
      {posts.map((singlePost) => (
      <BlogPost  post={singlePost} />
    ))}
  </>
  )
}

export default App
