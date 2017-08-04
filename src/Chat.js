import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

class Chat extends Component {
    componentDidUpdate() {
        document.querySelectorAll('.messages')[0].scrollTop = 10000000;
    }

    render() {
        const {onSend, messages, users} = this.props;
        return (
            <div className="col-md-12 chat">
                <main>
                    <section>
                        <MessageList messages={messages}/>
                        <MessageInput onSend={onSend} />
                    </section>
                    <aside>
                        <UserList users={users}/>
                    </aside>
                </main>
            </div>
        );
    }
}

export default Chat;
