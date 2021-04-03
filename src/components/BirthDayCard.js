export function BirthdayCard ({imgUrl, name,age,id,callBack}){
    return (
        <section className="Exercise1-birthday-card">
            <div className="Exercise1-img-container">
                <img src={imgUrl} alt={`${name} display profile pic`}></img>
            </div>
            <div className="Exercise1-celebrant-details">
                <h4>{name}</h4>
                <p>{age} years</p>
                <button className="Exercise1-btn Exercise1-card-btn" onClick={()=> callBack(id)}>Send Message</button>
            </div>
        </section>
    )
}