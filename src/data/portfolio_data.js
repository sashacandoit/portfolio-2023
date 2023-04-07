const about_me_tech = [
  ["JavaScript (ES6+)", "React", "Node.js"], ["Express.js", "Python", "Flask"], ["PostgreSQL", "SQL", "Wordpress"], ["HTML5", "SCSS", "JSON"], ["GitHub", "Netlify", "Heroku"]
]

const experience = [
  {
    company: "DMINTI Inc.",
    title: "Web Developer",
    start_date: "Aug 2021",
    end_date: "Present",
    experience: [
      "Created 20+ custom WordPress layouts for featured artists and artwork launches.",
      "Developed custom interface components, using Javascript, jQuery, CSS & HTML, to enhance the existing site design and functionality to best suit the company’s changing needs as a startup.",
      "Led the company’s migration from WordPress to React, in order to enable blockchain payments, improve load times, and allow for scalability."
    ]
  },
  {
    company: "Jain Family",
    title: "Family Manager & Personal Assistant",
    start_date: "Mar 2011",
    end_date: "Present",
    experience: [
      "Assisted with the design and construction of the family’s new home in New York, collaborating with architects, contractors, and interior designers to ensure the project was completed on time and within budget, and that needs and preferences of the family were taken into consideration throughout the building process.",
      "Oversaw all logistics related to 4 moves throughout and after construction, including packing, shipping, and unpacking of high value art, custom furniture and personal belongings. Coordinated with the couple to ensure that their Tracked expenses for the family and employees, maintaining detailed records of all expenditures and reconciling accounts on a monthly basis.",
      "Developed systems to streamline household organization, including scheduling regular maintenance and cleaning services, managing inventory, and implementing storage solutions. Improved efficiency and productivity by creating processes and procedures for daily tasks and developing custom manuals for troubleshooting common issues.",
      "Acted as the right hand to the couple through various professional ventures, special events, and social engagements, providing support and assistance as needed. Coordinated meetings and events, managed correspondence, and oversaw logistics related to travel and special needs or requests.",
      "Managed events both in the family’s home and through outside and international venues, coordinating logistics, design, guest lists, staffing, event setup and breakdown, and managing event flow and timing, ensuring all aspects of event execution ran smoothly and within budget.",
      "Oversaw all aspects of complex renovations, including project management, quality control, and logistics, permits and inspections. Maintained a high level of attention to detail, ensuring that all aspects of the renovation were executed flawlessly. Developed contingency plans for potential issues, proactively identifying and resolving problems before they arose.",
      "Demonstrated exceptional discretion and confidentiality in all tasks and responsibilities, ensuring that all information was kept confidential and sensitive information was protected. Maintained the utmost professionalism at all times."
    ]
  },
  {
    company: "Sotto il Sole Inc.",
    title: "Founder & Cobbler",
    start_date: "June 2017",
    end_date: "Present",
    experience: [
      "Founded and launched Sotto Il Sole, an ecommerce business that specializes in creating made-to-order sandals for clients, both through online sales and in-person pop-up events.",
      "Developed and implemented an effective marketing strategy that utilized social media platforms to drive online sales and generate buzz around pop-up events, resulting in at least 200% increase of web traffic and 75% increase in pop-up shop sales each year between 2017 and 2020.",
      "Successfully coordinated and executed 20+ pop-up events between New York and Miami, resulting in increased brand visibility and sales growth.",
      "Managed all aspects of the business, including inventory management, order fulfillment, and customer service, ensuring that all orders were processed accurately and efficiently.",
      "Cultivated strong relationships with suppliers in Italy to develop custom products for the brand and ensure timely delivery of high-quality materials that consistently met the high standards of the brand’s client base.",
      "Established a loyal client base through exceptional customer service and personalized attention to each order, leading to a high percentage of repeat customers and referrals."
    ]
  }
]

