import React from 'react';
import Book from '../Book/index';
import getRndInteger from '../../utils/utils';
import './styles.scss';

const buildImgUrl = () => {
    let randomImg = getRndInteger(250,300);
    let img = `https://loremflickr.com/${randomImg}/${randomImg+100}/book`;
    return img; 
}

const BookList = ({books, choose}) =>
    <div className="row">
        {   
            books.map(book => 
                <Book key={book.id} bookData={book} imgUrl={buildImgUrl()} choose={choose} />
            )
        }
    </div>;    

export default BookList;