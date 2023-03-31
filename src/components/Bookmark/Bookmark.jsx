
import './Bookmark.css'

const Bookmark = ({ bookmarks }) => {
    return (
        <div className='bookmark-items'>
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            {bookmarks.map((bookmark, index) => (
                <h2 key={index}>{bookmark}</h2>
            ))}
        </div>
    );
};

export default Bookmark;









