
const Profile = ({ name, age, bio, location, profilePicture }) => {
    return (
        <div>
            <div style={{
                backgroundColor: "lightgray",
                height: "500px",
                width: "300px",
                margin: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:"15px"
            }}>
                <img src={profilePicture ? profilePicture : "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid"} alt="" style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid black"

                }} />
                <h1>{name ? name : "User"}</h1>
                <div style={{ padding: "10px", borderRadius: "10px", width: "200px" }}>
                    <p>Bio: {bio ? bio : ""}</p>
                    <p>{age ? `Age: ${age}` : ""}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" ,width:"200px"}}>
                <img src="./public/images/pin.png" alt="" width="30px"/>
                    <h4> {location ? location : "Earth"}</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile;