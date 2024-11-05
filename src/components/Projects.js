import websiteImg1 from "../assets/pill-reminder-app.png";
import websiteImg2 from "../assets/todo-list.jpg";
import websiteImg3 from "../assets/website-blog.jpg";


export default function Projects() {
    return <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
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
    </section>
}