import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";

const App = () => {
    return (
        <>
            <h1>My Favourite Albums</h1>
            <CardList>
                <Card
                    albumTitle="The Beatles White Album"
                    bandName="The Beatles"
                    albumRating={5}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/TheBeatles68LP.jpg/220px-TheBeatles68LP.jpg"
                />
                <Card
                    albumTitle="Nevermind"
                    bandName="Nirvana"
                    albumRating={4}
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/NirvanaNevermindalbumcover.jpg/220px-NirvanaNevermindalbumcover.jpg"
                />
                <Card
                    albumTitle="Pet Sounds"
                    bandName="The Beach Boys"
                    albumRating={3}
                />
                <Card
                    albumTitle="Thriller"
                    bandName="Michael Jackson"
                    albumRating={5}
                />
                <Card
                    albumTitle="The Joshua Tree"
                    bandName="U2"
                    albumRating={4}
                />
                <Card
                    albumTitle="Blonde on Blonde"
                    bandName="Bob Dylan"
                    albumRating={5}
                />
                <Card
                    albumTitle="Born to Run"
                    bandName="Bruce Springsteen"
                    albumRating={2}
                />
                <Card
                    albumTitle="London Calling"
                    bandName="The Clash"
                    albumRating={5}
                />
            </CardList>
        </>
    );
};

export default App;
