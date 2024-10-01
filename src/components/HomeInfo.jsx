import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Oi, Eu sou
        <span className='font-semibold mx-2 text-white'>Tom</span>
        👋
        <br />
        Um Desevolvendo de software do Brasil
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Trabalhei com muitos projetos <br /> e adquiri muitas habilidades ao longo do caminho
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Saber mais
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Fiz vários projetos praticos ao longo da minha carreira. <br /> Curioso sobre o que eu ja fiz?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
        Visite meu portfólio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Precisa de um projeto feito ou procura um desenvolvedor? <br/> Estou a apenas algumas teclas de distância
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
      Vamos conversar
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;