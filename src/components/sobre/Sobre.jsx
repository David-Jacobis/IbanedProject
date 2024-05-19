import React from "react";
import './Sobre.css';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFadeExample from "../carousel/CarouselFade";

function Sobre(){
    return <React.Fragment>
        <div className="sobreMain"> 
            <Container maxWidth="mt">
                <section>
                    <div className="contentSobre">
                        <h4>Igreja Batista Estrela Dalva</h4>
                        <h3>Sobre nós</h3>
                        <p>
                            A IBANED é uma igreja congregacional de modelo representativo.
                            Filiada à Convenção Batista Nacional, é liderada por um Conselho Pastoral.
                            Por ser uma igreja batista, é independente e autogovernada.
                        </p>
                    </div>
                </section>
                <section>
                    <Container maxWidth="mt">
                        <div className="Carousel">
                            <CarouselFadeExample/>
                        </div>
                    </Container>
                </section>
                <section>
                    <div className="contentSobreH">
                        <h2>Nossa História</h2>
                        <p>
                            A Igreja Batista Nacional Estrela D'alva, chamada por seus membros e amigos de IBANED,
                            começou a partir de uma reunião de oração frequentada por mulheres e crianças na casa
                            da saudosa irmã Ilda Alves de Almeida na antiga Rua Quatro, 484, bem próximo do atual endereço da igreja.
                            Em meados de 1984, o pequeno grupo se tornou uma congregação da Igreja Batista da Lagoinha.Alguns irmãos
                            dirigiram o trabalho até a chegada do então obreiro Antônio Leal e de sua família, em 1986. Nos anos seguintes,
                            a igreja foi emancipada e em 1988 comprou de forma milagrosa o lote em que está sua sede até hoje. Somente em 1989
                            a igreja foi registrada oficialmente. No ano seguinte se deu a mudança para o primeiro templo construído no lote da igreja.
                        </p>
                        <p>
                            Em 1995, o pastor Leal foi oficialmente ordenado ao ministério. Em 1999, iniciou-se a construção do templo atual,
                            sempre com muitos mutirões, mas somente em 2006 o antigo templo foi demolido. A igreja passou a se reunir no que hoje
                            é o salão social. Um marco desse período foi a realização, em 2007, do Curso de Formação Cristã e Capacitação
                            Ministerial com a base da liderança da igreja.
                        </p>
                        <p>
                            A década atual foi de muitas mudanças! Em 2011, o pastor Éber foi ordenado ao pastorado e aconteceu a mudança
                            para o templo atual, ainda inacabado. Em 2012, foi a vez de o pastor Luciano ser ordenado ao ministério.
                            Ambos têm servido a igreja no ministério com dedicação exclusiva desde então. Em 2013, nossa igreja enviou
                            o pastor Luciano e a irmã Selma Coutinho em missão a Moçambique, África. A irmã Selma fora enviada também em 2010.
                            E no início de 2018 foi ordenado ao ministério da Palavra o pastor Fábio. Outros pastores também passaram pela IBANED,
                            sendo alguns aqui ordenados, como os pastores Joaquim e Claudinei, mas hoje estão servindo em outros campos.
                        </p>
                        <p> 
                            Como marcos de nossa história recente de inúmeras atividades, destacamos nossas Festas das Nações e dos Estados,
                            que acontecem nas principais avenidas do bairro e atraem centenas de pessoas. O nosso alvo é continuar em tudo glorificando a Deus
                            e tornando o seu nome conhecido em todos os lugares. E estamos felizes de agora poder contar com você para isso!
                        </p>
                    </div>
                </section>
                <section>
                    <div className="Location">
                        <h2>Veja Nossa Localização</h2>
                        <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.980197180699!2d-43.977176923982114!3d-19.967335039473866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697d054c41631%3A0xb6b7c7a7086340bb!2sIBANED%20-%20Igreja%20Batista%20Estrela%20D&#39;Alva!5e0!3m2!1spt-BR!2sbr!4v1716136704432!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    </React.Fragment>
}

export default Sobre;