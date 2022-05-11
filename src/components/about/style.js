import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  margin-top: 100px;
  padding: 0 10% 100px;
  position: relative;
  width: 100%;
  background-color: var(--white);
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 0 5% 50px;
  }

  p {
    font-size: 1.2em;
    line-height: 30px;
    text-align: center;

    @media (max-width: 900px) {
      text-indent: 30px;
    }
  }
`
