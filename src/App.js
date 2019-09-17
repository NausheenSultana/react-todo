import React from 'react';
import ToDoList from './ToDoList.js';
import ToDoItems from './ToDoItems.js';


class App extends React.Component{
    constructor() {
        super()
        this.inputElement =React.createRef();
        this.state = {
          items: [],
          currentItem: {text:'', key:''},
        }
      }
      
      handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem,
        })
      }
    

    addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            currentItem: { text: '', key: '' },
          })
        }
      }

      deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
          return item.key !== key
        })
        this.setState({
          items: filteredItems,
        })
      }

  
    render(){
       // inputElement =React.createRef();
        return (
            <div className="App">
                <ToDoList
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                />
                <ToDoItems entries={this.state.items} deleteItem={this.deleteItem}/>
            </div>
        );
    }
}

export default App;
