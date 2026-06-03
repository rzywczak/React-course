import ProjectForm from './ProjectForm';
import ProjectDetails from './ProjectDetails';

const MainContent = ({ selectedProject, isAddedNewProject, ...props }) => {
    const { projects } = props;
    const projectCount = projects.length;

    const showAddFirstProjectMessage = projectCount === 0 && !isAddedNewProject;
    const showSelectProjectMessage = projectCount > 0 && !selectedProject && !isAddedNewProject;
    const showProjectForm = isAddedNewProject;
    const showProjectDetails = projectCount > 0 && selectedProject;

    return (
        <section className="flex-1 px-5 py-8 md:px-10 lg:px-14">
            {showAddFirstProjectMessage && (
                <div className="flex min-h-[60vh] max-w-3xl flex-col justify-center rounded-lg border border-dashed border-zinc-300 bg-white/70 p-8 text-center shadow-sm">
                    <p className="text-lg font-semibold text-zinc-900">Add first project!</p>
                </div>
            )}
            {showSelectProjectMessage && (
                <div className="flex min-h-[60vh] max-w-3xl flex-col justify-center rounded-lg border border-dashed border-zinc-300 bg-white/70 p-8 text-center shadow-sm">
                    <p className="text-lg font-semibold text-zinc-900">Select project!</p>
                </div>
            )}
            {showProjectForm && <ProjectForm {...props} />}
            {showProjectDetails && <ProjectDetails selectedProject={selectedProject} {...props} />}
        </section>
    );
};

export default MainContent;
