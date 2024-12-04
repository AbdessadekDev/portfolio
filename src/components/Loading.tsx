import { motion } from 'motion/react'


const Loading = () => {
    const loadingMessages: string[] = [
        "Good things take time—thank you for your patience!",
        "Almost there... Hang tight!",
        "Loading magic... Stay with us!",
        "Patience is the key to great experiences.",
        "The wait is worth it—just a moment more.",
        "Preparing something amazing for you...",
        "Great things are loading—thank you for your understanding!",
        "Sit back, relax, and let us do the heavy lifting.",
        "Loading... A little patience goes a long way!",
        "We’re almost ready. Thanks for waiting!"
    ];
    
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center bg-secondary-bg-light dark:bg-primary-bg-dark transition-all duration-300">
            <div className="flex gap-4">
                <div className="w-5 h-5 rounded-full bg-primary-bg-dark dark:bg-primary-bg-light animate-bounce-30-100"></div>
                <div className="w-5 h-5 rounded-full bg-primary-bg-dark dark:bg-primary-bg-light animate-bounce-30-200"></div>
                <div className="w-5 h-5 rounded-full bg-primary-bg-dark dark:bg-primary-bg-light animate-bounce-30-300"></div>
                <div className="w-5 h-5 rounded-full bg-primary-bg-dark dark:bg-primary-bg-light animate-bounce-30-400"></div>
            </div>
            <div className='text-2xl'>Loading..</div>
            <motion.div 
                initial={{ backdropFilter: "blur(24px)" }}
                animate={{ backdropFilter: 'blur(0px)' }}
                transition={{ duration: 4 }}
                style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    height: "100vh",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                  }}
            ></motion.div>
        </div>
    )
}

export default Loading