export default function CreateProject({ onCancel }) {
	const inputStyle =
		"w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
	const labelStyle = "text-sm font-bold uppercase text-stone-500";

	return (
		<div className="mt-24 w-3/4">
			<div className="w-3/4 mx-auto">
				<div className="text-end">
					<button
						className="px-4 py-2 text-xs md:text-base text-end text-stone-700"
						onClick={onCancel}
					>
						Cancel
					</button>
					<button className="px-4 py-2 text-xs md:text-base rounded-md text-end bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
						Save
					</button>
				</div>
				<p className="flex flex-col gap-1 my-4">
					<label className={labelStyle}>title</label>
					<input type="text" className={inputStyle}></input>
					<label className={labelStyle}>description</label>
					<textarea className={inputStyle + " max-h-96"}></textarea>
					<label className={labelStyle}>date</label>
					<input type="date" className={inputStyle}></input>
				</p>
			</div>
		</div>
	);
}
