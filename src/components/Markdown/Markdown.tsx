import * as React from "react";
import ReactMarkdownWithHtml from "react-markdown/with-html";

export default function Markdown({ string }: { string: string}) {
    return (
        <article className="text-xs">
            <ReactMarkdownWithHtml children={string} allowDangerousHtml />
        </article>
    )
};