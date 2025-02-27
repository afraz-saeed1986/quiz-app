"use client"
import {useCallback, useRef, useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Modal({children}){
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const photoClick = useCallback((e) => {
        if(e.target === overlay.current || e.target === wrapper.current) {
            if(onDismiss) onDismiss();
        }
    }, [onDismiss, overlay, wrapper]);

    const onKeyDown = useCallback((e) => {
        if(e.key === "Escape") onDismiss();
    }, [onDismiss]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onkeydown]);

    return (
        <div ref={overlay}
             className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
             onClick={photoClick}
        >
            <div ref={wrapper} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                {children}
            </div>

        </div>
    )
}