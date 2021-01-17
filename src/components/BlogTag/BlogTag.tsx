export default function BlogTag({ id, tagName }: { id: string, tagName: string }) {
    return (
        <li className="px-3 py-1 mx-4 my-2 border border-purple-200" 
        id={id}>
            <span className="text-xxs">
                -{tagName}-
            </span>
        </li>
    );
}