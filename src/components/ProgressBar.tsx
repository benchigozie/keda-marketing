type ProgressBarProps = {
    progress: number;
};

function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="w-full h-2 bg-my-black rounded-full overflow-hidden">
            <div
                className="h-full bg-my-lime rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;