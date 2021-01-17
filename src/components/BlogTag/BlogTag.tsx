export default function BlogTag({ tagName }: { tagName: string }) {
    return (
        <span className="px-3 py-1 mx-4 my-2 border border-purple-200 text-xxs">
            -{tagName}-
        </span>
    );
}