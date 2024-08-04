export const renderTextWithSpan = (text, className) => {
    return text.split("").map((char, index) => (
        <span key={index} className={className}>
            {char}
        </span>
    ));
};