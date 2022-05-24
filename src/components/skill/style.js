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
    width: 100px;
    height: 100px;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      border: 3px solid var(--pink);
      box-shadow: 2px 3px 20px 0px #00000038;
      transform: scale(1.1);

      &::after {
        position: absolute;
        border-radius: 20px;
        text-align: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        content: attr(data-content);
        width: 100%;
        font-weight: 700;
        font-size: 0.8rem;
        color: var(--pink);
        background: #fff;
        opacity: 0.9;
      }
    }

    img {
      width: 60px;
      height: 60px;
    }
  }

`