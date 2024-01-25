import { useState } from "react";
import Input from "./Input";

export default function CreateProject({ onCancel, onSave }) {
	const [savable, setSavable] = useState(false);
	const [inputData, setInputData] = useState({
		title: "",
		description: "",
		date: "",
		tasks: [],
	});

	function OnInputChange(event, id) {
		inputData[id] = event.target.value.trim();

		setInputData(inputData);
		setSavable(inputData.title && inputData.description && inputData.date);
	}

	return (
		<div className="mt-24 w-3/4">
			<div className="w-3/4 mx-auto">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							className="px-4 py-2 text-xs md:text-base text-end text-stone-700 hover:text-red-700"
							onClick={onCancel}
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							className={`px-4 py-2 text-xs md:text-base rounded-md text-end bg-stone-700 ${
								savable
									? "text-stone-200 hover:bg-stone-600 hover:text-stone-200"
									: "text-stone-400"
							}`}
							onClick={() => onSave(inputData)}
							disabled={!savable}
						>
							Save
						</button>
					</li>
				</menu>
				<Input label="title" onChange={OnInputChange} />
				<Input label="description" textarea onChange={OnInputChange} />
				<Input label="date" onChange={OnInputChange} />
			</div>
		</div>
	);
}
