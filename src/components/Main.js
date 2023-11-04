import '../App.css';
import react from 'react';
import sobre from '../img/foto-sobre.jpeg';
import html from '../img/logo-html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import logoreact from '../img/react.webp';

function Main() {
    return(
        <div>
                <section id="sobre" className="sobre">
                    <div classeName="sobre-conteudo">
                        <h2>Quem sou eu?</h2>
                        <p>Me chamo Eduardo Gomes, tenho 30 anos, Pernambucano, natural de olinda e  pai de dois meninos lindos.</p>
                        <p>Sou formado em Educação Física, mas sempre tive a ambição de estudar sobre tecnologias, hoje estou podendo realizar esse desejo de estudar e me tornar um desenvolvedor web.</p>
                        <p>Gosto muito de música, ir a praia, treinar (musculação, crossfit, corrida, bike), gosto muito de ir ao culto da igreja em qual eu faço parte.</p>
                        <p>Estou bastante focado em fazer transição de carreira e atuar como Desenvolvedor em grandes empresas.</p>
                        </div>

                            <img className='foto-sobre' src={sobre} alt='Foto sobre mim'></img>
                </section>

                <section id="tecnologias" className="tecnologia">
                    <h2>Tecnologias:</h2>
                    <div className="tecnologias">
                        <h3><abbr title="HyperText Markup Language">HTML:</abbr></h3>
                        <p>Tecnologia usada para a marcação de textos de um site.</p> 
                        <img className='foto-html' src={html} alt='Logo do html'></img>
                    </div>

                    <div className="tecnologias">
                        <h3><abbr title="Cascading Style Sheets">CSS:</abbr></h3>
                        <p>Tecnologia usada para estilizar o site.</p>
                        <img className='foto-css' src={css} alt='Logo do css'></img>
                    </div>

                    <div className="tecnologias">
                        <h3>Javacript:</h3>
                        <p>Linguagem de programção que utilizamos para dar interatividade ao site.</p>
                        <img className='foto-js' src={js} alt='Logo do JavaScript'></img>
                    </div>

                    <div className='tecnologias'>
                        <h3>React:</h3>
                        <p>React é um framework JavaScript criado pelo Facebook que é usado para criar interfaces de usuário em aplicativos web.</p>
                        <img className='foto-react' src={logoreact} alt='Logo do react'></img>
                    </div>
        
                </section>

                <section id="projetos" className="projetos">
                    <h2>Projetos:</h2>
                    <div id="boxProjeto">
                        <div className="formatacaoProjeto">
                            <h3><a href="https://eduardogomesdev.github.io/Desenvolvimento-3/" target="_blank">Projeto dos Pontos turísticos do Recife</a></h3>
                            <p class="paragProjeto">Projeto realizado usando HTML e CSS.</p>
                        </div>
                        <div className="formatacaoProjeto">
                            <h3><a href="https://eduardogomesdev.github.io/Desenvolvimento-4/" target="_blank">Projeto dos meus lugares favoritos</a></h3>
                            <p class="paragProjeto">Projeto realizado usando HTML e CSS.</p>
                        </div>
                        <div className="formatacaoProjeto">
                            <h3><a href="https://eduardogomesdev.github.io/Calculadora/" target="_blank">Calculadora</a></h3>
                            <p class="paragProjeto">Projeto realizado usando: HTML, CSS e Javacript. Com a função de calcular as operações básicas.</p>
                        </div>
                        <div className="formatacaoProjeto">
                            <h3><a href="https://eduardogomesdev.github.io/Calculadora_de_Imc/" target="_blank">Calculadora de Imc</a></h3>
                            <p class="paragProjeto">Projeto realizado usando: HTML, CSS e Javacript. Com a função de calcular o indice de massa corporal.</p>
                        </div>
                    </div>
                </section>

                <section id="contato" className="contato">
                    <h2>Contato:</h2>

                    <h3>Informe seu contato:</h3>
                    <div className='form-contato'>
                        <form>
                            <label htmlFor='name' >Nome: </label>
                            <input type='text' 
                                id='name' 
                                name='name' 
                                placeholder='Digite seu nome'>
                            </input>

                            <label htmlFor='telefone' >Telefone: </label>
                            <input type='telefone' 
                                id='telefone' 
                                name='telefone' 
                                placeholder='(xx) xxxxx-xxxx'>
                            </input>

                            <label htmlFor='name' >Email: </label>
                            <input type='text' 
                                id='name' 
                                name='name' 
                                placeholder='Digite seu Email'>
                            </input>
                        </form>
                    </div>
                </section>
        </div>
    )
}

export default Main