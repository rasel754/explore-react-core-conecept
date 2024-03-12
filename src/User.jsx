export default function User({user}){
    const {name,email,id,phone,username,website}=user;
    return (
        <div className="box">
            <h1>id: {id}</h1>
            <h4>name : {name}</h4>
            <h5>username : {username}</h5>
            <p>Gmail : {email}</p>
            <h3>phone : {phone}</h3>
            <p>website : {website}</p>
        </div>
    )

}