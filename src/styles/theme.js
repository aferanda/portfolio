import blobLight from '../assets/images/blobLight.svg';
import blobDark from '../assets/images/blobDark.svg';

export const lightTheme = {
  accent: 'var(--dark-900)',
  background: 'var(--white)',
  blob: `url(${blobLight})`,
  border: 'var(--grey-200)',
  button: 'var(--red-300)',
  contact: 'var(--red-300)',
  gradient: 'linear-gradient(to right, var(--red-400), var(--malva-300), var(--maize-300))',
  iconTheme: 'var(--red-400)',
  navbar: 'rgba(255, 255, 255, 0.75)',
  position: 'end',
  text: 'var(--dark-800)',
  textButton: 'var(--white)',
}

export const darkTheme = {
  accent: 'var(--white)',
  background: 'var(--dark-900)',
  blob: `url(${blobDark})`,
  border: 'var(--purple-900)',
  button: 'var(--purple-600)',
  contact: 'var(--purple-900)',
  gradient: 'linear-gradient(to right, var(--blue-500), var(--malva-300), var(--red-400))',
  iconTheme: 'var(--grey-100)',
  navbar: 'rgba(25, 22, 34, 0.75)',
  position: 'start',
  text: 'var(--white)',
  textButton: 'var(--white)',
}