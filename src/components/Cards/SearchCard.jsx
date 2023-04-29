import nomedia from '../../assets/Images/Pages/nomedia.jpg'
import '../../assets/styles/Cards.css'

const SearchCard = (props) => {
    let image = props.image[0];
    if(props.image.length < 1) image = nomedia;
    
    return (
        <div className="search-card flex">
            <img src={image} alt='launch'/>
            <div className='search-card-content'>
                <p className="font-p fs-s o-50">{props.desc}</p>
                <h1 className="font-main fs-m m-0">{props.title.substring(0,40)}</h1>
                {props.children}
            </div>
        </div>
    )
}

export default SearchCard