import MainChatInputPresenter from "../Presenter/MainChatInputPresenter";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const TextInput = styled.textarea`
  width: 90%;
  height: 90%;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
  padding:20px;
  font-size:20px;
`

const ButtonResizing = styled(Button)`
    margin-left:10px;
    width: 8%;
    height: 90%;
    font-size:30px;
    background-color: #1E2230;
    border:solid 0px black;
`


const MainChatInputContainer = ({ room, channel }) => {
    return (
        <MainChatInputPresenter>
            {room !== 0 && channel !== 0 &&
                <>
                    <TextInput />
                    <ButtonResizing variant="primary">send</ButtonResizing>{' '}
                </>}
        </MainChatInputPresenter>
    )
}

export default MainChatInputContainer;