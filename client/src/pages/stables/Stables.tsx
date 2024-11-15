import { useEffect, useState } from "react";
import "./Stables.css";
import "./Button-stables";

interface Stables {
	constructorId: string;
	name: string;
	nationality: string;
}

const Stables = () => {
	const [stables, setStables] = useState<Stables[]>([]);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		getStables();
	}, []);

	const getStables = () => {
		fetch("https://ergast.com/api/f1/2024/constructors.json")
			.then((response) => response.json())
			.then((data) => {
				setStables(data.MRData.ConstructorTable.Constructors);
			})
			.catch((error) => {
				console.error("Erreur lors de la récupération des écuries :", error);
				setError(error);
			});
	};

	return (
		<section>
			<h1>F1 Stables</h1>
			{error ? (
				<p>Erreur lors de la récupération des données.</p>
			) : (
				<section className="stables-container">
					{stables.map((stable) => (
						<section key={stable.constructorId}>
							<article className="stable-item">
								<img
									src={`/images/${stable.nationality.toLowerCase()}.png`}
									alt={`${stable.nationality} flag`}
									className="flag"
								/>
								{stable.name}
							</article>
						</section>
					))}
				</section>
			)}
		</section>
	);
};

export default Stables;
