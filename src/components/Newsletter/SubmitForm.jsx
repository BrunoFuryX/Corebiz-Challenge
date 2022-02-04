import { sendData } from '../../services/api'

export default function SubmitForm(props){

    var name = props.nameToData
    var email = props.emailToData

    return(
        <button 
        disabled={props.isDisabled}
        onClick={(e) => sendData(name, email)}
        className="newsletter__button"
        >Eu quero!</button>
    )
}