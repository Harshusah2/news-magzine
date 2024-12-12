import image from '../assets/news.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
       <img src={src?src:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{title?title.slice(0,50): "No Title"}</h5>
         <p className="card-text">{description?description.slice(0,90):"News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events"}</p>
         <a href={url} className="btn btn-primary">Read More</a>
       </div>
    </div>
  )
}

export default NewsItem
