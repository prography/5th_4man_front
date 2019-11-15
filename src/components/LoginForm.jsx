import React, { useState } from 'react';
import { Input, Button, Icon } from 'antd';

const LoginForm = ({ close }) => {
  const [email, setEmail] = useState();

  const onChangeEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="login-header">
        <div className="main-logo">
          {' '}
          <span className="point text-bold">개</span>발은{' '}
          <span className="point text-bold">같</span>이{' '}
          <span className="point text-bold">하</span>자
        </div>
        <div className="close-box">
          <Icon onClick={close} type="close" />
        </div>
      </div>
      <hr className="line" />
      <div className="login-contents">
        <p className="login-title">개같하로 개발 같이 하기</p>
        <p className="login-content">
          15초만에 간편하게 가입하고
          <br /> 나에게 맞는 팀을 확인하세요!
        </p>
      </div>
      <Input
        tpye="text"
        className="email-input"
        value={email}
        name="email"
        onChange={onChangeEmail}
        placeholder="이메일을 입력해주세요."
        size="large"
      />
      <Button size="large" className="email-button" block>
        <Icon type="mail" className="email-icon" />
        이메일로 시작하기
        <span id="right-space" />
      </Button>
      <hr className="line" />
      <Button className="github-button" size="large" block>
        <Icon type="github" className="github-icon" />
        깃허브로 시작하기
        <span id="right-space" />
      </Button>
    </>
  );
};

export default LoginForm;
