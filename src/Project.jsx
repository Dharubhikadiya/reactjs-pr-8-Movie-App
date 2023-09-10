import { useEffect, useState } from "react";

const Project = () => {

    const record = [
        {
            id: '110',
            image: './image/asur.avif',
            name: 'asur',
            catagory: 'webseries',
        },
        {
            id: '120',
            name: 'day dreamer',
            image: './image/daydreamer.jpg',
            catagory: 'webseries'
        },
        {
            id: '130',
            name: 'hiropanti',
            image: './image/hiropanti.jpg',
            catagory: 'bollywood'
        },
        {
            id: '140',
            name: 'another earth',
            image: './image/another earth.jpeg',
            catagory: 'hollywood'
        },
        {
            id: '150',
            name: 'bhola',
            image: './image/bholaa.jpg',
            catagory: 'bollywood'
        },
        {
            id: '160',
            name: 'bland number',
            image: './image/bland number.jpeg',
            catagory: 'hollywood'
        },
        {
            id: '170',
            name: 'bro',
            image: './image/bro.jpeg',
            catagory: 'tollywood'
        },
        {
            id: '180',
            name: 'custody',
            image: './image/custody.jpeg',
            catagory: 'tollywood'
        },
        {
            id: '190',
            name: 'dangal',
            image: './image/dangal.jpeg',
            catagory: 'bollywood'
        },
        {
            id: '200',
            name: 'enders game',
            image: './image/enders game.jpg',
            catagory: 'hollywood'
        },
        {
            id: '210',
            name: 'gadar',
            image: './image/gadar.jpeg',
            catagory: 'bollywood'
        },
        {
            id: '220',
            name: 'hanuman',
            image: './image/hanuman.jpeg',
            catagory: 'tollywood'
        },
        {
            id: '230',
            name: 'harrypotar',
            image: './image/harrypotar.jpg',
            catagory: 'webseries'
        },
        {
            id: '240',
            name: 'hulk',
            image: './image/hulk.webp',
            catagory: 'hollywood'
        },
        {
            id: '250',
            name: 'jailer',
            image: './image/jailer.jpeg',
            catagory: 'bollywood'
        },
        {
            id: '260',
            name: 'javan',
            image: './image/javan.jpeg',
            catagory: 'bollywood'
        },
        {
            id: '270',
            name: 'joker',
            image: './image/joker.jpeg',
            catagory: 'hollywood'
        },
        {
            id: '280',
            name: 'kesari',
            image: './image/kesari.jpg',
            catagory: 'bollywood'
        },
        {
            id: '290',
            name: 'live telecast',
            image: './image/livetelecast.jpeg',
            catagory: 'webseries'
        },
        {
            id: '300',
            name: 'mirzapur',
            image: './image/mirzapur.jpg',
            catagory: 'webseries'
        },
        {
            id: '310',
            name: 'money heiest',
            image: './image/money heist.jpeg',
            catagory: 'webseries'
        },
        {
            id: '320',
            name: 'morbius',
            image: './image/morbius.jpeg',
            catagory: 'hollywood'
        },
        {
            id: '330',
            name: 'ps-2',
            image: './image/ps-2.jpeg',
            catagory: 'tollywood'
        },
        {
            id: '340',
            name: 'rise guardians',
            image: './image/rise.jpeg',
            catagory: 'hollywood'
        },
        {
            id: '350',
            name: 'satya prem ki katha',
            image: './image/satyapremkikatha.jpeg',
            catagory: 'bollywood'
        },
        {
            id: '360',
            name: 'scame1992',
            image: './image/scame1992.jpeg',
            catagory: 'webseries'
        },
        {
            id: '370',
            name: 'vincanzo',
            image: './image/vincanzo.jpeg',
            catagory: 'webseries'
        },
        {
            id: '380',
            name: 'tarak mehata ka ulta chashma',
            image: './image/jethalal.jpeg',
            catagory: 'tvserial'
        },
        {
            id: '390',
            name: 'anupama',
            image: './image/anupama.jpeg',
            catagory: 'tvserial'
        },
        {
            id: '400',
            name: 'shiv shakti',
            image: './image/shivshakti.jpeg',
            catagory: 'tvserial'
        },
        {
            id: '410',
            name: 'barasate mosam pyar ke',
            image: './image/barasatemosam.jpeg',
            catagory: 'tvserial'
        },
        {
            id: '420',
            name: 'vanshaj',
            image: './image/vanshaj.jpeg',
            catagory: 'tvserial'
        },
        {
            id: '430',
            name: 'aek duje ke vaste',
            image: './image/aekdujekevaste.jpeg',
            catagory: 'tvserial'
        },
        {
            id: '440',
            name: 'ye rishta kya kehalata he',
            image: './image/yerishtakyakehalatahe.jpeg',
            catagory: 'tvserial',
        },
        {
            id: '450',
            name: 'collage remoance',
            image: './image/collageremoance.jpeg',
            catagory: 'tvserial',
        },
        {
            id: '460',
            name: 'sath nibhana sathiya',
            image: './image/sathiya.jpeg',
            catagory: 'tvserial',
        },
        {
            id: '470',
            name: 'pushpa',
            image: './image/pushpa.jpeg',
            catagory: 'tollywood',
        },
        {
            id: '480',
            name: 'rrr',
            image: './image/rrr.jpeg',
            catagory: 'tollywood',
        },
        {
            id: '490',
            name: 'time story',
            image: './image/time story.jpg',
            catagory: 'tollywood',
        },
        {
            id: '500',
            name: 'bahubali',
            image: './image/bahubali.jpg',
            catagory: 'tollywood',
        },
        {
            id: '510',
            name: 'sitaraman',
            image: './image/sitaraman.jpeg',
            catagory: 'tollywood',
        },
        {
            id: '520',
            name: 'bajirav mastani',
            image: './image/bajirav mastani.jpeg',
            catagory: 'bollywood',
        },
        {
            id: '530',
            name: 'radhe',
            image: './image/radhe.jpeg',
            catagory: 'bollywood',
        },
        {
            id: '540',
            name: 'kgf',
            image: './image/kgf.jpg',
            catagory: 'bollywood',
        },
        {
            id: '550',
            name: 'chhapak',
            image: './image/chhapak.jpg',
            catagory: 'bollywood',
        },
        {
            id: '560',
            name: '3 aekka',
            image: './image/3aekka.jpg',
            catagory: 'gujarati',
        },
        {
            id: '570',
            name: 'bu-shirt te-shirt',
            image: './image/bushirtteshirt.jpg',
            catagory: 'gujarati',
        },
        {
            id: '580',
            name: 'nadidosh',
            image: './image/nadidodh.jpg',
            catagory: 'gujarati',
        },
        {
            id: '590',
            name: 'vash',
            image: './image/vash.jpg',
            catagory: 'gujarati',
        },
        {
            id: '600',
            name: 'fakt mahilao mate',
            image: './image/faktmahilaomate.jpg',
            catagory: 'gujarati',
        },
        {
            id: '610',
            name: 'om mangalam singalam',
            image: './image/ommangalamsingalam.jpg',
            catagory: 'gujarati',
        },
        {
            id: '620',
            name: 'kachh express',
            image: './image/kachhexpress.jpg',
            catagory: 'gujarati',
        },
        {
            id: '630',
            name: 'chal jivi laiae',
            image: './image/chaljivilaiae.jpg',
            catagory: 'gujarati',
        },
        {
            id: '640',
            name: 'shubh yatra',
            image: './image/shubhyatra.jpg',
            catagory: 'gujarati',
        },
        {
            id: '650',
            name: 'hellaro',
            image: './image/helaro.jpg',
            catagory: 'gujarati',
        },
        {
            id: '660',
            name: 'squid game',
            image: './image/squid game.jpeg',
            catagory: 'webseries',
        },
        {
            id: '670',
            name: 'avtar',
            image: './image/avatar.jpeg',
            catagory: 'hollywood',
        },
        {
            id: '680',
            name: 'dark tower',
            image: './image/darktower.jpeg',
            catagory: 'hollywood',
        },
        {
            id: '690',
            name: 'gol keri',
            image: './image/golkeri.jpeg',
            catagory: 'gujarati',
        },
        {
            id: '700',
            name: 'gujjubhai the greate',
            image: './image/gujjubhai.jpg',
            catagory: 'gujarati',
        },
    ];

    let all = localStorage.getItem('movie') ? JSON.parse(localStorage.getItem('movie')) : [];
    const [username, setUsername] = useState(null);
    const [search, setSearch] = useState("");
    const [filterMovies,setfilteredMovies] = useState([]);

    const btn = ((category) => {
        setUsername(category);
    })

    const menu = username
        ? record.filter(item => item.catagory === username)
        : record;

    const filteredMovies = menu.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="App-header">
                <div className="container">
                    <header className="d-flex">
                        <div className="col-3 p-3 bd-highlight">
                            <div className="logo d-flex align-baseline">
                                <img src="/image/logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col-9 p-4 d-flex flex-row-reverse">
                            <input type="text" placeholder="search for movie" onChange={(e) => setSearch(e.target.value)} value={search} />
                        </div>
                    </header>
                    <div className="sliderbar d-flex">
                        <div className="col-3">
                            <div className="slider">
                                <ul className="p-4  align-start">
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn('bollywood')} className="d-flex rounded">Bollywood</li>
                                    </a>
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn('hollywood')} className="d-flex rounded">Hollywood</li>
                                    </a>
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn('tollywood')} className="d-flex rounded">Tollywood</li>
                                    </a>
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn('gujarati')} className="d-flex rounded">Gujarati</li>
                                    </a>
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn('webseries')} className="d-flex rounded">Web Series</li>
                                    </a>
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn('tvserial')} className="d-flex rounded">TV Serial</li>
                                    </a>
                                    <a href="#" className="text-light">
                                        <li onClick={() => btn()} className="d-flex rounded">All</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        {
                            <>
                                <div className="photos mt-7 col-9 d-flex flex-wrap justify-content-between">

                                {filteredMovies.map((val) => (
                                <div className="card d-flex justify-content-between" key={val.image}>
                                    <img src={val.image} alt="" />
                                    <div className="card-body invisible">
                                        <h5 className="text-light">{val.name}</h5>
                                    </div>
                                </div>
                            ))}

                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;