"use client";
import { useState, useRef } from "react";
import Image from "next/image";

type QuestionProps = {
    question: string;
    answer: string;
}

function Question({ question, answer }: QuestionProps) {

    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="p-3 md:p-5 ">
            <button
                onClick={() => setOpen(!open)}
                className="text-lg md:text-xl text-my-white text-left flex justify-between gap-3"
            >
                <p>{question}?</p>
                <div className="bg-my-black p-2 rounded-full flex items-center justify-center h-max shrink-0">
                    <Image src="/images/cross.svg" height={25} width={25} alt="" className={`${ open ? "rotate-45" : ""} duration-300`} />
                </div>
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: open ? contentRef.current?.scrollHeight : 0
                }}
                className="overflow-hidden transition-all duration-300"
            >
                <p className="mt-3">
                   {answer}
                </p>
            </div>
        </div>
    )
}

export default Question