import React from 'react';
import Gps from '../img/gps.svg';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Image } from '@vkontakte/vkui';

const Home = ({ id, go}) => (
	<Panel style={{width:"100%"}} id={id}>
		<PanelHeader>НайдиШавуху</PanelHeader>	
		
		<Group >		
			<Div className='div1'>
				<Div className='div2'/>
				<Header mode="primary">Включите GPS или выберите адрес</Header>
				<Div >
					<Button className='btn' stretched size="l" mode="secondary" onClick={()=>{go("gps")}} style={{ marginBottom: 16 }}>
						Gps
					</Button>
					<Button className='btn' stretched size="l" mode="secondary" onClick={() => {go("addr")}}>
						Ввести местоположение
					</Button>
				</Div>
			</Div>	
		</Group>
		
	</Panel>
);



export default Home;
