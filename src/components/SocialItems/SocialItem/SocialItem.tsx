interface SOCIAL_ITEM {
    children: React.ReactElement;
    label: string;
    path: string;
}

export default function SocialItem({ path, label, children}: SOCIAL_ITEM): React.ReactElement {
    return (
        <li className="mx-2 mb-2">
            <a aria-label={label}
            className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400"
            href={path}
            target="_blank">
                {children}
            </a>
        </li>
    )
};