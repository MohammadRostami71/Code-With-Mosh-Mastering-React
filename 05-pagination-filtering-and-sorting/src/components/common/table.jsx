import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Like from "./like";

const Table = (props) => {
    const {data, sortColumn, onSort} = props
    const  columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'numberInStock'},
        {path: 'dailyRentalRate', label: 'dailyRentalRate'},
        {key: 'like', content: movie => <Like onClick={() => this.props.onLike(movie)} liked={movie.liked}/>},
        {
            key: 'delete', content: movie => (<button onClick={() => this.props.onDelete(movie)}
                                                      className="btn btn-danger btn-sm">Delete
            </button>)
        },
    ];
    return (
        <table className="table">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody data={data} columns={columns}/>
        </table>
    )
}
export default Table