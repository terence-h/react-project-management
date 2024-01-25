import { useRef, useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import SelectedProject from "./components/SelectedProject";
import Modal from "./components/Modal";

function App() {
	const [createProjectUI, setCreateProjectUI] = useState(false);
	const [selectedProject, setSelectedProject] = useState();

	const listOfProjects = useRef([]);
	const modal = useRef();

	function OpenCreateProject() {
		if (selectedProject) {
			setSelectedProject(null);
		}
		setCreateProjectUI(true);
	}

	function CloseCreateProject() {
		setCreateProjectUI(false);
	}

	function OnCreateProject(data) {
		for (let i = 0; i < listOfProjects.current.length; i++) {
			if (listOfProjects.current[i].title === data.title) {
				return false;
			}
		}

		listOfProjects.current.push(data);
		CloseCreateProject();
	}

	function OnSelectProject(data) {
		if (createProjectUI) {
			setCreateProjectUI(false);
		}

		setSelectedProject(data);
	}

	function OnDeleteProject(data) {
		modal.current.open(data);
	}

	function OnAddTask(data, task) {
		if (!task) {
			return;
		}

		data.tasks.push(task);
		setSelectedProject({ ...data });
	}

	function OnClearTask(data, taskId) {
		data.tasks.splice(taskId, 1);
		setSelectedProject({ ...data });
	}

	return (
		<main className="h-screen flex gap-8">
			<Modal
				ref={modal}
				listOfProjects={listOfProjects}
				selectedProject={selectedProject}
				updateUI={setSelectedProject}
			>
				<h2>Are you sure you want to delete this project?</h2>
			</Modal>
			<Sidebar
				onCreateProject={OpenCreateProject}
				onSelectProject={OnSelectProject}
				ref={listOfProjects}
			/>
			{createProjectUI ? (
				<CreateProject onCancel={CloseCreateProject} onSave={OnCreateProject} />
			) : selectedProject ? (
				<SelectedProject
					projectData={selectedProject}
					onDeleteProject={OnDeleteProject}
					onAddTask={OnAddTask}
					onClearTask={OnClearTask}
				/>
			) : (
				<NoProjectSelected onCreateProject={OpenCreateProject} />
			)}
		</main>
	);
}

export default App;
