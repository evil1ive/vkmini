import { YMaps, Map, Placemark, GeolocationControl, RouteButton, ZoomControl } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import placemarkIcon from '../img/shawa-icon.png';
import usermarkIcon from '../img/user-icon.png';

let places=[];

const MapYandex = (props) => {  
    const [fetchedUser, setUser] = useState(false);
    const defaultState = {
        center: [props.altitude, props.longitude],
        zoom: 15,
      };
      const getNearestShavyha = async (lat,lon)=>{
        if(!fetchedUser){
          await fetch(`https://search-maps.yandex.ru/v1/?apikey=c92adce5-d74d-4080-ad6e-784664d8dab4&text=Шаурма, Челябинск&lang=ru_RU&type=biz&ll=${lat},${lon}&spn=0.01,0.01&results=25`)
            .then(response=> response.json())
            .then(data =>{
                for(let i=0;i< data.features.length;i++){
                    places[i]=data.features[i]
                }           
            })
            .catch(error=>{
                console.error(error);
            });            
            setUser(true);
        }
        
    }   
    return(
        <YMaps onLoad={getNearestShavyha(props.altitude, props.longitude)}>
            <Map style={{height:"500px",width:"100%"}} defaultState={defaultState}>
            {places.map(place => (
                <Placemark
                    key={place.geometry.coordinates[0]+""+place.geometry.coordinates[1]}
                    geometry={[place.geometry.coordinates[1], place.geometry.coordinates[0]]}
                    
                    options={{
                        iconLayout: "default#image",
                        iconImageSize: [50, 50],
                        iconImageHref: placemarkIcon
                    }}
                    hintContent='Ну давай уже тащи'
                />
            ))}
                
                <Placemark geometry={[props.altitude, props.longitude]}
                options={{
                    iconLayout: "default#image",
                    iconImageSize: [50, 50],
                    iconImageHref: usermarkIcon
                }}
                />
                <GeolocationControl options={{ float: "left" }} />
                <RouteButton options={{ float: "right" }} />
                <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>       
      );
};
export default MapYandex