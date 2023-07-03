import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh' }}>
            <PrettyChatWindow
            projectId='0c97c529-c29c-4b07-8168-20df950ff0c6'
            username={props.user.username}
            secret={props.user.username}
            style={{height: '100%'}}
            />
        </div>
        )
}

export default ChatsPage