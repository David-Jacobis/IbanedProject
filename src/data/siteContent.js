import {
  faChurch,
  faCross,
  faEarthAmericas,
  faPeopleRoof,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import {
  LuBookOpen,
  LuMessageCircle,
  LuMusic,
  LuPopcorn,
  LuPuzzle,
} from "react-icons/lu";
import { PiHandsPrayingFill } from "react-icons/pi";
import { deepFreeze } from "../utils/deepFreeze";
import Avalanche from "../assets/images/avalanche-1600.jpg";
import Biblia from "../assets/images/biblia-1600.jpg";
import CultoDomingos from "../assets/images/evento-domingos-1400.jpg";
import Intercessao from "../assets/images/intercecao-1600.jpg";
import MatheusBiblia from "../assets/images/matheusbiblia-1600.jpg";
import Oracao from "../assets/images/evento-oracao-1400.jpg";
import PastorEber from "../assets/images/PrEber3.jpg";
import PastorFabio from "../assets/images/PrFabio.jpg";
import PastorLeal from "../assets/images/PrLeal.jpg";
import PastorLuciano from "../assets/images/PrLu.jpg";
import PastorMarcos from "../assets/images/PrMarcos.jpg";
import Semanas from "../assets/images/evento-semanas-1400.jpg";
import Sow from "../assets/images/SowTeste.png";

export const navigationLinks = deepFreeze([
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Ministérios", path: "/ministerios" },
  { label: "Programação", path: "/programacao" },
  { label: "Células", path: "/celulas" },
  {
    label: "Assistir Online",
    path: "https://www.youtube.com/@IBANED",
    external: true,
  },
]);

export const contactInfo = deepFreeze({
  name: "IBANED",
  phone: "(31) 2526-4248",
  email: "ibaned@gmail.com",
  whatsapp: "https://wa.me/553125264248",
  address: [
    "Av. Raul Mourão Guimarães, 740",
    "Palmeiras, Belo Horizonte - MG",
    "30575-400",
  ],
});

export const socialLinks = deepFreeze([
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/553125264248",
    brand: "#4dd681",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/denabi123",
    brand: "#7fa4ff",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/igreja_ibaned/",
    brand: "#ff89bc",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@IBANED",
    brand: "#ff6b6b",
  },
]);

export const homeValues = deepFreeze([
  {
    icon: faCross,
    title: "Existimos para a glória de",
    highlight: "Deus",
    cardColor: "#dff2d8",
    accentColor: "#6f9f5a",
    iconColor: "#4f7b38",
  },
  {
    icon: faPeopleRoof,
    title: "E por isso fazemos discípulos de",
    highlight: "Jesus Cristo",
    cardColor: "#f9ddd6",
    accentColor: "#d36a54",
    iconColor: "#af4c3d",
  },
  {
    icon: faChurch,
    title: "Incluindo-os na família da",
    highlight: "Fé",
    cardColor: "#f6ecd2",
    accentColor: "#c8a24e",
    iconColor: "#a57a24",
  },
  {
    icon: faTree,
    title: "Desenvolvendo seus dons e",
    highlight: "Ministérios",
    cardColor: "#d9eef2",
    accentColor: "#4f97a5",
    iconColor: "#2d7785",
  },
  {
    icon: faEarthAmericas,
    title: "Para a glória global de",
    highlight: "Deus",
    cardColor: "#e5def7",
    accentColor: "#7d68bb",
    iconColor: "#604b9d",
  },
]);

export const homeHighlights = deepFreeze([
  {
    title: "Primeira visita",
    description:
      "Queremos que você se sinta acolhido desde o primeiro contato, com orientação simples e ambiente familiar.",
  },
  {
    title: "Vida em comunidade",
    description:
      "Nossa igreja caminha em comunhão, discipulado, cuidado pastoral e serviço prático à cidade.",
  },
  {
    title: "Espaço para toda a família",
    description:
      "Cultos, células, ministérios e encontros que alcançam crianças, jovens, adultos e idosos.",
  },
]);

export const homeStats = deepFreeze([
  { value: "1989", label: "Igreja oficialmente registrada" },
  { value: 5, count: true, label: "Frentes pastorais em cuidado ativo" },
  { value: "Semanal", label: "Ritmo constante de culto, oração e comunhão" },
]);

export const homeJourney = deepFreeze([
  {
    title: "Chegue como está",
    description:
      "Você não precisa conhecer tudo antes. Basta vir, ouvir, participar e ser recebido com carinho.",
  },
  {
    title: "Conecte-se com pessoas",
    description:
      "A jornada cristã cresce melhor em comunidade, com conversas honestas, oração e discipulado.",
  },
  {
    title: "Descubra seu lugar",
    description:
      "Queremos ajudar você a amadurecer na fé e servir com seus dons em ministérios e células.",
  },
]);

