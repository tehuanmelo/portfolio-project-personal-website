

const projects = document.getElementsByClassName('project-detail-container')



Array.from(projects).forEach(element => {
    element.onclick = () => {
        const projectDetails = element.querySelector('.project-details')
        console.log(projectDetails.style.display)
        if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
            projectDetails.style.display = 'block';
        } else {
            projectDetails.style.display = 'none';
        }
        }
});