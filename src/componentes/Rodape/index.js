import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/LunnaC" target="_blank">
                        <img src="/imagens/github-logo.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://pt.wikipedia.org/wiki/Pesca" target="_blank">
                        <img src="/imagens/fish.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lunnakamargo/" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Lunna Camargo.
            </p>
        </section>
    </footer>)
}

export default Rodape