import React from 'react';
import {AppContainer} from "./styles";
import {FC} from 'react';
import {AddNewItem} from "./Components/AddNewItem";
import {Column} from "./Components/Column";
import {useAppState} from "./state/AppStateContext";
import {addList} from "./state/action";
import {DndProvider} from "react-dnd";
import {HTML5Backend as Backend} from "react-dnd-html5-backend";

export const App: FC = ({children}) => {

    const {lists, dispatch} = useAppState();


    return (
            <AppContainer>
                {lists.map((list) => (
                    <Column text={list.text} id={list.id} key={list.id}/>
                ))}
                <AddNewItem onAdd={text => dispatch(addList(text))} toggleButtonText={"+ Add another list"}/>
            </AppContainer>
        // </DndProvider>
    );
}

// export default App;