const featured_projects = [
  {
    title: "Packable",
    description: "A React web app that takes the guesswork out of the packing for a trip. By pulling from a location's past weather data, a user can enter their trip dates and destination, and see likely weather conditions for when they will be there. The app generates a template packing list based on the number of days the user will be traveling and the climate of their destination. The packing list can then be edited and saved to their user profile.",
    technologies: [
      "React", "Node.js", "Express.js", "Visual Crossing API", "Netlify"
    ],
    github: "https://github.com/sashacandoit/packable-backend.git",
    app_url: "#",
    image: "https://res.cloudinary.com/dokpuqyyp/image/upload/v1680777794/3a41d7e8fe17214db13b538cfe77830d_ifywbr.png"
  },
  {
    title: "Style Guide Generator",
    description: "Using Python and Flask, this web app automates the process of making brand guides for designers, generating a simple, editable style guide using a brand's color scheme, organizing font styles by their use, and displaying key styling requirements to guide designers in the rest of the branding process.",
    technologies: ["Python", "Flask", "PostgreSQL", "Google Fonts API", "Heroku"],
    github: "https://github.com/sashacandoit/style-guide-generator.git",
    app_url: "https://sasha-capstone-1.herokuapp.com/login",
    image: "https://res.cloudinary.com/dokpuqyyp/image/upload/v1680777890/contractbook_app_4x_a7yl2f.png"
  }
]

const other_projects = [
  {
    title: "Crypto Art Timeline for Wordpress Site",
    description: "A custom full-page timeline integrated on a Wordpress site displaying a chronological history of digital art",
    technologies: [
      "JQuery",
      "Javascript",
      "CSS",
      "Wordpress"
    ],
    url: "https://dminti.com/digital-art-chronology/",
    github: "#"
  },
  {
    title: "Ricci Albenda's Universal Color Clock",
    description: "A custom artist page featuring the launch of Ricci Albenda's Universal Color Clock NFT, developed to be integrated on a Wordpress site",
    technologies: [
      "Javascript",
      "CSS",
      "Wordpress"
    ],
    url: "https://dminti.com/universalcolorclock/",
    github: "https://github.com/sashacandoit/universal-color-clock.git"
  },
  {
    title: "Sasha' Portfolio",
    description: "The inner workings of my portfolio site!",
    technologies: [
      "React",
      "Netlify",
      "SCSS"
    ],
    github: "https://github.com/sashacandoit/portfolio-2023.git"
  }
]

