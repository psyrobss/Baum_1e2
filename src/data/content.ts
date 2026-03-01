import { LearningFrame, GlossaryTerm } from '../types';

export const glossary: GlossaryTerm[] = [
  { term: "Dualismo", definition: "A visão de que existem dois tipos de existência: o mundo material e o mundo mental/interior." },
  { term: "Pragmatismo", definition: "Filosofia que avalia a verdade de uma ideia com base em sua utilidade prática e poder explicativo." },
  { term: "Realismo", definition: "Crença de que existe um mundo real objetivo 'lá fora' que dá origem às nossas experiências." },
  { term: "Determinismo", definition: "Noção de que o comportamento é ordenado e determinado unicamente pela hereditariedade e pelo ambiente." },
  { term: "Introspecção", definition: "Método de 'olhar para dentro' da mente para observar processos internos, rejeitado pelo behaviorismo por ser subjetivo." },
  { term: "Economia Conceitual", definition: "Critério de Ernst Mach: a ciência deve criar conceitos que organizem experiências de forma simples e eficiente." },
  { term: "Antropomorfismo", definition: "Atribuir qualidades humanas a outras espécies ou máquinas, como dizer que um rato sente 'aborrecimento'." },
  { term: "Psicologia Objetiva", definition: "Movimento que buscou medir processos mentais através de dados observáveis como o tempo de reação." },
  { term: "Behaviorismo Radical", definition: "Filosofia de Skinner que rejeita o dualismo e trata eventos privados como comportamento natural." },
  { term: "Realismo Ingênuo", definition: "Visão de que os objetos existem exatamente como os percebemos, independentemente da percepção." },
  { term: "Equação Pessoal", definition: "Diferenças individuais nos tempos de reação de astrônomos, que levaram Donders a estudar processos mentais objetivamente." },
  { term: "Dados Sensoriais", definition: "Termo de Bertrand Russell para as percepções internas que seriam o meio de entender o mundo real objetivo." }
];

