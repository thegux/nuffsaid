import {Message} from '../../Api';

interface ReceivedMessage extends Message {
    id:string
}

export default ReceivedMessage;