const portfolio_data = {
  about_me: {
    "technologies": ["JavaScript (ES6+)", "React", "Node.js", "Express.js", "Python", "Flask", "PostgreSQL", "SQL", "Wordpress", "HTML5", "SCSS", "JSON", "GitHub", "Netlify", "Heroku"]
  },
  work: {
    "DMINTI": {
      title: "Web Developer @ DMINTI",
        start_date: "Aug 2021",
          end_date: "Present",
            "experience": [
              "Created 20+ custom WordPress layouts for featured artists and artwork launches.",
              "Developed custom interface components, using Javascript, jQuery, CSS & HTML, to enhance the existing site design and functionality to best suit the company’s changing needs as a startup.",
              "Led the company’s migration from WordPress to React, in order to enable blockchain payments, improve load times, and allow for scalability."
            ]
    },
    "Jain Family": {
      title: "Family Manager & Personal Assistant",
        start_date: "Mar 2011",
          end_date: "Present",
            experience: [
              "Assisted with the design and construction of the family’s new home in New York, collaborating with architects, contractors, and interior designers to ensure the project was completed on time and within budget, and that needs and preferences of the family were taken into consideration throughout the building process.",
              "Oversaw all logistics related to 4 moves throughout and after construction, including packing, shipping, and unpacking of high value art, custom furniture and personal belongings. Coordinated with the couple to ensure that their Tracked expenses for the family and employees, maintaining detailed records of all expenditures and reconciling accounts on a monthly basis.",
              "Developed systems to streamline household organization, including scheduling regular maintenance and cleaning services, managing inventory, and implementing storage solutions. Improved efficiency and productivity by creating processes and procedures for daily tasks and developing custom manuals for troubleshooting common issues.",
              "Acted as the right hand to the couple through various professional ventures, special events, and social engagements, providing support and assistance as needed. Coordinated meetings and events, managed correspondence, and oversaw logistics related to travel and special needs or requests.",
              "Managed events both in the family’s home and through outside and international venues, coordinating logistics, design, guest lists, staffing, event setup and breakdown, and managing event flow and timing, ensuring all aspects of event execution ran smoothly and within budget.",
              "Oversaw all aspects of complex renovations, including project management, quality control, and logistics, permits and inspections. Maintained a high level of attention to detail, ensuring that all aspects of the renovation were executed flawlessly. Developed contingency plans for potential issues, proactively identifying and resolving problems before they arose.",
              "Demonstrated exceptional discretion and confidentiality in all tasks and responsibilities, ensuring that all information was kept confidential and sensitive information was protected. Maintained the utmost professionalism at all times."
            ]
    },
    "Sotto il Sole Inc.": {
      title: "Founder & Cobbler",
        start_date: "June 2017",
          end_date: "Present",
            experience: [
              "Founded and launched Sotto Il Sole, an ecommerce business that specializes in creating made-to-order sandals for clients, both through online sales and in-person pop-up events.",
              "Developed and implemented an effective marketing strategy that utilized social media platforms to drive online sales and generate buzz around pop-up events, resulting in at least 200% increase of web traffic and 75% increase in pop-up shop sales each year between 2017 and 2020.",
              "Successfully coordinated and executed 20+ pop-up events between New York and Miami, resulting in increased brand visibility and sales growth.",
              "Managed all aspects of the business, including inventory management, order fulfillment, and customer service, ensuring that all orders were processed accurately and efficiently.",
              "Cultivated strong relationships with suppliers in Italy to develop custom products for the brand and ensure timely delivery of high-quality materials that consistently met the high standards of the brand’s client base.",
              "Established a loyal client base through exceptional customer service and personalized attention to each order, leading to a high percentage of repeat customers and referrals."
            ]
    }
  },
  "projects": {
    "Packable": {
      "description": "A React web app that takes the guesswork out of the packing for a trip. By pulling for a locations past weather data, a user can enter their trip dates and destination, and see likely weather conditions for when they will be there. The app generates a template packing list based on the number of days the user will be traveling and the climate of their destination. The packing list can then be edited and saved to their user profile.",
        "technologies": [
          "React", "Node.js", "Express.js", "Visual Crossing API", "Netlify"
        ],
          "github": "https://github.com/sashacandoit/packable-backend.git",
            "app_url": "#"
    },
    "Style Guide Generator": {
      "description": "Using Python and Flask, this web app automates the process of making brand guides for designers, generating a simple, editable style guide using a brand's color scheme, organizing font styles by their use, and displaying key styling requirements to guide designers in the rest of the branding process.",
        "technologies": ["Python", "Flask", "PostgreSQL", "Google Fonts API", "Heroku"],
          "github": "https://github.com/sashacandoit/style-guide-generator.git",
            "app_url": "https://sasha-capstone-1.herokuapp.com/login"
    }
  },
  other_projects: {
    "Crypto Art Timeline for Wordpress Site" : {
      "description": "A custom full-page timeline integrated on a Wordpress site displaying a chronological history of digital art",
        "technologies": [
          "JQuery",
          "Javascript",
          "CSS",
          "Wordpress"
        ],
          "url": "https://dminti.com/digital-art-chronology/",
            "github": "#"
    },
    "Ricci Albenda's Universal Color Clock": {
      "description": "A custom artist page featuring the launch of Ricci Albenda's Universal Color Clock NFT, developed to be integrated on a Wordpress site",
        "technologies": [
          "Javascript",
          "CSS",
          "Wordpress"
        ],
          "url": "https://dminti.com/universalcolorclock/",
            "github": "https://github.com/sashacandoit/universal-color-clock.git"
    },
    "Sasha' Portfolio": {
      "description": "The inner workings of my portfolio site!",
        "technologies": [
          "React",
          "Netlify",
          "SCSS"
        ],
          "github": "https://github.com/sashacandoit/portfolio-2023.git"
    }
  }
}

export {other_projects, featured_projects, experience, about_me_tech}