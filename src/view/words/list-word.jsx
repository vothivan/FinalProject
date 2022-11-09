import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { Component } from "react";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { redirectRouter } from "../../utils/common";
import api from "../../service/api";
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
  constructor(props) {
    super(props);
    this.state = {
      list_vocabulary: [],
    }
  }
  componentDidMount() {
    api.get("/vocabulary/" + this.props.match.params.id).then((res) => {
      if (res && res.status === 200) {
        this.setState({
          list_vocabulary: res.data,
        })
      }
    })
  }

  playAudio = (urlAudio) => {
    const audio = new Audio(urlAudio);
    audio.play();
  }

  listWordItem = (word, translate, audio) => {
    return (
      <div>
        <div className="item-left">
          <div className="item-left-1">
            <Button onClick={() => this.playAudio(audio)} >
              <VolumeUpIcon style={{ color: 'rgb(70, 177, 255)' }} />
            </Button>
          </div>
          <div className="item-left-2">
            <span>
              {word}
            </span>
            <span>
              {translate}
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
        <Button
          className="button-return"
          style={{ marginRight: 'auto', borderRadius: '50%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px' }}
          onClick={() => redirectRouter(this.props, '/learn/word')}
        >
          <ArrowBack style={{ marginRight: 'auto' }} />
        </Button>
        <div className="body">
          <h4>Phổ biến</h4>
          <h1>Từ ngữ cho những chuyên gia</h1>
          {this.state.list_vocabulary.map((item) => {
            return this.listWordItem(item.word, item.translate, item.audio)
          })}
        </div>
      </div>
    )
  }
}
export default listWord;