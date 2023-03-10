import projectInfo from "../component/ProjectInfo";
import ProjectGallery from "../component/ProjectGallery";
import { useEffect, useState } from "../lib";

const DetailCategoryPage = ({ id }) => {
    const [category, setCategory] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/categoryProjects/${id}?_embed=projects`)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return `
       
            <div>
              
            </div>
            <div class="projectInfo">
                ${
                    category.projects
                        ? category.projects.map(
                              (item) => `
                    <a href="/project/${item.id}">p2 ${item.name}</a>
                `
                          )
                        : ""
                }
            </div>
        `;
};
export default DetailCategoryPage;
