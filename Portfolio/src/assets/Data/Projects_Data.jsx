import weather from '../images/weather.png'
import blogapp from '../images/blogg_app.png'
import foodapp from '../images/Foodapp.png'
import socialapp from '../images/socialapp.png'
import carental from '../images/car-rental.png'


const projects = [
    {
      name: 'Social Welfare App',
      des: 'Social welfare website is still under developemenet. This website will specifically use by a welfare facebook page. It will show their city news in categories while there is also an option to donate screen which shows the account details.',
      link: 'https://humansofjpj.vercel.app/',
      image: socialapp
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