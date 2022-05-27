import { todolist, signupform, trybewallet, tryunfo, crud } from '../images';

export const projects = [
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
    tech: "HTML | CSS | JavaScript | React | Redux",
    description: "Aplicação web conversor de despesas, com funcionalidades de incluir e remover despesas em diversas moedas.",
    url: 'https://trybewallet-kvwueslwm-aferanda.vercel.app/'
  },
  {
    img: tryunfo,
    title: "Tryunfo",
    tech: "HTML | CSS | JavaScript | React",
    description: "Aplicação web de jogo de cartas, com funcionalidades de incluir cartas, marcar como super trunfo, adicionar imagem e pontuação.",
    url: 'https://tryunfo-oa31pn7pj-aferanda.vercel.app/'
  },
  {
    img: todolist,
    title: "To Do List",
    tech: "HTML | CSS | JavaScript",
    description: "Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover.",
    url: 'https://github.com/aferanda/trybe-projects-front-end/tree/master/project-todo-list'
  },
  {
    img: crud,
    title: "Trybesmith",
    tech: "Node.js | Express | TypeScript | Prisma | JWT",
    description: "Aplicação onde é possível realizar operações básicas em um Banco de Dados (CRUD).",
    url: 'https://github.com/aferanda/trybe-projects-back-end/tree/main/05-TypeScript'
  },
]