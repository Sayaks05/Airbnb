import './Cards.scss'
export default function Card (props:any){
    let badgetext
    if (props.openSpots === 0) {
        badgetext = "SOLD OUT"
    } else if (props.location === "Online") {
        badgetext = "ONLINE"
    }

    return(
        <div className="card">
            {
                badgetext && 
                <div className="card--badge">{badgetext}</div>
            }
            <img 
                src={`../../../public/Assests/data/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../../../public/Assests/star.png" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
        // <div className="cards-div">
        //     {
        //         badgetext && <div className="card--badge">{badgetext}</div>
        //     }
        //     <img src={`../../../public/Assests/data/${props.coverImg}`} alt="data-image" className="cards-img"/>
        //     <div className="cards-stats">
        //         <img src="../../../public/Assests/star.png" alt="star-img" className="card-star"/>
        //         <span>{props.stats.rating}</span>
        //         <span className="details--1">({props.stats.reviewCount}) •</span>
        //         <span className="details--2">{props.location}</span>
        //     </div>
        //     <p className="card-title">{props.title}</p>
        //     <p className="card-price">From ${props.price}</p>
        // </div>
    )

}