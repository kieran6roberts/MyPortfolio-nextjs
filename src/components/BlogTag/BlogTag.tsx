export default function BlogTag({ tagName }: { tagName: string }) {
    return (
        <span className="block px-1 py-1 mx-1 my-1 font-bold text-white border border-purple-200 sm:px-3 sm:mx-4 bg-sec text-xxs">
            -{tagName ?? "Unable to retrieve tag name"}-
        </span>
    );
}