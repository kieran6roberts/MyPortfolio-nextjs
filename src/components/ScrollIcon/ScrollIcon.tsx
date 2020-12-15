import { motion as m } from "framer-motion";

type ScrollProps = {
    pathLength: any,
    complete: boolean,
}

export default function ScrollIcon({ pathLength, complete }: ScrollProps): React.ReactElement {
    return (
        <svg className="block fixed bottom-8 md:bottom-16 right-0 md:right-12 h-12 w-12" 
        viewBox="0 0 60 60">
            <m.path
            fill="none"
            strokeWidth="4"
            stroke="black"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
                pathLength,
                rotate: 90,
                translateX: 5,
                translateY: 5,
                scaleX: -1
            }}
            />
            <m.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: complete ? 1 : 0 }}
            />
        </svg>
    )
};