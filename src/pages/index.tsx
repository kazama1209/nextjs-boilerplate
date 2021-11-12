import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Home: React.FC = () => {
  const Wrapper = styled.section`
    min-height: 100vh;
    padding: 4rem;
    background: bisque;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Heading = styled.h1`
    font-size: 1rem;
    color: ${(props) => (props.color ? props.color : 'inherit')};
  `;

  return (
    <>
      <Wrapper>
        <Button variant='outlined' color='inherit'>
          <Heading color='inherit'>Hello World!</Heading>
        </Button>
      </Wrapper>
    </>
  );
};

export default Home;
