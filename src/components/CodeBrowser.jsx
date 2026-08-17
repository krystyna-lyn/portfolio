import { useEffect, useState } from "react";

const tabs = {
    "App.jsx": [
        'const developer = {',
        '    name: "Krystyna",',
        '    role: "Web Developer",',
        '    location: "Spain",',
        '};',
        '',
        'const App = () => {',
        '    return <Portfolio />;',
        '};',
    ],
    "Projects.jsx": [
        'const projects = [',
        '    "KixSneaks",',
        '    "Hotel Management",',
        '    "Web Projects",',
        '];',
        '',
        'export default projects;',
    ],
    "Contact.jsx": [
        'const contact = {',
        '    available: true,',
        '    location: "Spain",',
        '    role: "Web Developer",',
        '};',
        '',
        'export default contact;',
    ],
};

const CodeBrowser = () => {
    const [activeTab, setActiveTab] = useState("App.jsx");
    const [displayedCode, setDisplayedCode] = useState("");

    const code = tabs[activeTab].join("\n");

    useEffect(() => {
        setDisplayedCode("");

        let index = 0;

        const interval = setInterval(() => {
            setDisplayedCode(code.slice(0, index));
            index++;

            if (index > code.length) {
                clearInterval(interval);
            }
        }, 18);

        return () => clearInterval(interval);
    }, [activeTab, code]);

    return (
        <div className="relative w-full max-w-[520px]">
            <div className="absolute -inset-8 -z-10 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-2xl border border-blue-200/20 bg-[#050a18]/85 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
                {/* Browser top */}
                <div className="flex h-12 items-center border-b border-blue-200/10 px-4">
                    <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-200/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-200/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-200/20" />
                    </div>

                    <div className="ml-5 flex-1 rounded-md border border-blue-200/10 bg-blue-200/[0.04] px-3 py-1">
                        <span className="text-[10px] tracking-wide text-blue-200/50">
                            krystyna.dev
                        </span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex overflow-x-auto border-b border-blue-200/10">
                    {Object.keys(tabs).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative whitespace-nowrap px-5 py-3 text-xs transition-colors duration-300 ${activeTab === tab
                                    ? "text-blue-200"
                                    : "text-blue-200/35 hover:text-blue-200/70"
                                }`}
                        >
                            {tab}

                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-blue-200" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Code */}
                <div className="min-h-[300px] p-6">
                    <pre className="overflow-hidden font-mono text-[13px] leading-7">
                        <code>
                            {displayedCode.split("\n").map((line, index) => (
                                <div key={index} className="flex">
                                    <span className="mr-6 w-5 select-none text-right text-blue-200/20">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="whitespace-pre text-blue-100/80">
                                        {line}
                                    </span>
                                </div>
                            ))}
                        </code>
                    </pre>

                    <span className="ml-[44px] inline-block h-4 w-[2px] animate-pulse bg-blue-200" />
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-blue-200/10 px-5 py-3">
                    <span className="text-[10px] tracking-wide text-blue-200/35">
                        React · JavaScript
                    </span>

                    <span className="text-[10px] text-blue-200/60">
                        Web Developer
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CodeBrowser;