export const ministryItems = deepFreeze([
  {
    title: "Avalanche",
    image: Avalanche,
    audience: "Jovens e adultos",
    text:
      "Um ministério voltado para acolher, discipular e fortalecer vidas por meio de comunhão, Palavra e serviço.",
  },
  {
    title: "Intercessão",
    image: Intercessao,
    audience: "Toda a igreja",
    text:
      "Uma frente dedicada à oração constante pela igreja, famílias, cidade e por tudo o que Deus deseja fazer em nosso meio.",
  },
  {
    title: "Ensino",
    image: Biblia,
    audience: "Todas as idades",
    text:
      "Espaço para aprofundamento bíblico, formação cristã e preparo de líderes comprometidos com a verdade das Escrituras.",
  },
  {
    title: "Ação Social",
    image: MatheusBiblia,
    audience: "Voluntários e comunidade",
    text:
      "Servimos com compaixão e presença prática, alcançando pessoas com cuidado, apoio e testemunho do evangelho.",
  },
]);

export const ministryHighlights = deepFreeze([
  {
    title: "Serviço com propósito",
    description:
      "Cada ministério nasce para glorificar a Deus e responder às necessidades reais da igreja e da cidade.",
  },
  {
    title: "Formação de voluntários",
    description:
      "Valorizamos preparo, cuidado pastoral e integração para que cada pessoa sirva com saúde e constância.",
  },
  {
    title: "Acolhimento e continuidade",
    description:
      "Não queremos eventos isolados, mas caminhos duradouros de crescimento, pertencimento e missão.",
  },
]);

export const ministryFlow = deepFreeze([
  "Conheça as frentes ativas e converse com a liderança.",
  "Descubra onde seus dons podem servir melhor.",
  "Comece com acompanhamento, clareza e integração saudável.",
]);

export const scheduleItems = deepFreeze([
  {
    title: "Valorizando Vidas",
    day: "Toda segunda-feira, 19:30h",
    location: "Av. Raul Mourão Guimarães, 740, Palmeiras, Belo Horizonte",
    image: Semanas,
  },
  {
    title: "Culto de Oração",
    day: "Toda quinta-feira, 20h",
    location: "Av. Raul Mourão Guimarães, 740, Palmeiras, Belo Horizonte",
    image: Oracao,
  },
  {
    title: "SOW (JVs e ADLs)",
    day: "Todo sábado, 19h30",
    location: "Av. Raul Mourão Guimarães, 740, Palmeiras, Belo Horizonte",
    image: Sow,
  },
  {
    title: "Celebração ",
    day: "Todo domingo, às 10h e 18h",
    location: "Av. Raul Mourão Guimarães, 740, Palmeiras, Belo Horizonte",
    image: CultoDomingos,
  },
]);

export const scheduleGuides = deepFreeze([
  {
    title: "Se é sua primeira vez",
    description:
      "Chegue alguns minutos antes para conhecer o ambiente e ser recebido com calma pela equipe.",
  },
  {
    title: "Famílias são bem-vindas",
    description:
      "Nosso objetivo é criar uma experiência acolhedora, clara e confortável para todas as idades.",
  },
  {
    title: "Acompanhe também online",
    description:
      "Quando não puder estar presencialmente, você ainda pode se manter perto da vida da igreja pelas redes.",
  },
]);

export const pastors = deepFreeze([
  {
    image: PastorLeal,
    name: "Pastor Antonio Leal",
    description:
      "É o Pastor Emérito da IBANED. Casado com Luzia Leal, tem quatro filhos: Edom, Éber, Estêvão e Ester. Está na IBANED desde 1986.",
  },
  {
    image: PastorEber,
    name: "Pastor Eber Leal",
    description:
      "Pastor presidente, casado com Adriana Leal. Foi ordenado ao ministério pastoral em 2011 e serve à IBANED em dedicação exclusiva.",
  },
  {
    image: PastorLuciano,
    name: "Pastor Marcos Aguiar ",
    description:
      "Casado com Mariele Neves, foi ordenado em 2012 e serve à IBANED em dedicação exclusiva, com foco em cuidado e ensino.",
  },
  {
    image: PastorMarcos,
    name: "Pastor Joaquim Coutinho",
    description:
      "Casado com Ana Paula, exerce um ministério bivocacionado e tem contribuído com fidelidade no pastoreio e discipulado da igreja.",
  },
  {
    image: PastorFabio,
    name: "Pastor Bruno França",
    description:
      "Casado com Débora Silva e pai de Catarina. Foi ordenado em 2018 e serve ao Senhor na IBANED em um ministério bivocacionado.",
  },
]);

