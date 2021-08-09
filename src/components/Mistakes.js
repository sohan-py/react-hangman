export default function Mistakes() {
    const mistakes = ['a', 'b', 'c', 'd', 'e'];
    return (
        <div className="col">
            <h1>Mistakes - {mistakes.length}</h1>
            <h3>{mistakes.join(', ')}</h3>
        </div>
    );
};
