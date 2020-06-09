/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Modals from "./modal"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = (e) => {
        if (e.target.className.indexOf("modals")>-1 || e.target.parentElement.className.indexOf("modals")>-1){
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    };

    document.addEventListener('mousedown',handleOpen,false)

    return (

  <div
    className={"modals"}
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >

      {<Modals openMod={open} />}


    <div className={"modals"} sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div
        className={"modals"}
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}

    </div>
  </div>
)}

export default ProjectCard
