import React from 'react';
import {AppContainer} from "./styles";
import {FC} from 'react';
import {AddNewItem} from "./Components/AddNewItem";
import {Column} from "./Components/Column";
import {Card} from './Components/Card';

export const App: FC = ({children}) => {
    return (
        <AppContainer>
            <Column text={"To Do"}>
                <Card text={"Generate app scaffold"}/>
            </Column>
            <Column text={"In Progress"}>
                <Card text={"Learn Typescript"}/>
            </Column>
            <Column text={"Done"}>
                <Card text={"Begin to use static typing"}/>
            </Column>
            <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"}/>
        </AppContainer>
    );
}

// export default App;
