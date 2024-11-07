import AboutImg from '../assets/about.png';

export default function About () {

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl mb-5 w-[170px] font-bold'>About Me</h1>

                <p className="pb-5">I build beautiful Websites with <span className="font-bold">React JS</span> and <span className="font-bold">Tailwind CSS</span>.</p>
                
                <p className='pb-5'>In Backend, I know <span className="font-bold">Node JS, Express JS, Mongo DB</span> and <span className="font-bold">Mongoose</span>.</p>

                <p className='pb-5'>I am an <span className="font-bold">AWS Certified Cloud Practitioner [Scored 90 %]</span>.</p>

                <p className='pb-5'>I leverage <span className="font-bold">AWS services including VPC, EC2, S3, Internet Gateway, ELB,</span> and <span className="font-bold">CloudWatch</span> to build scalable, secure, and high-performing cloud solutions across my projects.</p>

                <p className='pb-5'>I bring hands-on <span className="font-bold">DevOps expertise with tools like Docker, Jenkins, Terraform, Ansible,</span> and <span className="font-bold">Kubernetes</span> to streamline CI/CD, automate infrastructure, and enable resilient, scalable deployments.</p>
            </div>
        </div>
    </section>
}