import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { Component } from "react";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { redirectRouter } from "../../utils/common";
import api from "../../service/api";

class listWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      words: [],
    }
  }
  async componentDidMount() {

    const res = await api.get("/vocabulary/" + this.props.match.params.id);
    if (res.status === 200) {
      this.setState({
        ...res.data,
      })
    }
  }

  render() {
    return (
      <div className="total">
        <Button
          className="button-return"
          style={{ marginRight: 'auto' }}
          onClick={() => redirectRouter(this.props, '/learn/word')}
        >
          <ArrowBack style={{ marginRight: 'auto' }} />
        </Button>
        <div style={{ width: '100%' }}>
          <h2>{this.state.info.topicNative}</h2>
          <h1>{this.state.info.titleNative}</h1>
          <span className="level">Beginner</span>
          {
            this.state.words.filter((itemWord) => itemWord.level === 'EASY')
              .map((item, key) => <ListWordItem key={key} {...item} />)
          }
          <span className="level">Intermediate</span>
          {
            this.state.words.filter((itemWord) => itemWord.level === 'MEDIUM')
              .map((item, key) => <ListWordItem key={key} {...item} />)
          }
          <span className="level">Advanced</span>
          {
            this.state.words.filter((itemWord) => itemWord.level === 'HARD')
              .map((item, key) => <ListWordItem key={key} {...item} />)
          }
        </div>
        <Button className='button-child' style={{ width: '100%', alignItems: 'end', borderRadius: '20px' }}>Learn</Button>
      </div>
    )
  }
}
export default listWord;

function ListWordItem({ word, translate, audio }) {

  const playAudio = (urlAudio) => {
    new Audio(urlAudio).play();
  }

  return (
    <div>
      <div className="item-left">
        <div className="item-left-1">
          <Button onClick={() => playAudio(audio)} >
            <VolumeUpIcon style={{ color: 'rgb(70, 177, 255)' }} />
          </Button>
        </div>
        <div className="item-left-2">
          <span>
            {word}
          </span>
          <span className="translate">
            {translate}
          </span>
        </div>
      </div>
    </div>
  );
}