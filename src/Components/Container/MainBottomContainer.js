import styled from "styled-components"
import MainLeftNavContainer from "./MainLeftNavContainer"
import MainChannelNavContainer from "./MainChannelNavContainer"
import { useSelector, useDispatch } from 'react-redux';
import { addRoom } from "../modules/roomAndChannel";
import MainChatContainer from "./MainChatContainer";

const UnderDiv = styled.div`
    display:flex;

    width: 100%;
    height: 100%;
`

const MainBottomContainer = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const addRoomFunc = roomName => dispatch(addRoom(roomName));

    return (
        <UnderDiv>
            <MainLeftNavContainer store={store} addRoomFunc={addRoomFunc} />
            <MainChannelNavContainer />
            <MainChatContainer />
        </UnderDiv>
    )
}

export default MainBottomContainer;
