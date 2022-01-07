import styled from "styled-components"
import io from "socket.io-client";
import MainBoxContainer from "./Components/Container/MainBoxContainer"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { initSocket, pullRoom } from "./Components/modules/roomAndChannel";
import { receiveChat } from "./Components/modules/roomAndChannel";
import { pullAllRoom } from "./Components/pullDataFunc/pullData";

const BackDiv = styled.div`
    width: 100%;
    height: 100%;
`

const socket = io.connect("http://localhost:80");

const Main = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    useEffect(() => {
        socket.on('message', function (data) {
            //console.log("App.js Socket(receive chat) ", data);
            dispatch(receiveChat(data));
        });
        dispatch(initSocket(socket));

        let sendingRoom = [];

        store.rooms.map(room => room.channels.map(channel => {
            sendingRoom.push({
                channel_name: room.name,
                room_name: channel.name,
            });

        }))
        socket.emit("join", sendingRoom)

        dispatch(pullRoom());
    }, [])
    return (
        <BackDiv>
            <MainBoxContainer />
        </BackDiv>
    )
}

export default Main;