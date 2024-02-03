import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank">
      <button className="proj-visit">
      <div className="proj-imgbx">
        <img src={imgUrl} />
          
        <div className="proj-txtx">
         <h4>{title}</h4>
          <span>{description}</span>
          <br/>
        </div>
      </div>
          </button>
          </a>
    </Col>
  )
}
