import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;

    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      width: Math.round(Math.random()*300) + 50,
      height: Math.round(Math.random()*300) + 50,
    }

    return (
      <Fragment>
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {condition ? '참' : '거짓'} 
        {condition ? '보여주세요' : null}<br />
        {condition && '보여요?'}
        <div style={style}></div>
      </Fragment>
    )
  }
}

export default App;
