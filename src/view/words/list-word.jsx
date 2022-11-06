import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { Component } from "react";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
const list_Word = {
  'Juxtaposition': 'Tương quan',
  'Mesmerizing': 'Mê hoặc',
  'Lullaby': 'Lời ru',
  'Pristine': 'Tinh khôi',
  'Confluence': 'Tụ họp',
  'Tranquility': 'Sự thanh bình',
  'Euphoria': 'Sự khoan khoái',
  'Aurora': 'Cực quang',
  'Serendipity': 'Tình cờ gặp may',
  'Taciturn': 'Lâm li',
}

class listWord extends Component {
  listWordItem = () => {
    return (
      <div>
        <div className="item-left">
          <div className="item-left-1">
            <VolumeUpIcon style={{color: 'rgb(70, 177, 255)'}}/>
          </div>
          <div className="item-left-2">
            <span>
              Juxtaposition
            </span>
            <span>
              Tương quan
            </span>
          </div>
        </div>
        <div className="item-right">

        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="total">
        <Button className="button-return" style={{ marginRight: 'auto', borderRadius: '50%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px' }}>
          <ArrowBack style={{ marginRight: 'auto' }} />
        </Button>
        <div className="body">
          <h4>Phổ biến</h4>
          <h1>Từ ngữ cho những chuyên gia</h1>
          { for (let key in list_Word) {
                return {this.listWordItem()}
            }
          }
          
        </div>
      </div>
    )
  }
}
export default listWord;