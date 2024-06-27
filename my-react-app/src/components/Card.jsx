import img_my_profile from "../images/my_profile.jpg";
const Card = () => {
  return (
    <div className="card">
        <img src={img_my_profile} alt="my profile" className="card-img"></img>
        <h2>David Chen Benshabbat</h2>
        <p>i teaching how to make card component</p>
    </div>
  )
}

export default Card