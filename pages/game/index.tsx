import React, {useState, useEffect} from 'react'
import {io} from 'socket.io-client'

export const socket = io('http://localhost:5001?token=qweqwe123123', {
    autoConnect: false,
})

export default function Game() {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const [connected, setConnected] = useState(false)
    const [username, setUsername] = useState('')

    useEffect(() => {
        const onConnect = () => setConnected(true)
        const onDisconnect = () => setConnected(false)
        // @ts-ignore
        const onMessages = (data) => setMessages((prev) => [...prev, ...data])

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('messages', onMessages)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('messages', onMessages)
        }
    }, [])

    async function connect() {
        socket.connect()
    }

    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
        }
        socket.emit('sendMessage', JSON.stringify(message))
        setValue('')
    }

    if (!connected) {
        return (
            <div className="center">
                <div className="form">
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Введите ваше имя"
                    />
                    <button onClick={connect}>Войти</button>
                </div>
            </div>
        )
    }

    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div className="messages">
                    {messages.map((mess) => (
                        // @ts-ignore
                        <div key={mess.id}>
                            {/* @ts-ignore */}
                            {mess.event === 'connection' ? (
                                // @ts-ignore
                                <div className="connection_message">Пользователь {mess.username} подключился</div>
                            ) : (
                                <div className="message">
                                    {/* @ts-ignore */}
                                    {mess.username}. {mess.message}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
