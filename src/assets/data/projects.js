import { todolist, signupform, trybewallet, trybetunes, tryunfo } from '../images';

export const projects = [
  {
    img: todolist,
    title: "To Do List",
    tech: "HTML | CSS | JavaScript",
    description: "Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover."
  },
  {
    img: signupform,
    title: "Sign-up Form",
    tech: "React | Formik | Yup",
    description: "Formulário de inscrição com validação de inputs, utilizando Formik em conjunto com o Yup para validar e retornar mensagens de erro personalizadas.",
    url: 'https://sign-up-form-aferanda.vercel.app/',
  },
  {
    img: trybewallet,
    title: "TrybeWallet",
    tech: "React | Redux",
    description: "Aplicação web conversor de despesas, com funcionalidades de incluir e remover despesas em diversas moedas."
  },
  {
    img: trybetunes,
    title: "TrybeTunes",
    description: "Aplicação web de músicas, com funcionalidades de pesquisar artistas e seus álbuns."
  },
  {
    img: tryunfo,
    title: "Tryunfo",
    description: "Aplicação web de jogo de cartas, com funcionalidades de incluir cartas, marcar como super trunfo, adicionar imagem e pontuação."
  },
]