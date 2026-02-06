export const AmbientBackground = () => {
    return (
        <div id="ambient-bg" className="fixed overflow-hidden -z-10 pointer-events-none w-full h-full top-0 left-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-200/50 rounded-full blur-[120px]"></div>
            <div className="absolute top-[10%] right-[-5%] w-[30%] h-[50%] rounded-full blur-[100px] bg-indigo-100/40"></div>
        </div>
    );
};
