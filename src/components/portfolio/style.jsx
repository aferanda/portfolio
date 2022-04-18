import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top right, #f54269a2, #ffcf6766, transparent);

  // dark-mode
  /* background-image: linear-gradient(45deg, black, transparent); */

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Grid = styled(motion.div)`
  width: 50%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: end;

  div {
    width: 100%;
    height: 250px;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: -10px 8px 14px 0px #a9a9a9db;
    opacity: 0.8;
  }
`

export const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  z-index: 100;

  @media (max-width: 900px) {
    width: 100%;
    padding: 50px 20px;
    text-align: center;
  }

  img {
    width: 80%;
  }
`;
