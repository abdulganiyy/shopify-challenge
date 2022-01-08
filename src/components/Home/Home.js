import React,{useEffect,useState} from 'react'
import './Home.css';

import axios from 'axios';

import Card from '../Card/Card';
import spinner from '../../images/Spinner-2.gif'

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        const fetchData = async ()=> {
            try{
                const fetchedData = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
                setData(fetchedData.data.photos)
                setLoading(false)

            }catch(err){
                console.log('error occurred')
            }
        }

        fetchData();

    },[])
    return (
        <>{loading?<img src={spinner}  alt='spinner' className='spinner'/>:<div className='home'>
        <div>
            <h2>Spacestagram</h2>
            <p>Brought to you by NASA's Mars Rover Photos API</p>
        </div>
       {data.map((photo)=> <Card key={photo.id} photo={photo} />)} 
    </div>}
        
        </>
    )
}

export default Home
