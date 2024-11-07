import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl mb-5 w-[140px] font-bold'>Resume</h1>
                <a className='btn' target='_blank' href='https://drive.google.com/drive/folders/1B3BogAo9U9eoQeQa3yYYK7T_Cv4LQRvi?usp=sharing'>Download</a>
                <div className='mt-20'></div>
            </div>
        </div>
    </section>
}