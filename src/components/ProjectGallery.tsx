import ProjectCard from "./ProjectCard";

const ProjectGallery = () => {
  return (
    <>
      <div className='grid mt-5 gap-3 sm:grid-cols-2 md:grid-cols-3'>
        <ProjectCard
          src='/projects/shark_chess_cropped.PNG'
          title='Chess Tourney Simulator'
          link='https://github.com/qin-andy/shark-chess'
        >
          Framework for organizing, evaluating, and visualizing chess bot strength in tournaments
        </ProjectCard>

        <ProjectCard
          src='/projects/rj_tox_table.PNG'
          title='Romeo and Juliet Toxicity Notebook'
          link='https://colab.research.google.com/drive/1eziq_lFXXS5dpmUyxhZmcOrmb5HUAiiN?usp=sharing'
        >
          An XML parser and line evaluator of toxicity in Shakespeare
        </ProjectCard>

        <ProjectCard
          src='/projects/ucredit_dash_old.PNG'
          title='Johns Hopkins University uCredit Docs'
          link='https://ucredit-docs.vercel.app/'
        >
          Documentation site for uCredit codebase and onboarding resources
        </ProjectCard>

        <ProjectCard
          src='/projects/santorini_3d_complex.PNG'
          title='Web Santorini'
          link='https://github.com/qin-andy/ultimate-santorini'
        >
          A multiplayer online block buiding game featuring a 2D web client and a 3D Unity client
        </ProjectCard>

        <ProjectCard
          src='/projects/svd_page.PNG'
          title='SVD Image Compress'
          link='https://github.com/qin-andy/python-web-svd-compress'
        >
          A website for singular value decomposition image compression supporting custom image requests
        </ProjectCard>

        <ProjectCard
          src='/projects/carver_hokusai_2.PNG'
          title='Discord Seam Carver'
          link='https://github.com/qin-andy/discord-seam-carver'
        >
          A content aware image scaling chat bot
        </ProjectCard>
      </div>
      <a href='https://github.com/qin-andy' target='_blank' rel='noreferrer'>
        <div className='mt-10 p-4 hover:bg-sky-100 border-2 hover:border-black rounded-lg '>
          View More on GitHub
        </div>
      </a>
    </>
  )
}

export default ProjectGallery;