export default function Guess() {
    const word = 'he_l_o';
    return (
        <div className="mt-4">
            {word.split('').map((letter, i) =>
                <h1 key={i} className="d-inline-block mr-4">{letter}</h1>
            )}
        </div>
    );
};
