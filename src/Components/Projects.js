import { Button } from "@material-ui/core"
import React from "react"
import "./Projects.css"
import Grid from "@material-ui/core/Grid"
import Row from "./Row"

function Projects({ id }) {
   return (
      <div className="projects mt-20 mb-14" id={id}>
         <div className="header__text mb-10">
            <h1 className="text-4xl">PROJECTS</h1>
         </div>
         <Row
            img="https://i.ibb.co/ZXMRFmM/amazon.png"
            title="AMAZON CLONE"
            features={[
               "user authentication",
               "firebase",
               "stripe Payment",
               "context api",
            ]}
            link="https://optimistic-stonebraker-8c4d29.netlify.app/"
         />
         <Row
            img="https://i.ibb.co/0nSLqMR/messenger.png"
            title="REALTIME CHAT"
            features={["firebase"]}
            reverse={true}
            link="https://messenger-clone-react-f1740.web.app"
         />
         <Row
            img="https://i.ibb.co/VDPKMdS/insta.png"
            title="REALTIME CHAT"
            features={[
               "user authentication",
               "upload images",
               "upload story",
               "firebase",
            ]}
            link="https://instagram-clone-react-227e8.web.app"
         />
      </div>
   )
}

export default Projects