export const behaviorismContent: LearningFrame[] = [
  // --- CAPÍTULO 1 ---
  {
    id: 1,
    title: "A Filosofia da Ciência",
    chapter: 1,
    content: "O behaviorismo não é a ciência do comportamento, mas a filosofia dessa ciência. Ele investiga se uma ciência do comportamento é possível e quais seriam suas implicações.",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo é propriamente a [CHOICE] da ciência do comportamento.",
    choices: ["metodologia", "filosofia", "técnica"],
    correctChoice: "filosofia",
    correctFeedback: "Exato! Baum inicia o livro deixando claro que o behaviorismo é o conjunto de ideias sobre a ciência.",
    wrongFeedback: "Lembre-se: a ciência é a Análise do Comportamento; o behaviorismo é sua base filosófica."
  },
  {
    id: 2,
    title: "Ruptura: Da Filosofia à Ciência",
    chapter: 1,
    content: "As ciências se separaram da filosofia ao abandonar pressupostos abstratos (como 'Deus' ou 'formas ideais') em favor da observação e do raciocínio baseado no que é visível.",
    type: 'true-false',
    question: "A verdade científica é absoluta e imutável, ao contrário da verdade filosófica.",
    correctAnswer: false,
    correctFeedback: "Correto! A verdade científica é sempre relativa e provisória, sujeita a novas observações.",
    wrongFeedback: "Incorreto. Baum afirma que a verdade filosófica é absoluta (se os pressupostos forem aceitos), enquanto a científica é provisória."
  },
  {
    id: 3,
    title: "Psicologia Objetiva: Donders",
    chapter: 1,
    content: "F. C. Donders tentou medir processos mentais objetivamente através do 'tempo de reação'. Ele subtraía o tempo de uma reação simples do tempo de uma reação de escolha.",
    type: 'fill-in-blank',
    question: "Donders acreditava que era possível medir objetivamente o processo mental de escolha através de uma medida ______.",
    blankAnswer: "objetiva",
    choices: ["subjetiva", "objetiva", "teológica"],
    reTeachContent: "Donders foi um pioneiro em buscar medidas físicas (tempo) para o que antes era considerado puramente mental.",
    correctFeedback: "Perfeito! Ele buscava transformar o subjetivo em algo mensurável.",
    wrongFeedback: "A palavra correta é 'objetiva'. Ele queria fugir da subjetividade da introspecção."
  },
  {
    id: 4,
    title: "Associação: Pioneiros da Psicologia",
    chapter: 1,
    content: "Associe cada autor ao seu método ou conceito principal estudado no Capítulo 1.",
    type: 'matching',
    matchingPairs: [
      { id: '1', left: "Donders", right: "Tempo de Reação" },
      { id: '2', left: "Ebbinghaus", right: "Sílabas sem sentido" },
      { id: '3', left: "Fechner", right: "Intensidade da sensação" },
      { id: '4', left: "Darwin", right: "Continuidade das espécies" }
    ],
    correctFeedback: "Excelente! Você domina a história da transição da filosofia para a ciência.",
    wrongFeedback: "Algumas associações estão incorretas. Tente novamente!"
  },
  {
    id: 5,
    title: "Psicologia Comparativa: Darwin",
    chapter: 1,
    content: "Darwin propôs a 'continuidade das espécies'. Se os corpos evoluem, os traços comportamentais também devem ter uma origem comum. Isso permitiu estudar humanos através de outras espécies.",
    type: 'multiple-choice',
    question: "Qual conceito de Darwin foi fundamental para o nascimento da psicologia comparativa?",
    options: [
      { id: 'a', text: "Seleção Sexual", isCorrect: false, feedback: "Embora importante, não é o conceito chave para a comparação entre espécies no behaviorismo." },
      { id: 'b', text: "Continuidade das Espécies", isCorrect: true, feedback: "Correto. Se somos parte de um continuum, o estudo de animais revela traços humanos rudimentares." },
      { id: 'c', text: "Sobrevivência do mais apto", isCorrect: false, feedback: "Este é um mecanismo da evolução, mas a 'continuidade' é o que justifica a comparação." }
    ]
  },
  {
    id: 6,
    title: "Psicologia Comparativa e Romanes",
    chapter: 1,
    content: "George Romanes tentou observar as origens dos traços mentais em outras espécies, mas caiu na armadilha de 'humanizar' os animais.",
    type: 'fill-in-blank',
    question: "O termo para a atribuição de sentimentos humanos a animais (ex: dizer que um rato sente 'confusão') é ______.",
    blankAnswer: "antropomorfismo",
    choices: ["antropomorfismo", "determinismo", "realismo"],
    correctFeedback: "Exato. Watson criticou duramente essa prática por ser puramente especulativa.",
    wrongFeedback: "A resposta é 'antropomorfismo'. É a 'humanização da fera'."
  },
  {
    id: 7,
    title: "O Manifesto de Watson",
    chapter: 1,
    content: "Em 1913, Watson declarou que a psicologia deveria ser a ciência do comportamento. Ele atacou a introspecção porque ela 'ataca o observador, e não a situação experimental'.",
    type: 'true-false',
    question: "Watson acreditava que a psicologia deveria focar na construção do conteúdo consciente dos animais.",
    correctAnswer: false,
    correctFeedback: "Correto. Watson achava absurdo tentar 'construir' a consciência animal; ele queria focar apenas no comportamento observável.",
    wrongFeedback: "Incorreto. Watson rejeitava qualquer tentativa de estudar a consciência, focando apenas no comportamento público."
  },
  {
    id: 8,
    title: "Determinismo vs Livre-Arbítrio",
    chapter: 1,
    content: "O determinismo afirma que o comportamento é ordenado e determinado pela hereditariedade e pelo ambiente. O livre-arbítrio libertário nega essa causalidade total.",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo desafia a ideia venerada do [CHOICE].",
    choices: ["destino", "livre-arbítrio", "instinto"],
    correctChoice: "livre-arbítrio",
    correctFeedback: "Sim. Assim como Darwin deixou Deus fora da biologia, o behaviorismo deixa o livre-arbítrio fora da psicologia.",
    wrongFeedback: "O grande conflito filosófico do behaviorismo é com o conceito de livre-arbítrio libertário."
  },
  {
    id: 9,
    title: "Argumentos Sociais: Democracia",
    chapter: 1,
    content: "Muitos temem que o behaviorismo ameace a democracia. Baum argumenta que a democracia funciona não porque temos livre-arbítrio, mas porque é um conjunto de práticas eficazes.",
    type: 'multiple-choice',
    question: "Segundo Baum, o que realmente define a 'liberdade política'?",
    options: [
      { id: 'a', text: "A ausência total de controle ambiental.", isCorrect: false, feedback: "O controle sempre existe; a questão é o tipo de controle." },
      { id: 'b', text: "Dispor de opções e ser capaz de influenciar os governantes.", isCorrect: true, feedback: "Exato. É algo prático e comportamental, não uma propriedade metafísica da alma." },
      { id: 'c', text: "A capacidade de agir sem causas passadas.", isCorrect: false, feedback: "Isso seria livre-arbítrio libertário, que Baum rejeita." }
    ]
  },
  {
    id: 10,
    title: "Psicologia Popular e o Discurso-Padrão",
    chapter: 1,
    content: "Dizemos: 'Eu pensei em ir e fui'. Isso sugere que o pensamento interno causou a ação externa. O behaviorismo vê isso como uma 'não explicação'.",
    type: 'fill-in-blank',
    question: "O behaviorismo omite pensamentos internos como causas porque eles são considerados eventos ______.",
    blankAnswer: "não naturais",
    choices: ["naturais", "não naturais", "físicos"],
    reTeachContent: "Para a ciência, causas devem ser localizáveis no tempo e no espaço. Pensamentos 'mentais' falham nesse critério.",
    correctFeedback: "Correto! Eventos não naturais não podem ser situados no tempo e espaço da mesma forma que o comportamento.",
    wrongFeedback: "A resposta é 'não naturais' (ou 'mentais'). Eles introduzem mistérios que a ciência não pode resolver."
  },

  // --- CAPÍTULO 2 ---
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
    id: 23,
    title: "Pavlov e a Psicologia Objetiva",
    chapter: 1,
    content: "Pavlov contribuiu para a psicologia objetiva ao estudar a aprendizagem através da associação, medindo a transferência de reflexos simples para novos sinais no laboratório.",
    type: 'fill-in-blank',
    question: "Pavlov estudou a aprendizagem medindo um simples ______ de transferência para novos sinais.",
    blankAnswer: "reflexo",
    choices: ["reflexo", "instinto", "pensamento"],
    correctFeedback: "Exato. O reflexo condicional foi a base para uma psicologia baseada em medidas físicas.",
    wrongFeedback: "A resposta é 'reflexo'. Pavlov focava em respostas fisiológicas eliciadas por estímulos."
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
  }
];
