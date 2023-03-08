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
		<Group header={<Header mode="secondary">Определение по адресу</Header>}>
            <FormLayout>
                <FormItem top="Ваш адрес" >
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
            </FormLayout>
            {/* Свердловский Проспект 41 */}
            <Button stretched size="l" mode="secondary" onClick={() => go("byAddres")} style={{ marginBottom: 16, width:"100%" }}>
			    Подтвердить
		    </Button>
		</Group>   
	</Panel>
    )
};

export default Addr;