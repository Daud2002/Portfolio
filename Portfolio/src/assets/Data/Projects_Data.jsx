import weather from '../images/weather.png'
import blogapp from '../images/blogg_app.png'
import foodapp from '../images/Foodapp.png'
import ahmasoft from '../images/Ahmasoft.png'
import carental from '../images/car-rental.png'


const projects = [
    {
      name: 'Ahmasoft',
      des: 'Ahmasoft is a startup based website designed to showcase company portfolio to their clients. It uses framer motion for some styling and is made using ReactJS & Tailwind css.',
      link: 'https://ahmasoft.com/',
      image: ahmasoft
    },
    {
      name: 'Car Rental App',
      des: 'Car rental app is being use by individual to choose their desired vehicle available by the showroom owner. It will show details  of car like model, transmission, fuel etc.',
      link: 'https://drivehubbydaud.vercel.app/',
      image: carental
    },
    {
      name: 'Food Ordering App',
      des: 'Food Ordering app is use to give ther order of food and that will be displayed on admin pannel. This website allows user to choose their desired food from a number of categories.',
      link: 'https://food-website-frontend-nine.vercel.app/',
      image: foodapp
    },
    {
      name: 'Blogging App',
      des: 'Blogging app uses a dummy data from an API which is stored in backend of project using Express. This app allows user to read the bloggs while selecting for categories and also can use pagination to move next.',
      link: 'https://blog-app-for-client.vercel.app/',
      image: blogapp
    },
    {
      name: "Weather App",
      des: "Weather app provides real-time weather updates and forecasts for any location. Users can easily track conditions such as temperature and condition tailored to their preferences.",
      link: 'https://daudsweather.vercel.app/',
      image: weather
    }]

    export default projects;