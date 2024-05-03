export default function Field({ children, label, htmlFor, error }) {
    return (
        <div className="">
            <div
                className={`${
                    label ? "justify-between" : "justify-end"
                } flex items-center gap-4`}
            >
                {label && (
                    <label
                        htmlFor={htmlFor}
                        className="block mb-2 font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}
                {!!error && (
                    <p className="text-sm text-red-500">{error.message}</p>
                )}
            </div>

            {children}
        </div>
    );
}
