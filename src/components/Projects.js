import websiteImg1 from "../assets/pill-reminder-app.png";
import websiteImg2 from "../assets/todo-list.jpg";
import websiteImg3 from "../assets/website-blog.jpg";
import websiteImg4 from "../assets/3-tier-architecture-aws.png";
import websiteImg5 from "../assets/aws-infrastructure-using-terraform.png";
import websiteImg6 from "../assets/jenkins-cicd.png";


export default function Projects() {
    return <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl mb-5 w-[140px] font-bold'>Projects</h1>
                <h1 className='text-3xl mb-5 w-[200px] font-bold text-gray-900'>Full Stack</h1>
                <p>These are some of my best projects. I have built these with React JS, Node JS, Mongo DB and Tailwind CSS. Check them out!</p>
            </div>            
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg1}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Medicine Reminder App</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href='https://github.com/vighas-ks-16/Medicine-Reminder-Application'>View Project</a>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg2}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>To-Do List App</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href='https://github.com/vighas-ks-16/To-Do-List'>View Project</a>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg3}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Basic Blog Website</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href='https://github.com/vighas-ks-16/Blog-Website-MERN'>View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-20'></div>

        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-3xl mb-5 w-[200px] font-bold text-gray-900'>AWS-DevOps</h1>
                <p>Check out my AWS-DevOps projects, where I leverage cloud solutions and DevOps tools to create scalable and secure environments across various applications.</p>
            </div>            
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg4}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Deployment of 3-Tier Architecture on AWS</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href='https://github.com/vighas-ks-16/Deployment-of-3-Tier-Web-Architecture-on-AWS'>View Project</a>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg5}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>AWS Infrastructure setup using Terraform</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href='https://github.com/vighas-ks-16/Setting-up-AWS-Infrastructure-using-Terraform'>View Project</a>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg6}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Jenkins CI/CD Pipeline for Java Application</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href='https://github.com/vighas-ks-16/Jenkins-End-to-End-CI-CD-Pipeline'>View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}