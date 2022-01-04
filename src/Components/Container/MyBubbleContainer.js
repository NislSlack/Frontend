import BubbleBox from "../Presenter/BubbleBox";
import { MyName, MyDate, MyContent } from "../Presenter/InBubble";


const MyBubbleContainer = ({ log }) => {

    return (
        <BubbleBox>
            <MyName>{log.name}</MyName>
            <MyDate>{log.time}</MyDate>
            <MyContent>{log.content}</MyContent>
        </BubbleBox>
    )
}

export default MyBubbleContainer;