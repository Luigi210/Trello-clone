import {ColumnContainer, ColumnTitle} from "../styles";
import {FC, ReactNode} from 'react';
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "../state/AppStateContext";
import {Card} from './Card';
import { addTask } from "../state/action";


type ColumnProps = {
    text: string
    id: string
}


export const Column = ({text, id} : ColumnProps) => {

    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>
                {text}
            </ColumnTitle>
            {tasks.map(task => (<Card text={task.text} key={task.id} id={task.id}/>))}
            <AddNewItem onAdd={text => dispatch(addTask(text, id))} toggleButtonText={"+ Add another task"} dark/>
        </ColumnContainer>
    );
}
