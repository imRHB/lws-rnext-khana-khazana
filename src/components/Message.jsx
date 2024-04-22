export default function Message() {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-bold text-slate-700">Not found!</h3>
            <p className="font-semibold text-slate-600">
                No recipes found with category{" "}
                <span className="text-red-500">
                    {/* {decodeURIString(categorySlug)} */}
                </span>
            </p>
        </div>
    );
}
