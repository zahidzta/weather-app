import iconError from '../assets/images/icon-error.svg'
import iconRetry from '../assets/images/icon-retry.svg'

interface APIErrorProps {
    onRetry?: () => void;
}

export default function APIError({ onRetry }: APIErrorProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-20 md:mt-32 gap-3 px-4">
            <img src={iconError} alt="Error" className="w-10 h-10 md:w-12 md:h-12 opacity-80 mb-2" />
            
            <h2 className="text-3xl md:text-5xl font-bold font-display text-neutral-0 tracking-tight">
                Something went wrong
            </h2>
            
            <p className="text-sm md:text-base font-sans text-neutral-300 max-w-sm leading-relaxed mt-1 mb-4">
                We couldn't connect to the server (API error). Please try again in a few moments.
            </p>
            
            <button 
                onClick={onRetry}
                className="flex items-center gap-2 bg-neutral-800 border border-neutral-700/50 rounded-lg px-5 py-2.5 hover:bg-neutral-700 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
            >
                <img src={iconRetry} alt="Retry" className="w-4 h-4 opacity-80" />
                <span className="text-neutral-200 text-sm font-sans font-medium">Retry</span>
            </button>
        </div>
    )
}
