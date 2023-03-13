import React, { useEffect, useState } from "react";
import {changeUserAddres} from "../App"
import { Panel, PanelHeader, Header, Group, PanelHeaderBack, FormItem, Input, FormLayout,Button } from '@vkontakte/vkui';

const Addr = ({ id, go}) => {

    const [inputOne, setInputOne] = useState('');
    useEffect(()=>{
        changeAddres(inputOne)
    })
    const changeAddres =(text)=>{
        changeUserAddres(text);
    }
	return (
    <Panel id={id}>
		<PanelHeader 
            left={<PanelHeaderBack onClick={() => go("home")} />}>
            НайдиШавуху
        </PanelHeader>
		<Group >
        <Header mode="primary">Определение по адресу</Header>
            <FormLayout className='div1 form'>
                <FormItem top="" >
                <Header style={{margin:"0 0 0 80px"}} mode="primary">Ваш адрес</Header>
                    <Input
                    before={undefined}
                    after={undefined}
                    type="text"
                    align={"left"}
                    placeholder={"Ваш адрес"}
                    disabled={false}
                    onChange={(event) => {setInputOne(event.target.value)}}
                    />
                </FormItem>
                <Button className="btn" stretched size="l" mode="secondary" onClick={() => go("byAddres")} style={{ marginBottom: 16 }}>
			    Подтвердить
		    </Button>
            </FormLayout>
            {/* Свердловский Проспект 41 */}
            
		</Group>   
	</Panel>
    )
};

export default Addr;