import Login from "./Login";
import io from "socket.io-client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { initSocket } from "./Components/modules/roomAndChannel";
import { receiveChat } from "./Components/modules/roomAndChannel";

// const socket = io.connect("http://localhost:80");
// socket.emit("message", {
//   channel_name: 'first channel',
//   room_name: 'first room',
//   user_name: 'sangchovy',
//   content: 'hello',
// });

const socket = io.connect("http://localhost:80");

function App() {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  useEffect(() => {
    socket.on('message', function (data) {
      console.log("App.js Socket(receive chat) ", data);
      dispatch(receiveChat(data));
    });
    dispatch(initSocket(socket));

    let sendingRoom = [];

    store.rooms.map(room => room.channels.map(channel => {
      console.log(room.name);
      console.log(channel.name);
      sendingRoom.push({
        channel_name: room.name,
        room_name: channel.name,
      });

    }))
    socket.emit("join", sendingRoom)
    console.log(sendingRoom);
  }, [])

  return (
    <Login />
  );
}

export default App;
