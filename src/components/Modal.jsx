import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ErrorPopup(
	{ children, listOfProjects, updateUI },
	ref
) {
	const dialog = useRef();
	let selectedProject;

	useImperativeHandle(ref, () => {
		return {
			open(data) {
				selectedProject = data;
				dialog.current.showModal();
			},
		};
	});

	function deleteProject() {
		const index = listOfProjects.current.findIndex(
			(x) => x.title === selectedProject.title
		);

		listOfProjects.current.splice(index, 1);
		dialog.current.close();
		updateUI(null);
	}

	return createPortal(
		<>
			<dialog
				ref={dialog}
				className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
			>
				{children}

				<div className="flex justify-center gap-x-10 mt-10">
					<button
						className="px-4 py-2 text-xs md:text-base rounded-md bg-red-600 text-stone-100 hover:bg-red-700 hover:text-stone-100"
						onClick={() => deleteProject(selectedProject)}
					>
						Confirm
					</button>
					<button
						className="px-4 py-2 text-xs md:text-base rounded-md bg-green-600 text-stone-100 hover:bg-green-700 hover:text-stone-100"
						onClick={() => dialog.current.close()}
					>
						Cancel
					</button>
				</div>
			</dialog>
		</>,
		document.getElementById("modal-root")
	);
});

export default Modal;
