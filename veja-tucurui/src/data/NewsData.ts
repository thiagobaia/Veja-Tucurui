// src/data/articlesData.ts

import { NewsTypeData } from "@/types";


export const NewsData: NewsTypeData[] = [
  {
    id: '1',
    name: 'Operação de Segurança Reforça Policiamento nos Bairros',
    description: 'Ação conjunta entre polícias Civil e Militar intensifica patrulhamento preventivo na região central e periferia.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    category: 'Segurança & Polícia',
    rating: 4.8,
texto: `A Câmara Municipal aprovou, nesta semana, um conjunto de medidas voltadas à ampliação da transparência das atividades legislativas e ao fortalecimento da participação popular nas decisões do município. A proposta estabelece novas diretrizes para a divulgação de informações públicas e prevê a criação de canais de comunicação para aproximar a população dos vereadores e das comissões temáticas.

Entre as principais mudanças está a organização dos dados sobre projetos de lei, votações, audiências e despesas em uma área de consulta mais simples para o cidadão. A intenção é facilitar o acompanhamento das propostas em tramitação e permitir que os moradores encontrem informações sem precisar conhecer previamente os procedimentos internos do Legislativo.

O texto também prevê a publicação de resumos explicativos para projetos considerados de maior impacto social. A medida busca apresentar, em linguagem direta, o objetivo de cada proposta, os setores que podem ser afetados e as etapas previstas para sua análise. As informações deverão ser disponibilizadas antes das votações, respeitados os prazos regimentais e as regras aplicáveis a cada matéria.

Participação antes das decisões

Outro ponto aprovado é a ampliação dos mecanismos de consulta pública. A Câmara poderá promover audiências presenciais e virtuais, além de receber manifestações por canais digitais oficiais. As contribuições deverão ser encaminhadas às comissões responsáveis para análise, sem que isso substitua o processo formal de discussão e votação.

A proposta determina ainda que as reuniões abertas tenham calendário divulgado com antecedência sempre que possível. A publicação deverá informar o tema, o horário, o local ou o link de acesso e a forma de inscrição para cidadãos interessados em se manifestar.

Para representantes favoráveis à iniciativa, a expectativa é que a população tenha mais condições de acompanhar assuntos que interferem no cotidiano, como serviços públicos, orçamento, mobilidade urbana, saúde e educação. A avaliação é que a divulgação antecipada das pautas pode ajudar moradores, entidades e profissionais a apresentar contribuições mais consistentes.

Debate sobre a implementação

Durante a discussão, parlamentares ressaltaram que a efetividade das medidas dependerá da forma como serão implementadas. Entre os desafios apontados estão a atualização frequente das informações, a acessibilidade das plataformas digitais e a necessidade de manter alternativas para pessoas com acesso limitado à internet.

Também houve questionamentos sobre os custos operacionais e a estrutura necessária para organizar as consultas e responder às manifestações recebidas. A administração da Câmara deverá definir os procedimentos técnicos, os responsáveis pela manutenção das informações e os critérios para registrar e encaminhar as contribuições da população.

Especialistas em gestão pública costumam apontar que a divulgação de dados, por si só, não garante participação efetiva. Para que a população consiga acompanhar e influenciar o debate, as informações precisam ser compreensíveis, estar disponíveis em tempo adequado e permitir que as pessoas identifiquem o andamento de cada proposta.

Próximas etapas

Com a aprovação no Legislativo, o texto segue agora para as etapas administrativas previstas antes de sua implementação. A Câmara deverá regulamentar os procedimentos e definir um cronograma para disponibilizar as ferramentas de consulta e participação.

A expectativa é que as primeiras mudanças sejam implantadas gradualmente, começando pela reorganização das informações legislativas e pela divulgação de um calendário de audiências. A adoção completa das medidas dependerá da capacidade técnica do órgão e da regulamentação dos canais digitais.

A população poderá acompanhar a publicação das regras e o cronograma nos canais oficiais da Câmara. Até que as novas ferramentas estejam disponíveis, continuam válidos os meios atuais de consulta e participação previstos pelo Legislativo.`,

    slug: 'operacao-de-seguranca-reforca-policiamento',
  },

  {
    id: '3',
    name: 'Câmara Municipal Aprova Novo Plano Diretor da Cidade',
    description: 'Após meses de debates públicos, vereadores aprovam regras atualizadas para o crescimento urbano e zoneamento.',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
    category: 'Política',
    rating: 4.5,
    texto: 'O novo Plano Diretor estabelece diretrizes para mobilidade, construção sustentável e incentivo ao comércio nos bairros afastados...',
    slug: 'camara-municipal-aprova-novo-plano-diretor',
  },
  {
    id: '4',
    name: 'Feira de Negócios e Empreendedorismo Atrai Investidores',
    description: 'Evento reúne dezenas de startups e pequenos empresários para rodadas de negócios e capacitação financeira.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    category: 'Economia & Negócios',
    rating: 4.9,
    texto: 'Com o objetivo de aquecer o mercado local, a feira apresentou inovações tecnológicas e conexões diretas entre fundos de investimento e empresários...',
    slug: 'feira-de-negocios-e-empreendedorismo-atrai-investidores',
  },

  {
    id: '6',
    name: 'Festival Cultural de Rua Reúne Música e Arte Local',
    description: 'Programação gratuita movimenta a praça principal com shows ao vivo, feira de artesanato e gastronomia regional.',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    category: 'Cultura & Eventos',
    rating: 4.7,
    texto: 'Artistas da terra apresentaram performances de dança, peças teatrais e exposições plásticas durante todo o fim de semana...',
    slug: 'festival-cultural-de-rua-reune-musica-e-arte',
  },
  {
    id: '7',
    name: 'Campanha de Vacinação Contra a Gripe Acontece Neste Sábado',
    description: 'Unidades Básicas de Saúde estarão abertas para imunizar idosos, crianças e gestantes no dia D de vacinação.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80',
    category: 'Saúde & Bem-Estar',
    rating: 4.8,
    texto: 'A Secretaria de Saúde reforça a importância da imunização antes do período das chuvas para conter a circulação de vírus respiratórios...',
    slug: 'campanha-de-vacinacao-contra-gripe-acontece-neste-sabado',
  },
  {
    id: '8',
    name: 'Escolas da Rede Municipal Recebem Laboratórios Digitais',
    description: 'Projeto de inclusão tecnológica equipa salas de aula com computadores e tablets para alunos do ensino fundamental.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    category: 'Educação',
    rating: 4.9,
    texto: 'A iniciativa visa modernizar o aprendizado e ensinar noções básicas de programação e robótica para crianças e jovens...',
    slug: 'escolas-municipais-recebem-laboratorios-digitais',
  },
  {
    id: '9',
    name: 'Cidade Lança Aplicativo de Serviços Públicos para Celular',
    description: 'Cidadãos poderão solicitar iluminação pública, tapa-buracos e agendamentos de consultas na palma da mão.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    category: 'Tecnologia & Inovação',
    rating: 4.7,
    texto: 'Disponível gratuitamente para Android e iOS, a plataforma simplifica a comunicação com a prefeitura e reduz filas ativas...',
    slug: 'cidade-lanca-aplicativo-de-servicos-publicos',
  },
  {
    id: '10',
    name: 'Interrupção Programada no Abastecimento de Água Neste Domingo',
    description: 'Manutenção preventiva na estação de tratamento afetará temporariamente alguns bairros.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    category: 'Utilidade Pública',
    rating: 4.4,
    texto: 'A concessionária orienta a população a reservar água e evitar desperdícios. O serviço deve ser normalizado no fim da tarde...',
    slug: 'interrupcao-programada-no-abastecimento-de-agua',
  },
  {
    id: '11',
    name: 'Inauguração do Novo Parque Ambiental Atrai Famílias',
    description: 'Espaço conta com pista de caminhada, playground, quadras esportivas e ampla área verde preservada.',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    category: 'Cidade e Região',
    rating: 4.8,
    texto: 'O parque ecológico passa a ser a principal opção de lazer ao ar livre para a população durante os fins de semana...',
    slug: 'inauguracao-do-novo-parque-ambiental-atrai-familias',
  },
  {
    id: '12',
    name: 'Comércio Local Registra Crescimento no Volume de Vendas',
    description: 'Datas comemorativas e crédito acessível impulsionam os setores de vestuário e eletroeletrônicos.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    category: 'Economia & Negócios',
    rating: 4.6,
    texto: 'Lojistas comemoram a movimentação aquecida nas ruas comerciais centrais, impulsionada por promoções e contratações temporárias...',
    slug: 'comercio-local-registra-crescimento-no-volume-de-vendas',
  },
  {
    id: '13',
    name: 'Polícia Rodoviária Intensifica Fiscalização nas Estradas',
    description: 'Blitzes com bafômetro e radar móvel combatem o excesso de velocidade e o transporte irregular durante o feriado.',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    category: 'Segurança & Polícia',
    rating: 4.5,
    texto: 'A prioridade da ação é reduzir acidentes nas rodovias de acesso à cidade durante períodos de grande fluxo de veículos...',
    slug: 'policia-rodoviaria-intensifica-fiscalizacao-nas-estradas',
  },

  {
    id: '15',
    name: 'Mutirão de Exames e Atendimento Médico Gratuito no Bairro Central',
    description: 'Ação social oferece consultas médicas, testes rápidos e orientação nutricional para a comunidade.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: 'Saúde & Bem-Estar',
    rating: 4.8,
    texto: 'Profissionais voluntários de saúde atenderam centenas de pessoas com exames preventivos e encaminhamentos para especialidades...',
    slug: 'mutirao-de-exames-e-atendimento-medico-gratuito',
  },
]
