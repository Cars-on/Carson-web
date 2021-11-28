import React, { useEffect } from 'react';
import NextHead from 'next/head';
import io from 'socket.io-client';

import { Container, Content, Footer, Messages } from './styles';
import moment from 'moment';

const ChatModule: React.FC = () => {
  const socket = io('http://localhost:9999');

  let idChatRoom = '';

  function onLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');

    const defaultAvatar =
      'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png';

    document.querySelector('.user_logged').innerHTML += `
    <img
      className="avatar_user_logged"
      src=${defaultAvatar}
    />
    <strong id="user_logged">${name}</strong>
  `;

    socket.on('new_users', user => {
      const existInDiv = document.getElementById(`user_${user._id}`);

      if (!existInDiv) {
        addUser(user);
      }
    });

    socket.emit('get_users', users => {
      users.map(user => {
        if (user.email !== email) {
          addUser(user);
        }
      });
    });

    socket.on('message', data => {
      if (data.message.roomId === idChatRoom) {
        addMessage(data);
      }
    });

    socket.on('notification', data => {
      const user = document.getElementById(`user_${data.from._id}`);
      if (data.roomId !== idChatRoom) {
        user.insertAdjacentHTML(
          'afterbegin',
          `
      <div className="notification"></div>`,
        );
      }
    });
  }

  function addMessage(data) {
    const divMessageUser = document.getElementById('message_user');

    divMessageUser.innerHTML += `
      <span className="user_name user_name_date">
       <img
        className="img_user"
        src=${data.user.avatar}
      />

      <strong> ${data.user.name} &nbsp; </strong>
      <span>  ${moment(data.message.created_at).format(
        'DD/MM/YYYY HH:mm',
      )} </span></span
    >
    <div className="messages">
      <span className="chat_message"> ${data.message.text}</span>
    </div>
  `;
  }

  function addUser(user) {
    const usersList = document.getElementById('users_list');
    usersList.innerHTML += `
    <li
      className="user_name_list"
      id="user_${user._id}"
      idUser="${user._id}"
    >
      <img
        className="nav_avatar"
        src=${user.avatar}
      />
      ${user.name}
    </li>
  `;
  }

  useEffect(() => {
    document.getElementById('user_message').addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        const message = e.target.value;

        e.target.value = '';

        const data = {
          message,
          idChatRoom,
        };

        socket.emit('message', data);
      }
    });

    document.getElementById('users_list').addEventListener('click', e => {
      console.log('document');

      const inputMessage = document.getElementById('user_message');
      inputMessage.classList.remove('hidden');

      document
        .querySelectorAll('li.user_name_list')
        .forEach(item => item.classList.remove('user_in_focus'));

      document.getElementById('message_user').innerHTML = '';

      if (e.target) {
        const idUser = e.target.getAttribute('idUser');

        e.target.classList.add('user_in_focus');

        const notification = document.querySelector(
          `#user_${idUser} .notification`,
        );

        if (notification) {
          notification.remove();
        }

        socket.emit('start_chat', { idUser }, response => {
          idChatRoom = response.room.idChatRoom;

          response.messages.forEach(message => {
            const data = {
              message,
              user: message.to,
            };

            addMessage(data);
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    const defaultAvatar =
      'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png';
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const ad_owner_name = urlParams.get('ad_owner_name');
    const ad_owner_email = urlParams.get('ad_owner_email');

    socket.emit('start', {
      name,
      avatar: defaultAvatar,
      email,
    });

    if (ad_owner_email && ad_owner_name) {
      socket.emit('start', {
        name: ad_owner_name,
        avatar: defaultAvatar,
        email: ad_owner_email,
      });
    }

    onLoad();
  }, []);

  return (
    <Container>
      <NextHead>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css"
          integrity="sha512-RntatPOhEcQEA81gC/esYoCkGkL7AYV7TeTPoU+R9zE44/yWxVvLIBfBSaMu78rhoDd73ZeRHXRJN5+aPEK53Q=="
          crossorigin="anonymous"
        />
      </NextHead>

      <Content>
        <div className="flex flex-1 text-white">
          <div className="w-3/12 h-screen bg-gray-900 position-relative">
            <div id="users" className="m-3">
              <div className="bg-green w-4"></div>
              <ul id="users_list"></ul>
            </div>

            <Footer>
              <div className="user_logged"></div>
            </Footer>
          </div>

          <Messages className="w-9/12 bg-gray-700" id="c_message">
            <div className="message_user" id="message_user"></div>

            <input
              type="text"
              id="user_message"
              className="shadow bg-gray-600 absolute bottom-0 w-8/12 m-3 p-2 rounded focus:outline-none hidden"
              placeholder="Digite sua mensagem"
            />
          </Messages>
        </div>
      </Content>
    </Container>
  );
};

export default ChatModule;