export const churchHistory = deepFreeze([
  "A Igreja Batista Nacional Estrela D'Alva, chamada por seus membros e amigos de IBANED, começou a partir de uma reunião de oração na casa da saudosa irmã Ilda Alves de Almeida, ainda em 1984.",
  "Com o crescimento do trabalho, o grupo se tornou congregação da Igreja Batista da Lagoinha. Em 1986, chegou o então obreiro Antônio Leal com sua família, marcando uma nova fase da caminhada da igreja.",
  "Nos anos seguintes, a igreja foi emancipada, adquiriu o lote onde está até hoje e, em 1989, foi oficialmente registrada. Em 2011, já no templo atual, o pastor Éber foi ordenado; em 2012, o pastor Luciano também foi ordenado ao ministério.",
  "Ao longo da sua história, a IBANED tem servido a cidade com ensino, oração, missões e ações públicas como as Festas das Nações e dos Estados, sempre buscando glorificar a Deus e tornar Cristo conhecido.",
]);

export const aboutPillars = deepFreeze([
  {
    title: "Missão",
    description:
      "Glorificar a Deus formando discípulos maduros, comprometidos com o evangelho e com a cidade.",
  },
  {
    title: "Visão",
    description:
      "Ser uma igreja bíblica, acolhedora e missionária, onde pessoas encontram Cristo e caminham em comunidade.",
  },
  {
    title: "Valores",
    description:
      "Palavra, oração, comunhão, serviço, integridade e cuidado pastoral no centro da vida da igreja.",
  },
]);

export const aboutPractices = deepFreeze([
  "Pregação bíblica com aplicação prática para a vida diária.",
  "Cuidado pastoral próximo e discipulado intencional.",
  "Vida comunitária que aproxima gerações e histórias diferentes.",
  "Compromisso com missão local e serviço ao próximo.",
]);

export const meetingItems = deepFreeze([
  {
    icon: LuPopcorn,
    title: "Lanche e comunhão",
    info:
      "Um momento leve para receber bem, conversar, conhecer visitantes e fortalecer vínculos.",
  },
  {
    icon: LuPuzzle,
    title: "Quebra-gelo",
    info:
      "Uma dinâmica rápida que prepara o ambiente e aproxima as pessoas antes da Palavra.",
  },
  {
    icon: LuMusic,
    title: "Louvor",
    info:
      "A música nos ajuda a adorar, alinhar o coração e criar um ambiente de entrega a Deus.",
  },
  {
    icon: LuBookOpen,
    title: "Estudo",
    info:
      "O líder compartilha a Palavra da semana e conduz a aplicação prática do tema.",
  },
  {
    icon: PiHandsPrayingFill,
    title: "Oração",
    info:
      "A célula é um lugar de intercessão, cuidado mútuo e busca por intimidade com Deus.",
  },
  {
    icon: LuMessageCircle,
    title: "Desafio",
    info:
      "Cada encontro termina com um passo prático para viver a fé no dia a dia.",
  },
]);

export const featuredCellGroup = deepFreeze({
  title: "Célula",
  description:
    "Célula é um pequeno grupo de pessoas que se reúne regularmente para comunhão, estudo da Palavra, oração e apoio.",
});

export const cellBenefits = deepFreeze([
  {
    title: "Pertencimento real",
    description:
      "Você deixa de ser apenas visitante e passa a caminhar com pessoas que conhecem seu nome e sua história.",
  },
  {
    title: "Crescimento contínuo",
    description:
      "A célula ajuda a transformar o que ouvimos no culto em conversas, oração e prática durante a semana.",
  },
  {
    title: "Cuidado mútuo",
    description:
      "Em tempos difíceis, a célula se torna lugar de apoio, escuta, intercessão e presença concreta.",
  },
]);

export const cellSteps = deepFreeze([
  "Fale com a igreja pelo WhatsApp ou presencialmente.",
  "Vamos entender sua região, rotina e perfil.",
  "Indicamos uma célula para você começar a participar com acompanhamento.",
]);

export const servicePurpose = deepFreeze({
  title: "Queremos servir o mundo ao nosso redor",
  text:
    "Fomos chamados para ser luz e sal na Terra, demonstrando o amor de Cristo com compaixão, justiça e serviço. Em cada gesto de cuidado, apontamos para o evangelho e levamos esperança a quem está perto de nós.",
});
