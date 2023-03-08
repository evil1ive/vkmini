import React from 'react';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>НайдиШавуху</PanelHeader>
		

		<Group header={<Header mode="secondary">Определение местоположения</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={()=>{go("gps")}} style={{ marginBottom: 16 }}>
					Определить местоположение через gps
				</Button>
				<Button stretched size="l" mode="secondary" onClick={() => {go("addr")}}>
					Ввести местоположение
				</Button>
			</Div>
		</Group>
	</Panel>
);



export default Home;
