import React from 'react';
import { Link } from 'react-router-dom';
import { message, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Axios from 'axios';

import LogoImage from '../assets/images/logo.png';

import Colors from '../constants/Colors';

const procLogin = async (email = '', password = '') => {
  if (email.trim() === '' || password.trim() === '') {
    message.warning('아이디와 패스워드를 모두 입력해주세요.');
    return;
  }

  Axios.post(
    '/auth/login',
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  )
    .then(response => {
      // console.log(response.headers['set-cookie']);
      console.log(response);
    })
    .catch(error => {
      const { data } = error.response;
      message.warning(data.message);
    });
};

export default props => {
  const [email, setEmail] = React.useState(''); // hook
  const [password, setPassword] = React.useState(''); // hook

  return (
    <div className={'layout'}>
      <div
        style={{
          width: '100%',
          maxWidth: 300,
          margin: '50px auto',
          textAlign: 'center',
        }}>
        <img
          style={{
            maxWidth: 200,
          }}
          src={LogoImage}
          alt={'logo'}
        />
        <div
          style={{
            padding: '20px 0',
          }}>
          <Input
            style={{
              height: 35,
              marginBottom: 10,
            }}
            prefix={<UserOutlined />}
            placeholder={'이메일'}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            type={'password'}
            style={{
              height: 35,
              marginBottom: 10,
            }}
            prefix={<LockOutlined />}
            placeholder={'패스워드'}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button
            block
            style={{
              height: 40,
              backgroundColor: Colors.mainColor,
              marginBottom: 10,
              color: '#fff',
            }}
            onClick={() => {
              procLogin(email, password);
            }}>
            <span
              style={{
                color: Colors.white,
              }}>
              로그인
            </span>
          </Button>
        </div>
        <div
          style={{
            paddingTop: 20,
            borderTop: '1px solid #eee',
          }}>
          <div>
            <Link
              style={{
                color: Colors.mainColor,
              }}
              to={'/account/find'}>
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div
            style={{
              marginTop: 5,
            }}>
            <Link
              style={{
                color: Colors.mainColor,
              }}
              to={'/account/register'}>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
