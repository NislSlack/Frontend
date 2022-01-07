import axios from 'axios';

export const pullAllRoom = async () => {
    try {
        const res = await axios.post('http://localhost:80/channel/get', {
            user_name: 'chul',
        })
        //console.log(res.data);
        return res.data;
    } catch (e) {
        console.log(e)
    }
};

