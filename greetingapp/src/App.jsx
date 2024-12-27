import Greeting from "./Greeting";
import Profile from "./UserProfileCard";

const App = () => {
    let users = [
        {
            profilePicture: "./public/images/1522867c-7f1a-4a3f-8a1e-c7d8a45b0bdc.jfif",
            name: "Deep Gohil",
            age: "18",
            bio: "Revenge Is Always Batter Than Regret",
            location: "Surat, Gujarat"
        },
        {
            profilePicture: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/0112f9a6-0641-4f55-b83a-af5ac489016c/2e2b0f5f-637d-4ee9-9fe3-d55d4761cc6b.png",
            name: "John Doe",
            age: "25",
            bio: "Enjoying life one day at a time.",
            location: "Mumbai, Maharashtra",
        },
        {
            profilePicture: "https://rukminim2.flixcart.com/image/850/1000/l2tcfbk0/poster/0/x/r/small-poster-cat-with-glasses-sla189-wall-poster-13x19-inches-original-image2rxzsgun3wc.jpeg?q=90&crop=false",
            name: "Jane Smith",
            age: "22",
            bio: "Traveler, Photographer, Dreamer.",
            location: "Delhi, India",
        },
        {
            profilePicture: "https://thumbs.dreamstime.com/b/cute-grey-cat-glasses-wood-background-178508562.jpg",
            name: "Rahul Patel",
            age: "30",
            bio: "Tech enthusiast and gamer.",
            location: "Ahmedabad, Gujarat",
        },
        {
            profilePicture: "https://thumbs.dreamstime.com/b/funny-tabby-cat-nerd-glasses-put-out-his-tongue-isolated-white-background-133285564.jpg",
            name: "Anita Roy",
            age: "27",
            bio: "Writer and coffee lover.",
            location: "Bangalore, Karnataka",
        },
        {
            profilePicture: "https://64.media.tumblr.com/559a7da217e803c0e4c84e7031314dd7/e1b0eb7a0f222b04-2c/s540x810/57cdad7a0ef5aef2648270abd9556e9378ffe4ae.jpg",
            name: "Aryan Sharma",
            age: "21",
            bio: "Fitness freak and foodie.",
            location: "Jaipur, Rajasthan",
        },
    ]
    return (
        <div>
            {users.map((user) => (
                <Profile
                    profilePicture={user.profilePicture}
                    name={user.name}
                    age={user.age}
                    bio={user.bio}
                    location={user.location}
                />
            ))}
        </div>
    );
}

export default App;