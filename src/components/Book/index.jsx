import React, {Component} from 'react';
import './styles.scss';

class Book extends Component {
    render(){
        const book = this.props.bookData;
        const img = this.props.imgUrl;
        const chooseBook = this.props.choose
        return (
            <div className="col-sm-6 col-md-3">
                <div className="people">
                    <img src={img} alt=""/>
                    <div className="image_overlay">
                    </div>
                    <div className="view_details" onClick={() => chooseBook(book)}>
                        <span>{book.choose ? 'Unread' : 'Read Book'}</span>
                    </div>
                    <div className="stats">
                        <div className="stats-container">
                            <div className="people_id">{book.name}</div>
                            <div className="row">
                                <div className="people_name">{book.author}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;
