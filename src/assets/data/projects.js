import images from '../../utils/images';

export const projects = [
  {
    img: images.todolist,
    title: "To Do List",
    tech: "HTML | CSS | JavaScript",
    description: "Aplicação web lista de tarefas, com funcionalidades de incluir, marcar como concluído, reordernar e remover."
  },
  {
    img: images.signupform,
    title: "Sign-up Form",
    tech: "React | Formik | Yup",
    description: "Formulário de inscrição com validação de inputs, utilizando Formik em conjunto com o Yup para validar e retornar mensagens de erro personalizadas.",
    url: 'https://sign-up-form-aferanda.vercel.app/',
  },
  {
    img: images.trybewallet,
    title: "TrybeWallet",
    tech: "React | Redux",
    description: "Aplicação web conversor de despesas, com funcionalidades de incluir e remover despesas em diversas moedas."
  },
  {
    img: images.trybetunes,
    title: "TrybeTunes",
    description: "Aplicação web de músicas, com funcionalidades de pesquisar artistas e seus álbuns."
  },
  {
    img: images.tryunfo,
    title: "Tryunfo",
    description: "Aplicação web de jogo de cartas, com funcionalidades de incluir cartas, marcar como super trunfo, adicionar imagem e pontuação."
  },
]