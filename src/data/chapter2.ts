import { LearningFrame } from '../types';

export const chapter2Content: LearningFrame[] = [
  {
    id: 11,
    title: "Realismo Ingênuo",
    chapter: 2,
    content: "O realismo ingênuo é a visão de senso comum: as árvores e rochas estão lá fora exatamente como as vemos, e nossas experiências são 'cópias' internas desse mundo.",
    type: 'word-choice',
    textWithBlanks: "O realismo supõe que o mundo real é [CHOICE] ao observador.",
    choices: ["interno", "externo", "dependente"],
    correctChoice: "externo",
    correctFeedback: "Isso. Ele separa o mundo em 'objetivo' (fora) e 'subjetivo' (dentro).",
    wrongFeedback: "O realismo foca na externalidade e independência do mundo real."
  },
  {
    id: 12,
    title: "Berkeley e a Refutação de Johnson",
    chapter: 2,
    content: "Berkeley notou que só conhecemos nossas percepções. Samuel Johnson tentou refutá-lo chutando uma pedra, mas Berkeley diria que o 'chute' e a 'dor' também são apenas percepções.",
    type: 'true-false',
    question: "O argumento de Berkeley prova logicamente que o mundo real não existe.",
    correctAnswer: false,
    correctFeedback: "Exato. Ele não prova que não existe, mas mostra que não há razão LÓGICA para acreditar que ele está lá além das nossas percepções.",
    wrongFeedback: "Incorreto. Berkeley mostra uma contradição lógica na crença realista, mas não 'prova' a inexistência do mundo."
  },
  {
    id: 13,
    title: "Schrödinger e o Substrato Supérfluo",
    chapter: 2,
    content: "O físico Schrödinger argumentou que se podemos pensar de forma natural sobre os seres vivos através da experiência, postular um 'mundo objetivo' por trás é desnecessário.",
    type: 'fill-in-blank',
    question: "Schrödinger chamou o mundo objetivo imaginado de '______ material'.",
    blankAnswer: "substrato",
    choices: ["substrato", "átomo", "espírito"],
    correctFeedback: "Perfeito. Ele considerava esse substrato 'total e completamente supérfluo'.",
    wrongFeedback: "A palavra é 'substrato'. Refere-se à base material que os realistas supõem existir."
  },
  {
    id: 14,
    title: "Pragmatismo e William James",
    chapter: 2,
    content: "No pragmatismo, o debate sobre a existência do mundo real é considerado inútil porque a resposta não alteraria em nada como a ciência prosseguiria.",
    type: 'word-choice',
    textWithBlanks: "Para o pragmatista, a verdade de uma ideia é sua [CHOICE].",
    choices: ["beleza", "utilidade", "antiguidade"],
    correctChoice: "utilidade",
    correctFeedback: "Correto! James dizia que uma ideia é verdadeira se nos permite 'navegar' vantajosamente na experiência.",
    wrongFeedback: "O critério pragmático fundamental é a utilidade prática e o poder explicativo."
  },
  {
    id: 15,
    title: "Associação: Realismo vs Pragmatismo",
    chapter: 2,
    content: "Associe os conceitos à sua respectiva tradição filosófica.",
    type: 'matching',
    matchingPairs: [
      { id: '1', left: "Realismo", right: "Verdade como correspondência" },
      { id: '2', left: "Pragmatismo", right: "Verdade como utilidade" },
      { id: '3', left: "Subjetivo/Objetivo", right: "Dualismo do Realismo" },
      { id: '4', left: "Economia Conceitual", right: "Critério de Mach" }
    ],
    correctFeedback: "Excelente! Você compreende as bases filosóficas que sustentam as diferentes visões da ciência.",
    wrongFeedback: "Algumas associações estão trocadas. Lembre-se: Realismo foca no 'objeto real', Pragmatismo foca na 'prática'."
  },
  {
    id: 16,
    title: "Economia Conceitual de Mach",
    chapter: 2,
    content: "Ernst Mach comparou a ciência ao trabalho de artesãos. Conceitos científicos servem para comunicar experiências de forma econômica.",
    type: 'multiple-choice',
    question: "Qual o papel do conceito de 'ar' no exemplo de Mach?",
    options: [
      { id: 'a', text: "Provar a existência de moléculas invisíveis.", isCorrect: false, feedback: "Mach era cauteloso com entidades invisíveis; ele focava na organização da experiência." },
      { id: 'b', text: "Permitir que diversas observações (sucção, velas apagando) sejam vistas como ligadas.", isCorrect: true, feedback: "Exato. O conceito fornece 'economia' à nossa discussão sobre fenômenos variados." },
      { id: 'c', text: "Substituir a observação direta pela teoria.", isCorrect: false, feedback: "A teoria serve para organizar a observação, não substituí-la." }
    ]
  },
  {
    id: 17,
    title: "O Aprendiz de Oleiro",
    chapter: 2,
    content: "Mach usa o exemplo do oleiro para mostrar que conceitos (argila, queima, fornos) permitem transmitir conhecimentos acumulados sem que cada geração tenha que 'reinventar a roda'.",
    type: 'fill-in-blank',
    question: "A ciência se origina da necessidade que as pessoas têm de se ______ de maneira eficiente.",
    blankAnswer: "comunicar",
    choices: ["comunicar", "isolar", "divertir"],
    correctFeedback: "Isso! A economia de pensamento é, no fundo, economia de comunicação.",
    wrongFeedback: "A resposta é 'comunicar'. A ciência é uma linguagem que economiza esforço social."
  },
  {
    id: 18,
    title: "Explicação vs Descrição",
    chapter: 2,
    content: "Para o realista, explicar é descobrir a verdade oculta. Para o pragmatista, explicar é descrever em termos econômicos e familiares.",
    type: 'true-false',
    question: "No pragmatismo, as explicações são apenas descrições simplificadas que nos deixam 'à vontade' com o fenômeno.",
    correctAnswer: true,
    correctFeedback: "Sim. Mach dizia que estamos explicados quando não estamos mais perplexos e o fenômeno nos parece familiar.",
    wrongFeedback: "Incorreto. Baum enfatiza que para Mach e James, explicar e descrever de forma útil são a mesma coisa."
  },
  {
    id: 19,
    title: "Behaviorismo Radical e Pragmatismo",
    chapter: 2,
    content: "O behaviorismo radical de Skinner segue James e Mach. Ele busca descrições econômicas e abrangentes da experiência natural humana.",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo radical rejeita o [CHOICE] entre mundo interior e exterior.",
    choices: ["conflito", "dualismo", "equilíbrio"],
    correctChoice: "dualismo",
    correctFeedback: "Exato. Ele considera que lidamos com um mundo único e comportamento a ser encontrado nesse mundo.",
    wrongFeedback: "O dualismo é o grande inimigo da visão radical de Skinner."
  },
  {
    id: 20,
    title: "Behaviorismo Metodológico e Realismo",
    chapter: 2,
    content: "O behaviorismo metodológico é realista: ele acredita na mente, mas como não pode estudá-la diretamente, foca no comportamento como um 'indicador' do que ocorre dentro.",
    type: 'multiple-choice',
    question: "Por que o behaviorismo metodológico enfatiza tanto os métodos de observação?",
    options: [
      { id: 'a', text: "Porque acredita que o mundo subjetivo é inacessível a outros.", isCorrect: true, feedback: "Correto. Sendo realistas, eles acham que o único solo comum é o mundo objetivo 'fora'." },
      { id: 'b', text: "Porque nega a existência de pensamentos.", isCorrect: false, feedback: "Eles não negam, apenas acham que não podem ser estudados cientificamente de forma direta." }
    ]
  },
  {
    id: 21,
    title: "O Exemplo do Homem Correndo",
    chapter: 2,
    content: "Um homem corre na rua. O realista descreve os músculos. O pragmatista pergunta: ele está fugindo da polícia ou treinando para as Olimpíadas?",
    type: 'fill-in-blank',
    question: "Definições coerentes de atividades devem incluir a ______ que elas cumprem.",
    blankAnswer: "função",
    choices: ["forma", "função", "velocidade"],
    reTeachContent: "Para o behaviorista radical, as razões para um comportamento (seu propósito) fazem parte do próprio comportamento.",
    correctFeedback: "Perfeito! A visão funcional é o que diferencia o behaviorismo radical do puramente mecânico.",
    wrongFeedback: "A resposta é 'função'. O behaviorismo radical é funcionalista, não apenas topográfico."
  },
  {
    id: 22,
    title: "Fenômenos Conscientes",
    chapter: 2,
    content: "Diferente do metodológico, o behaviorista radical inclui fenômenos conscientes no estudo do comportamento, tratando-os como eventos sobre os quais podemos falar.",
    type: 'true-false',
    question: "Para o behaviorista radical, o pensamento é um evento natural, não uma causa mental não natural.",
    correctAnswer: true,
    correctFeedback: "Sim. O pensamento é comportamento encoberto, sujeito às mesmas leis do comportamento público.",
    wrongFeedback: "Incorreto. O behaviorista radical não ignora a consciência, ele a redefine como comportamento natural."
  },
  {
    id: 24,
    title: "Onde estou? O Dilema do Dualismo",
    chapter: 2,
    content: "Skinner argumenta que o realismo leva a uma pergunta insolúvel: 'Se o mundo externo é real e eu estou separado dele, então onde estou?'. A resposta da psicologia popular é o 'mundo interior'.",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo radical rejeita o dualismo porque ele introduz [CHOICE] na ciência.",
    choices: ["certezas", "mistérios", "dados"],
    correctChoice: "mistérios",
    correctFeedback: "Isso! Skinner afirma que não há espaço para mistérios fantasmagóricos na ciência.",
    wrongFeedback: "O dualismo introduz 'mistérios' (como a mente move o corpo) que a ciência não pode resolver."
  },
  {
    id: 25,
    title: "Descoberta e Verdade no Realismo",
    chapter: 2,
    content: "Para o realista, estudar o universo é 'descobrir' coisas sobre ele. A cada descoberta, nos aproximamos de toda a verdade sobre o funcionamento do mundo objetivo.",
    type: 'word-choice',
    textWithBlanks: "No realismo, a ciência é vista como uma busca pela [CHOICE] absoluta.",
    choices: ["utilidade", "verdade", "estética"],
    correctChoice: "verdade",
    correctFeedback: "Correto. O realista acredita em uma verdade final que a ciência deve 'desvendar'.",
    wrongFeedback: "O realista busca a 'verdade' (correspondência); o pragmatista busca a 'utilidade'."
  },
  {
    id: 27,
    title: "Identificação de Posturas Filosóficas",
    chapter: 2,
    content: "Diferencie os conceitos entre as posturas do Realismo e do Pragmatismo.",
    type: 'categorization',
    categories: ["Realismo", "Pragmatismo"],
    categorizationItems: [
      { id: 'c1', text: "Verdade como Correspondência", category: "Realismo" },
      { id: 'c2', text: "Verdade como Utilidade", category: "Pragmatismo" },
      { id: 'c3', text: "Dualismo Mente/Corpo", category: "Realismo" },
      { id: 'c4', text: "Economia de Pensamento", category: "Pragmatismo" },
      { id: 'c5', text: "Mundo Objetivo Externo", category: "Realismo" }
    ],
    correctFeedback: "Domínio total das bases filosóficas! Você sabe exatamente como cada visão enxerga a ciência.",
    reTeachContent: "O Realismo foca na correspondência com um mundo externo objetivo, enquanto o Pragmatismo foca na utilidade e economia das descrições científicas."
  }
];
