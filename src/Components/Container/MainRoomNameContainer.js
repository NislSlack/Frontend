import MainRoomNamePresenter from "../Presenter/MainRoomNamePresenter";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlinePlusCircle } from 'react-icons/ai';

const RoomName = styled.p`
    color:white;
    font-size:20px;
    margin: 0;
`

const MainRoomNameContainer = ({ selectRoom }) => {
    const store = useSelector(state => state);

    return (
        <MainRoomNamePresenter>
            <RoomName>{selectRoom !== 0 && store.rooms[selectRoom - 1].name}</RoomName>
            {selectRoom !== 0 && <AiOutlinePlusCircle />}
        </MainRoomNamePresenter>
    )
}

export default MainRoomNameContainer;