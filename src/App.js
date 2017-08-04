import React, {Component} from 'react';
import Login from './Login';
import Logout from './Logout';
import Chat from "./Chat";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: {},
        };

        this.handleSend = this.handleSend.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        const {chatApi} = this.props;

        console.log('inside componentDidMount()');

        chatApi.onAuth((user) => {
            if (user) {
                this.subscribe();
                console.log('PRE: this.state');
                console.log(JSON.stringify(this.state));

                this.setState({user, subscribed: true});

                console.log('PRE: this.state');
                console.log(JSON.stringify(this.state));
            } else {
                this.unSubscribe();
                this.setState({user: null, messages: [], subscribed: false});
            }
        });
    }

    subscribe() {
        if (!this.state.subscribed) {
            this.subscribeToMessages();
            this.subscribeToUsers();
        }
    }

    subscribeToMessages() {
        const {chatApi} = this.props;
        this.onMessage = chatApi.onMessage((payload) => {
            const message = payload.val();
            this.setState({
                messages: [...this.state.messages, message],
            });
        });
    }

    subscribeToUsers() {
        const {chatApi} = this.props;
        this.onUserChanges = chatApi.onUserChanges((payload) => {
            const user = payload.val();
            const users = {...this.state.users};
            // const users = Object.assign({}, this.state.users); legacy
            users[user.userName] = user;
            this.setState({
                users,
            });
        });
    }

    unSubscribe() {
        if (this.state.subscribed) {
            this.onMessage.unSubscribe();
            this.onUserChanges.unSubscribe();
        }
    }

    handleSignIn() {
        const {chatApi} = this.props;
        chatApi.signIn();
    }

    handleSignOut() {
        const {chatApi} = this.props;
        chatApi.signOut();
    }

    handleSend(message) {
        const {chatApi} = this.props;
        chatApi.post(this.state.user, message);
    }

    isSignedIn() {
        return this.props.chatApi.isSignedIn();
    }

    render() {
        if (!this.isSignedIn()) {
            return <Login onPress={this.handleSignIn}/>;
        }

        return (
            <div className="App-content">
                <Logout onPress={this.handleSignOut}/>
                <Chat
                    users={this.state.users}
                    messages={this.state.messages}
                    onSend={this.handleSend}
                />
            </div>
        );
    }
}

export default App;
