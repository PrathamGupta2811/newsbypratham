import image from '../assets/WhatsAppImage.jpg'

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src?src:image} style={{ height: "200px", width: "320px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Apologies, no new updates available at the moment. Please check back soon for the latest news.Thank you for your understanding."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
