import {Button, RoundedButtons} from './components/button';

function App() {
  return (
    <>
      <Button>hello world</Button>
      <Button primary>hello world</Button>
      <Button danger>hello world</Button>
      <RoundedButtons>rounded</RoundedButtons>
      <Button rounded>another rounded button</Button>
    </>
  );
}

export default App;
