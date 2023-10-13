import imglogo from "../assets/Logo.png"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <div className="flex justify-center items-center">
            <img src={imglogo} alt="logo" className='w-40 object-contain my-10' />
        </div>

        <h1 className='head_text text-slate-700'>
            We're sorry, <br className='max-md:hidden'/>
            <span className='orange_gradient'>our website is down..</span>
        </h1>
        <h2 className="text-slate-600 mb-10 "> We apolozise that maintenance is taking longer than expected.<br/>
        </h2>
        <h1 className="text-slate-600 mb-10">Thank you for your patience </h1>

    </header>
   
  )
}

export default Hero;
