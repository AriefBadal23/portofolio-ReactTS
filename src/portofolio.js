
export const portoflio = {
  "about": `I'm a second-year Computer Science student experienced in both team 
    and individual projects. I specialize in backend development using C#, 
    building secure WebAPIs, and ensuring efficient data flow to the frontend. 
    I also work with Python, ReactJS, Docker, and PostgreSQL, and have a keen 
    interest in cloud development and scalable applications. I strive to create 
    secure, scalable, and maintainable solutions while continuously expanding my skills.
    `,

  "projects": [
    {
      title: "Image Service",
      url: "https://www.google.com",
      description: `Created an webservice (API) to resize images in different ratios for the hello-energy platform, which also increased the loading performance of the images that were used for blog posts and other parts where the images were used. 
      For this I have used Flask for the API, made use of Docker to make it run inside a container to make it easy to deploy, Postman to test the API endpoints and I also wrote unittest with Pytest.`,
      tools: ["Python", "C#"],
      image: "imageservice.png"
    },
    {
      title: "Album API",
      url: "https://www.google.com",
      description: `For the course development I have created an Album API backend  with C#/ ASP.NET Core,
                    Entity Framework Core as the ORM and ReactJS for the frontend. I made use of Docker to containarize the application.
                    For this I made use of several AWS services like Amazon Elastic Container Registry,
                    Amazon RDS and Elastic Container Service. To make an CI/CD pipeline I made use of Github Actions.`,
      tools: ["ASP.NET Core", "C#"],
      image: "albumapi.png"
    },
    {
      title: "TODO API with Blazor UI",
      url: "https://www.google.com",
      description: `An ASP.NET Core Todo list CRUD API with session based authentication. A user can login and a session is being created for a certain period of time.
       For the frontend I have used Blazor components and use HttpClient to connect with the API.`,
      tools: ["ASP.NET Core", "C#", "Blazor"],
      image: "image.png"
    }],

  "skills": [
    "Python",
    "C#",
    "ASP.NET Core",
    "ReactJS",
    "JavaScript",
    "PostgreSQL",
    "Entity Framework Core",
    "Docker"]
};
