console.table(groceries)


class App extends React.Component {

    state = {
        groceries: groceries,
    }

    render() {
        return(
           <div>
                <h1>React Groceries App</h1>
                <Groceries groceries={this.state.groceries} />
           </div>
        )
    }
}

// class Groceries extends React.Component {
//     render() {
//         return(
//             <div>
//                     <h3>{this.state.groceries}</h3>
//             </div>
//         )
//     }
// }


ReactDOM.render(<App />, document.getElementById('root'))