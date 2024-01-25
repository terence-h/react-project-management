export default function Input({ label, textarea, onChange }) {
	return (
		<p>
			<label className="text-sm font-bold uppercase text-stone-500">
				{label}
			</label>
			{textarea ? (
				<textarea
					className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 max-h-96"
					onChange={(event) => onChange(event, label)}
				/>
			) : (
				<input
					type={label}
					className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
					onChange={(event) => onChange(event, label)}
				/>
			)}
		</p>
	);
}
