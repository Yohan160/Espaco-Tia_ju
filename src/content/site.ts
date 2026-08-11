import logo from "@/assets/logo.png.asset.json";
import midia13 from "@/assets/midia-13.jpg.asset.json";
import midia17 from "@/assets/midia-17.jpg.asset.json";
import midia19 from "@/assets/midia-19.jpg.asset.json";
import midia20 from "@/assets/midia-20.jpg.asset.json";
import midia22 from "@/assets/midia-22.jpg.asset.json";
import midia2 from "@/assets/midia-2.png.asset.json";
import midia3 from "@/assets/midia-3.png.asset.json";
import midia from "@/assets/midia.jpg.asset.json";
import cofrinho from "@/assets/cofrinho.png.asset.json";
import doacao from "@/assets/doacao-de-alimentos.png.asset.json";
import socorro from "@/assets/socorro.png.asset.json";
import aperto from "@/assets/aperto-de-mao.png.asset.json";
import jucara from "@/assets/jucara.png.asset.json";
import elvira from "@/assets/elvira.png.asset.json";
import fernanda from "@/assets/fernanda.png.asset.json";
import michele from "@/assets/michele.png.asset.json";
import monica from "@/assets/monica.png.asset.json";
import rodrigo from "@/assets/rodrigo.png.asset.json";
import criss from "@/assets/criss.png.asset.json";
import marcos from "@/assets/marcos-1.png.asset.json";
import yohan from "@/assets/foto-yohan.jpg.asset.json";
import qrcode from "@/assets/qrcode.png.asset.json";
import aulas from "@/assets/aulas-espaco-tia-ju.png.asset.json";
import projetoArte from "@/assets/rectangle-58-1-.png.asset.json";

export const images = {
  logo: logo.url,
  hero: midia13.url,
  qrcode: qrcode.url,
  aulas: aulas.url,
  projetoArte: projetoArte.url,
  gallery: [
    { src: midia2.url, alt: "Crianças em atividade no Espaço Tia Jú" },
    { src: midia3.url, alt: "Oficina no Espaço Tia Jú" },
    { src: midia.url, alt: "Atividade coletiva no Espaço Tia Jú" },
    { src: midia19.url, alt: "Crianças participando das aulas" },
    { src: midia17.url, alt: "Momento no Espaço Tia Jú" },
    { src: midia20.url, alt: "Encontro no Espaço Tia Jú" },
    { src: midia22.url, alt: "Registro das atividades do Espaço Tia Jú" },
  ],
};

