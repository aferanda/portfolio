import blobLight from '../assets/images/blobLight.svg';
import blobDark from '../assets/images/blobDark.svg';

export const lightTheme = {
  background: 'var(--white)',
  border: 'var(--border)',
  gradient: 'linear-gradient(to right, var(--pink), var(--purple), var(--yellow))',
  text: 'var(--dark-blue)',
  accent: 'var(--background-dark)',
  iconTheme: 'var(--pink)',
  blob: `url(${blobLight})`,
  position: 'end',
  button: 'var(--font-base)',
  navbar: 'rgba(255, 255, 255, 0.75)',
  textButton: 'var(--white)',
  contact: 'var(--font-base)',
}

export const darkTheme = {
  background: 'var(--background-dark)',
  border: 'var(--blue)',
  gradient: 'linear-gradient(to right, var(--blue), var(--purple), var(--pink))',
  text: 'var(--white)',
  accent: 'var(--white)',
  iconTheme: 'var(--lightgrey)',
  blob: `url(${blobDark})`,
  position: 'start',
  button: 'var(--roxo)',
  navbar: 'rgba(25, 22, 34, 0.75)',
  textButton: 'var(--white)',
  contact: '#2E2139',
}