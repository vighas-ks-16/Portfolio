import HeroImg from '../assets/Vighas-Portfolio.jpg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import AwsCloudEssentials from '../assets/aws-cloud-essentials.png';
import AwsCloudPractitioner from '../assets/aws-ccp.png';


export default function Hero() {


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className="md:w-1/2 flex flex-col">
            <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi,<br/>I'm <span className="text-black">KS </span>Vighas
                <p className="text-2xl">
                    <span className="block">Full-Stack Developer</span>
                    <span className="block">AWS-DevOps Enthusiast</span>
                </p>
            </h1>
            <div className='flex py-10'>
                <a target='_blank' href='https://github.com/vighas-ks-16' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a target='_blank' href='https://www.linkedin.com/in/vighas-k-s-592386217/' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a target='blank' href='https://www.instagram.com/vighas_/' className='hover:text-white'><AiOutlineInstagram size={40}/></a>
            </div>

            <div className='flex gap-8 justify-start mt-5'>
                <a href='https://www.credly.com/badges/a40778ab-1a34-4f27-a3fe-8673b72f5c74/public_url' target='_blank' rel='noopener noreferrer'>
                    <img src={AwsCloudEssentials} className='h-40 w-auto' />
                </a>
                <a href='https://www.credly.com/badges/ccfe24d5-c564-4938-96a5-f59f90f17383/public_url' target='_blank' rel='noopener noreferrer'>
                    <img src={AwsCloudPractitioner} className='h-40 w-auto' />
                </a>
            </div>


        </div>        
        <img className='md:w-1/3 rounded-full' src={HeroImg} />

    </section>
}