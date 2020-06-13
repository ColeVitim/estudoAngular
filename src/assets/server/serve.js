const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/curso').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/curso').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/curso/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/curso/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/curso/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
    {
      id: 1,
      nome: 'Angular: CLIiii',
      lancamento: 'Janeiro 2, 2019',
      descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duracao: 120,
      codigo: 'XLF-1212',
      aprovacao: 3,
      preco: 13.99,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 2,
      nome: 'Angular: Forms',
      lancamento: 'Abril 4, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duracao: 80,
      codigo: 'DWQ-3412',
      aprovacao: 3.5,
      preco: 27.99,
      imageUrl: '/assets/images/forms.png',
  },
  {
      id: 3,
      nome: 'Angular: HTTP',
      lancamento: 'Julho 8, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duracao: 80,
      codigo: 'QPL-0913',
      aprovacao: 4.0,
      preco: 39.99,
      imageUrl: '/assets/images/http.png',
  },
  {
      id: 4,
      nome: 'Angular: Router',
      lancamento: 'Outubro 16, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duracao: 60,
      codigo: 'OHP-1095',
      aprovacao: 4.5,
      preco: 56.99,
      imageUrl: '/assets/images/router.png',
  },
  {
      id: 5,
      nome: 'Angular: Animations',
      lancamento: 'Dezembro 25, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duracao: 80,
      codigo: 'PWY-9381',
      aprovacao: 5,
      preco: 66.99,
      imageUrl: '/assets/images/animations.png',
  }
];

