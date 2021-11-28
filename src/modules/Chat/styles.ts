import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 90px;
  height: 100%;
  width: 100%;

  .h-screen.bg-gray-900.position-relative {
    background: #38bcac;
    box-shadow: inset 0px 1px #86868675;
  }

  #users {
    display: flex;
    margin-top: 40px;
  }

  .bg-gray-700 {
    background: #fff;
  }

  .shadow.bg-gray-600.absolute.bottom-0.rounded {
    padding: 1rem;
    color: #051211;
    background: white;
    border-radius: 2rem;
    filter: drop-shadow(-1.5px 1.5px 3px rgba(0, 0, 0, 0.25));
  }

  #users_list {
    li {
      display: flex;
      align-items: center;

      cursor: pointer;

      img {
        max-width: 60px;
        margin-right: 20px;
        border-radius: 50%;
      }

      @media (max-width: 900px) {
        flex-direction: column;
        width: 75px;
        text-align: center;

        img {
          margin: 20px 0 0 0;
        }

        &.user_in_focus {
          padding: 20px 5px;
        }
      }
    }
  }

  .user_name_list {
    margin: 1rem 0;
    padding: 1rem;

    cursor: pointer;
    color: #051211;
    background: white;
    border-radius: 2rem;
    filter: drop-shadow(-1.5px 1.5px 3px rgba(0, 0, 0, 0.25));

    .user_name_list {
      display: flex;
    }
  }

  .user_name {
    padding: 10px;
    display: flex;
    align-items: center;

    color: #051211;
  }

  .img_user {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user_name_date {
    margin-left: 20px;
  }

  .messages {
    padding: 10px;
  }

  .chat_message {
    display: flex;
    align-items: center;

    padding: 1rem;
    color: #051211;
    background: white;
    border-radius: 2rem;
    filter: drop-shadow(-1.5px 1.5px 3px rgba(0, 0, 0, 0.25));
  }

  .user_logged {
    padding: 1rem;
    display: flex;
    align-items: center;

    border-radius: 2rem;
    filter: drop-shadow(-1.5px 1.5px 3px rgba(0, 0, 0, 0.25));

    color: #fff;

    img {
      max-width: 60px;
      margin-right: 20px;
      border-radius: 50%;
    }
  }

  .chat_message {
    color: #000;
  }

  .message_user {
    overflow-y: hidden;
    height: max-content;

    div {
      padding: 0 0 0 80px;
      margin-bottom: 40px;
    }

    span {
      display: flex;
      align-items: center;

      &,
      * {
        color: #000;
      }
    }

    img {
      max-width: 60px;
      margin-right: 20px;
      border-radius: 50%;
    }
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #374151 #28303b;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #374151;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #374151;
    border-radius: 20px;
    border: 3px solid #28303b;
  }

  .user_in_focus {
    background: #237a70;
    border-radius: 2rem;
    filter: drop-shadow(-1.5px 1.5px 3px rgba(0, 0, 0, 0.25));

    padding: 0 60px 0 0;
    color: #fff;
  }

  .nav_avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .user_name_list {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .user_name_list img {
    margin-right: 10px;
  }

  .avatar_user_logged {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .notification {
    width: 20px;
    height: 20px;
    background: #ff0101;
    border-radius: 50%;
    margin: 3px -4px -27px -11px;
    border: 2px solid #000;
    position: absolute;
  }

  .hidden {
    display: none;
  }
`;

export const Content = styled.section`
  height: 100%;
  width: 100%;

  position: relative;
`;

export const Messages = styled.div`
  position: relative;
  background: #f7f7f7;

  padding: 20px;

  @media (max-width: 900px) {
    img {
      display: none;
    }
    .message_user div {
      padding: 0;
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  height: max-content;
  bottom: 0;

  background: #38bcac;
`;
