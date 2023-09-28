export default function BlinkingCursor() {
    return (
        <svg
            viewBox="8 4 8 16"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-[1ch] animate-flicker mb-[4px]"
        >
            <rect x="10" y="6" width="4" height="12" fill="#fff" />
        </svg>
    );
}