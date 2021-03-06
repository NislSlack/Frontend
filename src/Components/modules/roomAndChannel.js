import produce from 'immer';
import { pullAllRoom } from '../pullDataFunc/pullData';

const INIT_SOCKET = 'roomAndChannel/INIT_SOCKET';
const SET_MYID = 'roomAndChannel/SET_MYID';
const ADD_ROOM = 'roomAndChannel/ADD_ROOM';
const SELECT_ROOM = 'roomAndChannel/SELECT_ROOM';
const ADD_CHANNEL = 'roomAndChannel/ADD_CHANNEL';
const SELECT_CHANNEL = 'roomAndChannel/SELECT_CHANNEL';
const RECEIVE_CHAT = 'roomAndChannel/RECEIVE_CHAT';
const PULL_ROOM = 'roomAndChannel/PULL_ROOM';

export const pullRoom = () => {
    const rooms = pullAllRoom();
    return ({
        type: PULL_ROOM,
        rooms: rooms,
    })
}

export const initSocket = socket => ({
    type: INIT_SOCKET,
    socket: socket,
})

export const setMyid = id => ({
    type: SET_MYID,
    id: id,
})
export const addRoom = roomName => ({
    type: ADD_ROOM,
    room: {
        id: nextRoomId++,
        name: roomName,
        channels: [],
    },
})

export const selectRoom = roomId => ({
    type: SELECT_ROOM,
    id: roomId,
})

export const addChannel = (id, channelName) => ({
    type: ADD_CHANNEL,
    channel: {
        id: id,
        name: channelName,
        chat: [

        ]
    }
})

export const selectChannel = channelId => ({
    type: SELECT_CHANNEL,
    id: channelId,
})

export const receiveChat = chat => ({
    type: RECEIVE_CHAT,
    chat: chat,
})

let nextRoomId = 1;

const initialState = {
    socket: null,
    myid: 5469775,
    selectRoom: 0,
    selectChannel: 0,
    rooms: [
        {
            id: 1,
            name: 'first room',
            channels: [
                {
                    id: 1,
                    name: '1-1 channel',
                    chat: [

                    ]
                },
                {
                    id: 2,
                    name: '1-2 channel',
                    chat: [
                        // {
                        //     id: 5555555,
                        //     name: 'κΉμν',
                        //     time: '4:22 PM',
                        //     content: 'μλνμΈμ μ¬λ¬λΆ~!'
                        // },
                        // {
                        //     id: 5469775,
                        //     name: 'μ΄μμ² ',
                        //     time: '5:34 AM',
                        //     content: 'λ°©κ°λ°©κ° μ¬λ¬λΆ~!'
                        // },
                        // {
                        //     id: 6666666,
                        //     name: 'λ³λ₯ μ§±',
                        //     time: '0:00 AM',
                        //     content: 'μμ·¨!'
                        // },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'second room',
            channels: [
                {
                    id: 1,
                    name: '2-1 channel',
                    chat: []
                },
                {
                    id: 2,
                    name: '2-2 channel',
                    chat: []
                },
            ]
        },
    ],
};

export default function roomAndChannel(state = initialState, action) {
    switch (action.type) {
        case INIT_SOCKET:
            return { ...state, socket: action.socket }
        case PULL_ROOM:
            console.log(action.rooms)
            return { ...state, }
        case SET_MYID:
            return { ...state, myid: action.id }
        case ADD_ROOM:
            return { ...state, rooms: state.rooms.concat(action.room) };
        case SELECT_ROOM:
            return { ...state, selectRoom: action.id, selectChannel: 0 };
        case ADD_CHANNEL:
            return produce(state, draft => {
                draft.rooms[state.selectRoom - 1].channels.push(action.channel);
            })
        case SELECT_CHANNEL:
            return { ...state, selectChannel: action.id };
        case RECEIVE_CHAT:
            let sendRoom;
            let sendChannel;
            state.rooms.map(room => {
                if (room.name == action.chat.channel_name) {
                    sendRoom = room.id
                    room.channels.map(channel => {
                        if (channel.name == action.chat.room_name) {
                            sendChannel = channel.id
                        }
                    })
                }
            })
            return produce(state, draft => {
                draft.rooms[sendRoom - 1].channels[sendChannel - 1].chat.push(action.chat);
            })
        default:
            return state;
    }
}