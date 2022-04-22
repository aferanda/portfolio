import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--white);
    padding: 0 20% 100px;
    position: relative;
    width: 100%;
    gap: 20px;
    z-index: 20px;

    @media (max-width: 900px) {
      height: auto;
      padding: 0 5%;
    }

  div {
    border: 3px solid var(--border);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`