import React, {Component} from 'react';
import BookList from '../../components/BookList/index';
import { connect } from 'react-redux';
import { getListBook, chooseBook } from '../../actions/actions';
// import { bindActionCreators } from 'redux';

class Home extends Component {
    constructor(props){
        super(props);
        
    }
    componentWillMount(){
        this.props.getListBook();
    }
    render(){
        
        const { books, chooseBook } = this.props;
        const viewBooks = books.filter(book => book.choose);
        return(
            <div className="books">
                <div className="books-list">
                    <div className="title">
                        <h1>List Books</h1>
                    </div>
                    <BookList books={books} choose={chooseBook}/>
                </div>
                <div className="books-view">
                    <div className="title">
                        <h1>View Books</h1>
                    </div>
                    {
                        viewBooks.length > 0 ? <BookList books={viewBooks} choose={chooseBook}/> : 'Not view any book!'
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.bookReducer.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(bookActions, dispatch)
        getListBook: () => dispatch(getListBook()),
        chooseBook: (book) =>dispatch(chooseBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);