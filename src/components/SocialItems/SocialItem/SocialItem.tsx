interface SOCIAL_ITEM {
    children: React.ReactElement;
    label: string;
    path: string;
}

export default function SocialItem({ path, label, children}: SOCIAL_ITEM): React.ReactElement {
    return (
        <li className="mx-3 mb-2 2xl:mx-8">
            <a aria-label={label}
            className="text-md"
            href={path}
            rel="noopener"
            target="_blank">
                {children}
            </a>
        </li>
    )
};