import React, { useState } from "react";
import bridge from '@vkontakte/vk-bridge';
import { changeUserAddres } from "../App";
import { Panel, PanelHeader, Header, Group, Div, Title, PanelHeaderBack,Button } from '@vkontakte/vkui';
import "../style/style.scss";


const Gps = ({ id, go}) => {
    const [[lat,lon,acc], setGeo] = useState([0,0,0]);
    const [fetchedUser, setUser] = useState(false);
    const [userData, setUserData]= useState('');
    bridge.send('VKWebAppGetGeodata')
    .then((data) => { 
        if (data.available) {
            setGeo([data.lat,data.long,data.accuracy]);
            setTimeout(geocoding(),4000)
        }
    })
    .catch((error) => {
        console.log(error);        
    });
    let geocoding = ()=>{
        if(!fetchedUser){
            fetch(`https://geocode-maps.yandex.ru/1.x/?&geocode=${lon},${lat}&apikey=2fd87198-7275-49f7-b2e8-9697b0331bfc&format=json&results=1&kind=house`)
            .then(response=>{return response.json()})
            .then(data =>{
                console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject);
                changeUserAddres(data.response.GeoObjectCollection.featureMember[0].GeoObject.name)
                global.userAddres = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
                console.log(global.userAddres);
                if(data.response.GeoObjectCollection.featureMember[0].GeoObject != undefined){
                    setUserData(data.response.GeoObjectCollection.featureMember[0].GeoObject);    
                }
            })
            .catch(error=>{
                console.error(error);
            });
            setUser(true);
        }         
    }
       
 
	return (
    <Panel id={id}>
		<PanelHeader 
            left={<PanelHeaderBack onClick={() => {go("home")}} />}>
            НайдиШавуху
        </PanelHeader>
		<Group >           
			<Div className="div1">
                <Title level='3'>Вы находитесь: {userData.name} {userData.description}</Title>
                <Button className="btn" size="l" mode="secondary" onClick={() => {
                    go("byAddres");                    
                    }} style={{ margin: "16px 16px" }}>Да</Button>
                <Button className="btn" size="l" mode="secondary" onClick={() => go("addr")} style={{ marginBottom: 16}}>Нет</Button>
			</Div>
		</Group>
	</Panel>
    )
};

export default Gps;