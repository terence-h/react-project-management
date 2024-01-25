import { forwardRef, useState } from "react";

const CreateProject = forwardRef(function CreateProject(
	{ onCancel, onSave },
	ref
) {
	const [savable, setSavable] = useState(false);

	const inputStyle =
		"w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
	const labelStyle = "text-sm font-bold uppercase text-stone-500";

	function OnInputChange(event, id) {
		ref.current[id] = event.target.value.trim();

		setSavable(
			ref.current.title && ref.current.description && ref.current.date
		);
	}

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
					<button
						className={`px-4 py-2 text-xs md:text-base rounded-md text-end bg-stone-700 ${
							savable
								? "text-stone-200 hover:bg-stone-600 hover:text-stone-200"
								: "text-stone-400"
						}`}
						onClick={onSave}
						disabled={!savable}
					>
						Save
					</button>
				</div>
				<p className="flex flex-col gap-1 my-4">
					<label className={labelStyle}>title</label>
					<input
						type="text"
						className={inputStyle}
						onChange={(event) => OnInputChange(event, "title")}
					/>
					<label className={labelStyle}>description</label>
					<textarea
						className={inputStyle + " max-h-96"}
						onChange={(event) => OnInputChange(event, "description")}
					/>
					<label className={labelStyle}>date</label>
					<input
						type="date"
						className={inputStyle}
						onChange={(event) => OnInputChange(event, "date")}
					/>
				</p>
			</div>
		</div>
	);
});

export default CreateProject;
