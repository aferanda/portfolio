import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  display: flex;
  gap: 50px;
  padding: 0 10% 70px;

  img {
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 0 5% 50px;
  }

  p {
    font-family: Poppins, sans-serif;
    font-size: 1.2em;
    line-height: 30px;

    @media (max-width: 900px) {
      text-indent: 30px;
    }
  }
`

export const TextContainer = styled.div`
  width: 40%;
  gap: 20px;

  display: flex;
  flex-flow: column-reverse;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: row;
    width: 100%;
  }

  img {
    @media (max-width: 900px) {
      display: none;
    }
  }

  p {
    @media (max-width: 900px) {
      text-align: center;
    }
  }
`