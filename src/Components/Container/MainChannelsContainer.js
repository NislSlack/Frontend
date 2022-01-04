import MainChannelsPresenter from "../Presenter/MainChannelsPresenter";
import FoldingChannels from "./FoldingChannels";
import { useSelector } from "react-redux";

const MainChannelsContainer = ({ rooms }) => {
    const store = useSelector(state => state);


    return (
        <MainChannelsPresenter>
            {store.selectRoom !== 0 && <FoldingChannels rooms={rooms} />}
        </MainChannelsPresenter>
    )
}

export default MainChannelsContainer;