import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
        </p>
        <Button className="customer" btnType={ ButtonType.Default } onClick={()=> { console.log(123)}}>default</Button>
        <Button size={ ButtonSize.Large }>大按钮</Button>
        <Button size={ ButtonSize.Small }>小按钮</Button>
        <Button btnType={ ButtonType.Primary }>Primary</Button>
        <Button btnType={ ButtonType.Danger }>Danger</Button>
        <Button disabled>disabled</Button>
        <Button btnType={ ButtonType.Link } href='https://www.baidu.com' target="_blank">百度</Button>
        <Button btnType={ ButtonType.Link } href='www.baidu.com' disabled>Link</Button>
      </header>
    </div>
  );
}

export default App;
