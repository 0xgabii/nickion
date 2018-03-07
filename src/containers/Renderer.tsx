import * as React from 'react';
import { Container, Text } from '../components/Renderer';

interface State {
  main: { width: number, height: number };
  text: { x: number, y: number };
}

class RendererContainer extends React.Component<{}, State> {
  state: State = {
    main: {
      width: 300,
      height: 300,
    },
    text: {
      x: 150,
      y: 150,
    }
  };

  render() {
    const { main, text } = this.state;

    return (
      <Container
        width={main.width}
        height={main.height}
      >
        <Text
          x={text.x}
          y={text.y}
          text="text"
        />
      </Container>
    );
  }
}

export default RendererContainer;
