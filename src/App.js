import React,{PureComponent} from "react";
import Header from "./Files/Header";
import SearchInput from "./Files/SearchInput";
import EmojiResults from "./Files/EmojiResults";
import filterEmoji from "./Files/filterEmoji";

export default class App extends PureComponent{
  constructor(props){
    super(props);
    this.state ={
      filterEmoji :filterEmoji("",20)
    };
  }

  handleSearchChange =event =>{
    this.setState({
      filterEmoji:filterEmoji(event.target.value,20)
    });
  };
  render(){
    return(
      <div>
        <Header/>
        <SearchInput textChange ={this.handleSearchChange}/>
        <EmojiResults emojiData ={this.state.filterEmoji}/>
      </div>
    );
  }

}
