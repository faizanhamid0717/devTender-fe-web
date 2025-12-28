import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../utils/constents";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { targetUserId } = useParams();
  const loggedInUser = useSelector((store) => store.user);
  console.log(loggedInUser);
  const { _id, firstName, photoUrl } = loggedInUser || "";
  // console.log({ _id, firstName, photoUrl });
  // const userId = loggedInUser?._id;
  // const user = loggedInUser?.firstName;
  // const avatar = loggedInUser?.photoUrl

  const fetchChat = async () => {
    const chat = await axios.get(baseURL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    console.log(chat.data.messages);

    const chatMessages = chat?.data?.messages?.map((ele) => {
      return {
        firstName: ele.senderId.firstName,
        lastName: ele.senderId.lastName,
        text: ele.text,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChat();
  }, []);
  // make connection with server when we load
  useEffect(() => {
    if (!_id) {
      return;
    }
    const socket = createSocketConnection();
    // as soon as soon page loads join the socket connection is mane and join chat event is emmited
    socket.emit("joinChat", { firstName, _id, targetUserId, photoUrl });
    socket.on("messageReceived", ({ firstName, text, photoUrl, _id }) => {
      console.log({ firstName, text, photoUrl });
      setMessages((messages) => [
        ...messages,
        { firstName, text, photoUrl, _id },
      ]);
    });
    // clean up function
    return () => {
      socket.disconnect();
    };
  }, [_id, targetUserId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName,
      _id,
      targetUserId,
      text: newMessage.trim(),
      photoUrl,
    });
    setNewMessage("");
  };

  return (
    <div className="w-300 h-[70vh] flex flex-col mx-auto border border-gray-600 m-5 bg-black text-white">
      <h1 className="p-5 border-b  border-gray-600 font-bold text-xl">Chat</h1>
      <div className="flex-1 overflow-scroll p-5">
        {messages?.map((msg, ind) => {
          const isMyMessage = msg.firstName === firstName;
          return (
            <div
              key={ind}
              className={`chat ${isMyMessage ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-header">
                {firstName}
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">{msg.text}</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-600 flex gap-2 items-center">
        <input
          type="text"
          placeholder="wright..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-600 rounded p-2"
        ></input>
        <button className="btn btn-secondary" onClick={sendMessage}>
          send
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Chat;
