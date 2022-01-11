import {ColumnContainer, ColumnTitle} from "../styles";
import {FC, ReactNode} from 'react';
import {AddNewItem} from "./AddNewItem";

type ColumnProps = {
    text: string
    children?: ReactNode
}


export const Column: FC<ColumnProps> = ({text, children}) => {
    return (
        <ColumnContainer>
            <ColumnTitle>
                {text}
            </ColumnTitle>
            {children}
            <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another task"} dark/>
        </ColumnContainer>
    );
}
