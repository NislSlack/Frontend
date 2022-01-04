import BubbleBox from "../Presenter/BubbleBox";
import { OpponentName, OpponentDate, OpponentContent } from "../Presenter/InBubble";

const OpponentBubbleContainer = ({ log }) => {

    return (
        <BubbleBox>
            <OpponentName>{log.name}</OpponentName>
            <OpponentDate>{log.time}</OpponentDate>
            <OpponentContent>{log.content}</OpponentContent>
        </BubbleBox>
    )
}

export default OpponentBubbleContainer;