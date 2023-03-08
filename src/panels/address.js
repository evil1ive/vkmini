import React, { useState } from "react";
import MapYandex from "./mapYandex";
import { Panel, PanelHeader, Header, Group, Div, Title, PanelHeaderBack } from '@vkontakte/vkui';


const Adress = ({ id, go}) => {
    const [fetchedUser, setUser] = useState(false);
    const [[lat,lon], setGeo] = useState([0,0]);
    const geocoding =()=>{
        if(!fetchedUser){
            fetch(`https://geocode-maps.yandex.ru/1.x/?&geocode=Челябинск ${global.userAddres}&apikey=2fd87198-7275-49f7-b2e8-9697b0331bfc&format=json&results=1`)
            .then(response=>{return response.json()})
            .then(data =>{
                let point = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ")
                setGeo([point[1],point[0]]);
            })
            .catch(error=>{
                console.error(error);
            });
            setUser(true);
        }
    }   
 
	return (
    <Panel onLoad={geocoding()} id={id}>
		<PanelHeader 
            left={<PanelHeaderBack onClick={() => {go("home")}}/>}>
            НайдиШавуху
        </PanelHeader>
		<Group header={<Header mode="secondary">Ваши координаты</Header>}>
			<Div>
                <Title level='3'>Ищем вас на картах широта:{lat} долгота:{lon}</Title>
			</Div>
           <MapYandex  altitude={lat} longitude={lon}/>
		</Group>
	</Panel>
    )
};

export default Adress;