export const nav = [
  { to: "/", label: "Início" },
  { to: "/projeto", label: "Projeto" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre-nos", label: "Sobre Nós" },
  { to: "/apoiadores", label: "Apoiadores" },
] as const;

export const contato = {
  instagram: "@espacotiaju",
  instagramUrl:
    "https://www.instagram.com/espacotiaju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook: "Espaço de Leitura Tia Ju",
  facebookUrl: "https://www.facebook.com/datiaju/reviews",
  youtube: "@EspaçoTiaJu",
  whatsapp: "+55 13 99638-4626",
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=%2B5513996384626",
  email: "associacaotiajumongagua@gmail.com",
  endereco:
    "Rua Santa Cecilia, 560 Bairro: Agenor de Campos CEP: 11730-000 Município: Mongaguá Estado: São Paulo",
  cnpj: "41.665.460/0001-16",
};

export const quemSomos =
  "O Espaço Tia Jú é uma associação sem fins lucrativos que foi criada com o intuito de mudar a vida de várias crianças por meio da educação. A ONG está localizada em Mongaguá-SP (Brasil) e é composta por administradores do espaço e por diversos voluntários.";

export const aulasLista = [
  "Leitura",
  "Contação de Histórias",
  "Informática",
  "Artesanato",
  "Libras",
  "Teatro",
];

export const impacto = {
  titulo: "IMPACTO NA SOCIEDADE",
  texto:
    "O Espaço Tia Jú tem sido um refúgio de aprendizado, cultura e acolhimento para dezenas de crianças em Mongaguá. Aqui, cada criança tem a chance de melhorar na escola, desenvolver a leitura e descobrir novos talentos através de oficinas culturais e educativas.",
  itens: [
    "Desde que a ONG foi fundada, mais de 50 crianças foram atendidas!",
    'Oferecemos diversos eventos e oficinas culturais como o "Afrobrincar" na Semana da Consciência Negra',
    "Apoio Escolar contínuo para crianças em vulnerabilidade social",
  ],
};

export const formasColaborar = [
  {
    icon: cofrinho.url,
    titulo: "Financeiramente",
    texto:
      "Sua contribuição financeira é essencial para garantirmos educação e oportunidades a crianças em vulnerabilidade. Com sua doação, ampliamos projetos e transformamos o futuro de quem mais precisa. Cada valor conta.",
  },
  {
    icon: doacao.url,
    titulo: "Bens-materiais",
    texto:
      "Doe materiais escolares, livros, brinquedos ou alimentos e ajude a criar um ambiente de aprendizado digno para nossas crianças. Um gesto simples pode suprir grandes necessidades e promover o desenvolvimento educacional.",
  },
  {
    icon: socorro.url,
    titulo: "Voluntariado",
    texto:
      "Seja voluntário no Espaço Tia Jú e contribua diretamente para a formação educacional e humana de nossas crianças. Compartilhe seu tempo, conhecimento e habilidades para impactar vidas e fortalecer a comunidade.",
  },
  {
    icon: aperto.url,
    titulo: "Parcerias",
    texto:
      "Sua empresa ou instituição pode ser nossa parceira na missão de transformar vidas através da educação e da cultura. Juntos, podemos desenvolver ações sociais, projetos educativos e fortalecer o impacto positivo na comunidade de Mongaguá.",
  },
];

export const espacoTexto = [
  "Atualmente a ONG atende dezenas de crianças e oferece atividades diarias para elas, sempre buscando melhorar nossos recursos utilizados nas aulas e no dia a dia, contudo, existem diversos desafios que enfrentamos diariamente, mas o Espaço segue firme devido ao apoio de doadores, voluntarios e parceiros que acreditam no nosso potencial.",
  "O Espaço Tia Jú é muito mais do que só uma ONG, é um local onde você aprende não só conteudos escolares, mas também aprendizados que você vai levar pra vida, aqui ensinamos o que não cai em provas, mas que o mundo sente falta, como o carinho, a gentileza, a bondade, a força de vontade para nunca desistir e a coragem para amar até as pequenas coisas.",
];

export const frase = {
  antes: "O que ",
  destaque1: "aprendemos",
  meio: " torna-se parte de ",
  destaque2: "quem somos.",
};

export const projetoParagrafos = [
  "Estimular a integração social, potencial artístico e a cultura através de vivências em oficinas de arte.",
  "Resgatar o valor da leitura, do pensar e do agir é a missão do Espaço Tia Jú. Com esse projeto, vamos possibilitar que mais crianças, adultos e idosos possam conhecer a arte, a literatura e abrir um portal para o futuro.",
  'Faz-se entanto necessário que busquemos resgatar o valor da leitura, como ato de prazer e requisito para emancipação social e promoção da cidadania, o mesmo ocorre com outras tantas facetas do ser em desenvolvimentos que estão se perdendo nesta geração excessivamente tecnológica e pouco social. Por isso introduzimos oficinas de grafite e artes/artesanato, para que além das interações sociais, tenhamos os pequenos pondo a " mão na massa", pintando com tintas reais, em locais reais que vão muito além das telas frias de seus eletrônicos.',
  "A construção de objetos, jogos, presentes e outros em aulas de artes fazem as crianças desenvolverem vários aspectos ao pensar no que será feito, participando de todas as etapas de construção e por fim utilizando suas criações com orgulho.",
  'Muitas vezes fazemos resgate de brincadeiras e utensílios, trazendo-os para o contexto atual das referências das crianças, como por exemplo, construir estilingues de cartolina, com temas de desenhos e personagens animados atuais, transformando jogos virtuais em jogos reais, como fizemos como o famoso aplicativo "angry birds", com estilingues, alvos e temática reais feitas pelos pequenos.',
];

export const servicos = {
  titulo: "AULAS ESPAÇO TIA JÚ",
  subtitulo: "DESCRIÇÃO DAS AÇÕES/ATIVIDADES",
  texto:
    "As atividades são ministradas no Espaço Tia Jú: Contação de histórias, com personagens próprios (fantoches, pelúcias e desenhos), sempre introduzindo valores do ser e em relação ao nosso lar. Oficinas de artes onde crianças, jovens e idosos interagem na construção de objetos, jogos e brincadeiras. Havendo uma troca de conhecimentos e reciclagem de materiais no meio ambiente",
};

export const fundadora = {
  nome: "Juçara Maria Silva",
  foto: jucara.url,
  texto:
    "Gestora do ESPAÇO TIA JU, comprometida com o desenvolvimento social, busca promover educação, saúde, bem-estar e inclusão social. Desenvolve programas educacionais para crianças em situação de vulnerabilidade, coordena uma equipe de voluntários e profissionais da área de educação, garantindo a execução eficaz dos projetos.",
};

export const integrantes = [
  {
    nome: "Elvira Macedo Dugaiche",
    foto: elvira.url,
    texto:
      "Professora de artes no Espaço Tia Ju, desde 2019. Atuo como cabeleireira e professora de artesanato para crianças, utilizando habilidades técnicas e criativas para promover o bem-estar, autoestima e desenvolvimento educacional das crianças atendidas. Cursando faculdade de serviço social pela FECAF, formada em administração pela ETEC. Em paralelo a minha profissão sou professora de artesanato para crianças no Espaço tia Ju. Realizo o planejamento e execução de oficinas de artesanato para crianças, desenvolvendo habilidades manuais, criativas e cognitivas.",
  },
  {
    nome: "Fernanda Aparecida Domingos Casado",
    foto: fernanda.url,
    texto:
      "Fernanda Aparecida Domingos Casado, secretaria no Espaço tia Ju. Profissional com experiência em gestão financeira, buscando contribuir para o Espaço tia JU, como responsável pelas contas e finanças, garantindo a transparência e eficácia no uso dos recursos. Gerenciou o orçamento anual, incluindo a elaboração e monitoramento de receitas e despesas. Realizo conciliações bancárias e controlo o fluxo de caixa. Participo da auditoria interna, contribuindo para a melhoria dos processos financeiros.",
  },
  {
    nome: "Michele Frances Mandelli",
    foto: michele.url,
    texto:
      "Administrativo do Espaço tia Ju com forte paixão por direito e justiça social, busco contribuir para o desenvolvimento de programas que promovam a equidade e os direitos humanos. Comprometida com a transformação social. Graduanda em processos gerenciais com perfil comercial e amor pelo direito. Responsável pela gestão de projetos; captação de Recursos; Comunicação Interpessoal; Conhecimento sobre legislação de ONGs e políticas públicas; Cidadania e Direitos Humanos; Mobilização Social; Análise e Pesquisa Jurídica. Voluntário e assistência judiciária gratuita no presidio de Piraquara",
  },
  {
    nome: "Mônica Spinola Silva",
    foto: monica.url,
    texto:
      "Mônica Spínola Silva é formada e tecnologia em hotelaria pelo Senac. Professora de culinária infantil dedicada e criativa, especializada em ensinar crianças de forma lúdica e segura. Combinando técnicas simples com muita diversão, incentiva o interesse pela alimentação saudável, desenvolvendo habilidades motoras, autonomia e trabalho em equipe por meio da cozinha.",
  },
  {
    nome: "Rodrigo Alves",
    foto: rodrigo.url,
    texto:
      "Rodrigo Alves é artista, arte-educador, professor de teatro e mediador cultural. É membro da mesa diretora e professor de teatro no Espaço Tia Ju, cofundador e gestor do Grupo Cultural Peguatá, e vice-presidente do Movimento Artístico e Cultural de Mongaguá (MACM). Atua desde 2013 em processos que cruzam arte, território e justiça social. Formado em teatro pela Escola Livre de Teatro e pelo Teatro do Kaos, desenvolve projetos que unem teatro, performance, poesia, formação e mobilização cultural",
  },
  {
    nome: "Criis Almeida",
    foto: criss.url,
    texto:
      "Doutoranda em Artes Cênicas pela USP, mestre em História e bacharela em Artes Cênicas. Atriz, diretora, produtora e ativista social, atua também como Agente Territorial de Cultura pelo Ministério da Cultura (MinC). Sua pesquisa se dedica às mulheres na cena latino-americana, com ênfase em coletivos e grupos culturais do continente.",
  },
  {
    nome: "Marcos V. A. S. Donner",
    foto: marcos.url,
    texto:
      "Professor de informática, formado em Técnico em Administração pela ETEC Adolpho Berezin e estudante de Gestão Pública. Atua no Espaço Tia Ju como professor e Social Media, trazendo uma visão mais tecnológica e estratégica para a associação. Também é Coordenador do Conselho Municipal da Juventude de Mongaguá (gestão 2025/2027) e desenvolve trabalhos nas artes cênicas, unindo técnica, expressão artística e engajamento social.",
  },
];

export const apoiador = {
  nome: "Yohan Clark",
  foto: yohan.url,
  textos: [
    "Meu nome é Yohan Clark, e tenho orgulho de apoiar o Espaço Tia Ju por meio do desenvolvimento e organização do seu site institucional. Acredito no poder da tecnologia como ferramenta de transformação social, e contribuir com minhas habilidades para fortalecer a presença digital da instituição é uma forma de colaborar diretamente com a causa.",
    "Busco sempre desenvolver soluções modernas, funcionais e acessíveis, garantindo que as informações do projeto sejam apresentadas de maneira clara e profissional. Fazer parte dessa iniciativa é, para mim, uma oportunidade de unir conhecimento, responsabilidade e compromisso com a comunidade.",
  ],
  contatoLabel: "Quer entrar em contato comigo? Aqui está:",
  links: [
    { label: "Instagram", url: "https://www.instagram.com/yohan_.zx/" },
    { label: "Email", url: "mailto:yohanclark183@outlook.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yohan-c-838a183b2/" },
  ],
};

export const colabore = {
  titulo: "COLABORE",
  intro:
    "No Espaço Tia Jú, acreditamos que toda criança merece crescer com dignidade, afeto e oportunidades. Todos os dias, trabalhamos para acolher, educar e fortalecer famílias em situação de vulnerabilidade — mas para continuar essa missão, precisamos de você.",
  doacao: "Sua doação, seja qual for o valor, faz a diferença.",
  viraLabel: "Ela vira:",
  vira: ["Alimento", "Educação", "Cultura", "Cuidado", "Esperança"],
  pixTitulo: "DOAÇÃO VIA PIX:",
  pixTexto:
    "Você pode fazer sua Doação On-line Scaneando nosso PIX através do seu aplicativo de transações",
  contatoTexto:
    "Quer doar bens materiais, se tornar um voluntário ou fechar uma parceria? entre em contato conosco:",
};
