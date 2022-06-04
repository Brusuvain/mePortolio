export const resumeData = {
  text: "",
  summary: {
    name: "Suvain Goyal",
    summary:
      "Enthusiastic, inquisitive, yet phlegmatic Computer Engineer professionally skilled at React js with a strong foundation of C++ and Java. Adept at developing responsive websites. Quick and efficient at grasping new concepts, and adapt to new environment.",
    address: "addrss",
    phone: "---------",
    email: "sgoyal30@asu.edu",
  },

  education: [
    {
      degree: "Masters in Computer Science",
      institute: "Arizona State University",
      time1: "2022-on going",
      // percentage: "78%",
      summary:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
    {
      degree: "B.Tech - Computer Science",
      institute: "SRM Institute of Science and Technology",
      time1: "2016-2020",
      percentage: "78%",
      summary:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
      publication: {
        time: "June 2020",
        title:
          "Reinforcement Learning using Convolutional Neural Network for Game Prediction - International Journal of Innovative Technology and Exploring Engineering (IJITEE)",
        link: "",
      },
    },
    {
      degree: "High School ",
      institute: "St Joseph Academy",
      time1: "2007-2016",
      summary:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
  ],

  profExp: [
    {
      designation: "Front end Developer",
      duration: "May 2018 - July 2018",
      company: "HCL Technologies",
      location: "Noida, Uttar Pradesh",
      summary:
        "Developed an API using Java, HTML, and CSS, that would take in latitudes and longitude data and plot on a map which was later used to locate employees in COVID containment zones. Those employees were then assigned remote work by their managers",
      details: [
        {
          task: "Technical Lead for Front-end Team",
          link: "",
        },
        {
          task: "Worked on the following pages-",
          subInfo: [
            "Job listing - Page to show all jobs posted by the employer. Contains filters to filter out Posted-by, Location, and Job role; Contains page navigation at the bottom.",
            "Job posting- Page to allow the user to fill a 2 step form.",
            "Candidate Movement - Page to allow the employer to see all the candidates for a job. Candidates can be in different positions in the process, and the employer can change the status of the applied candidate. This page also contains filters to sort candidates.",
          ],
          link: "not live",
        },
        {
          task: "Taught and mentored 2 interns to help them understand important concepts of web development, and to help them become proficient at React js.",
          link: "",
        },
        {
          task: "Co-ordinated between backend and frontend to understand backend requirements and provide them with a basic data structure for APIs",
          link: "",
        },
      ],
      learning:
        "React js, HTML, SCSS, TypeScript, communication skills required to interact with a client, learnt about client based product requirements and time management for team, mentorship",
    },
    {
      designation: "Information Systems Intern",
      duration: "May 2019 - July 2019",
      company: "Tech Mahindra",
      location: "Noida, India",
      summary:
        "Engineered data visualizations using IBM’s PowerBI tool. Engineered daily and weekly visualizations on customer data to identify patterns and trends in customer behaviors. ",
      details: [
        {
          task: "Worked on the Home page",
          link: "https://www.udayy.com",
        },
        {
          task: "Worked on the About us page",
          link: "https://www.udayy.com/about-us",
        },
        {
          task: "Created OTP screen for mobile authentication",
          link: "",
        },
        {
          task: "Developed quiz portal for internal use, for feeding quizes data to the backend ",
          link: "",
        },
        {
          task: "Worked on Super Mom portal's home page ",
          link: "",
        },
        {
          task: "Created a form for olypiad registration",
        },
      ],
      learning: "React js, HTML, SCSS",
    },
    {
      designation: "Information Systems Intern",
      duration: "July 2020 - Dec 2020",
      company: "Sterlite Technologies",
      location: "Remote (Pune)",
      summary:
        "• Worked as a Tableau Developer, developed complex SQL scripts to get custom dataSets from POSTGRES, Oracle DataBase, SAP HANA. Projects involved getting a deep understanding of the relations and patterns data to create high-level Visualizations with multiple Levels of Details",
      details: [
        {
          task: "Understood the whole Network Analyzer(used for detecting problems in fiber and copper wire, provides suggestions based on analytical data) architecture and working",
          link: "",
        },
        {
          task: "Worked on Java code base to fix critial errors",
          link: "",
        },
        {
          task: "Created override file to change configuration from helm file (over Kubernetes) for installation of MariaDB.",
          link: "",
        },
        {
          task: "Wrote JMX(Jmeter) script for performance testing our application.",
          link: "",
        },
      ],
      learning:
        "Java, Docker, Kubernetes, Helm. Learned Basics of Hadoop, kafka, Jenkins, devTools",
    },
    {
      designation: "Java Developer (Intern)",
      duration: "Dec 2018 - Jan 2019",
      company: "SYNORIQ",
      location: "Jaipur, Rajasthan",
      summary:
        "Developed a software to automate digital record signing on EPFO government portal.",
      details: [
        {
          task: "Developed a Java based software, with Selenium web drivers, and sikuli script(for image processing) for automating and streamlining digital signing of records. The software used a simple UI for inputs(username, password, and digital key code) and scrapped through multiple EPFO pages, automatically opening each page that required a list of records to be signed, and signing them. Since each digital signature took around 5 minutes to process, the software would allow a person to simply leave the code running over night, and have all records signed, thus saving major chunk of their time.",
          link: "",
        },
      ],
      learning:
        "Java, Selenium Web Drivers, Web Automation using java, Sikuli Script",
    },
  ],

  
myprojects: [
  {
    title: "Soccer Tournament",
    techstack: "Django, JavaScript, HTML,CSS, Python, SCRUM",
    time1: "Fall 2021",   
    summary:
      "• Developed a Web Application for managing a soccer tournament, with event and tournament scheduling, along with map details about stadiums and hotels. Worked in a team of 5 following the Process of SCRUM. Worked on using a map API to display relevant markers, fetched from a Django database, and handled event scheduling. I also acted as the SCRUM Master for the standups and other SCRUM Meetings ",
  },
  {
    title: "Employee Management Application",
    techstack: "SpringBoot, Spring MVC, React",
    time1: "Summmer 2021",
    summary:
      "Created a CRUD application to add and remove employees with SpringBoot as the backend and used React for the Front End Used multiple REST APIs to connect and integrate the different parts of the application.",
   },
  {
    title: "Fog removal from single image ",
    techstack: "Python, MatLab",
    time1: "Spring 2020",
    summary:
      " Worked under a professor and researched Generative Adversarial Networks and CNNs to clean foggy and rainy images, used the  concept of Dark Channel Prior to detect pixels with fog/haze. Created a Python algorithm that could clean a foggy image to a clean image by adjusting the intensity of the pixels",
  },
  {
    title: "Soccer Tournament",
    techstack: "Django, JavaScript, HTML,CSS, Python, SCRUM",
    time1: "Fall 2021",   
    summary:
      "• Developed a Web Application for managing a soccer tournament, with event and tournament scheduling, along with map details about stadiums and hotels. Worked in a team of 5 following the Process of SCRUM. Worked on using a map API to display relevant markers, fetched from a Django database, and handled event scheduling. I also acted as the SCRUM Master for the standups and other SCRUM Meetings ",
  },
  {
    title: "Employee Management Application",
    techstack: "SpringBoot, Spring MVC, React",
    time1: "Summmer 2021",
    summary:
      "Created a CRUD application to add and remove employees with SpringBoot as the backend and used React for the Front End Used multiple REST APIs to connect and integrate the different parts of the application.",
   },
  {
    title: "Fog removal from single image ",
    techstack: "Python, MatLab",
    time1: "Spring 2020",
    summary:
      " Worked under a professor and researched Generative Adversarial Networks and CNNs to clean foggy and rainy images, used the  concept of Dark Channel Prior to detect pixels with fog/haze. Created a Python algorithm that could clean a foggy image to a clean image by adjusting the intensity of the pixels",
  },
],
};


