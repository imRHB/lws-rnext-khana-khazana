export default function RecipeItemCookingDetails({ steps }) {
    return (
        <div className="py-12">
            <h3 className="py-6 text-xl font-semibold">How to Make it</h3>

            <div>
                {steps.map((step, idx) => (
                    <div key={idx} className="step">
                        <h3>Step {idx + 1}</h3>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
