// import './main.css';
console.table(groceries)


class App extends React.Component {

    state = {
        groceries: groceries,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: true
    }

    render() {
        return(
           <div className='container' >
                <h1>React Groceries App</h1>
                <Groceries groceries={this.state.groceries} />
           </div>
        )
    }
}

class Groceries extends React.Component {
    render() {
        return(
            <div >
                {this.props.groceries.map(item => {
                    return(
                        <div className="app">
                            {item.isPurchased && <li>{item.item}</li>}
                        </div>
                    )
                })}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))