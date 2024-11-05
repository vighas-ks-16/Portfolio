import HeroImg from '../assets/Vighas-Portfolio.jpg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Hero() {


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className="md:w-1/2 flex flex-col">
            <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi,<br/>I'm <span className="text-black">KS </span>Vighas
                <p className="text-2xl">Im a Full-Stack Developer and Cloud Enthusiast</p>
            </h1>
            <div className='flex py-10'>
                <a target='_blank' href='https://github.com/vighas-ks-16' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a target='_blank' href='https://www.linkedin.com/in/vighas-k-s-592386217/' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a target='_blank' href='https://www.instagram.com/__vighas__/' className='hover:text-white'><AiOutlineInstagram size={40}/></a>
            </div>
        </div>        
        <img className='md:w-1/3 rounded-full' src={HeroImg} />

    </section>
}