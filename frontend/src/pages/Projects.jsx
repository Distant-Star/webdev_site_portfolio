import ProjectCard from "../components/ProjectCard";
import rasbello1 from "../assets/project_pictures/rasbello/rasbello1.png";
import rasbello2 from "../assets/project_pictures/rasbello/rasbello2.png";
import rasbello3 from "../assets/project_pictures/rasbello/rasbello3.png";
import sqlrewriter1 from "../assets/project_pictures/sqlrewriter/sqlrewriter1.png";
import sqlrewriter2 from "../assets/project_pictures/sqlrewriter/sqlrewriter2.png";
import gauntlet1 from "../assets/project_pictures/gauntlet/gauntlet1.png";
import gauntlet2 from "../assets/project_pictures/gauntlet/gauntlet2.png";
import gauntlet3 from "../assets/project_pictures/gauntlet/gauntlet3.png";

function Projects() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Mes projets !</h1>

      <ProjectCard
        title="SQL Rewriter"
        description="Un outil de réécriture automatisé de requêtes SQL Oracle pour assurer la compatibilité PostGre réalisé durant mon stage chez Worldline."
        githubUrl="https://github.com/tonrepo/flappy-drone"
        downloadUrl="/downloads/flappy-drone.zip"
        images={[sqlrewriter1, sqlrewriter2]}
        skills={["Python", "Expressions régulières", "SQL Oracle", "HTML", "CSS", "JavaScript"]}
      />

      <ProjectCard
        title="Rasbello"
        description="Un jeu d'Othello avec mode en ligne et commandes vocales."
        githubUrl="https://github.com/tonrepo/flappy-drone"
        downloadUrl="/downloads/flappy-drone.zip"
        images={[rasbello1, rasbello2, rasbello3]}
        skills={["Python", "C++ (pour l'ia)", "Git"]}
      />

      <ProjectCard
        title="Gauntlet of Sight"
        description="Un dispositif d'aide aux personnes malvoyantes utilisant l'ia détecter les obstacles."
        githubUrl="https://github.com/tonrepo/flappy-drone"
        downloadUrl="/downloads/flappy-drone.zip"
        images={[gauntlet1, gauntlet2, gauntlet3]}
        skills={["Python", "Blender API (pour générer un dataset synthétique", "YoloV5"]}
      />
    </div>
  );
}

export default Projects;
