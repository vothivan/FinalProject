import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { redirectRouter } from '../../utils/common';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../common/constant';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import api from '../../service/api';

function ItemWords({ title, titleNative, stars, wordsCount, linkPic, onClick, percentCompleted, id }) {
    return (
        <Link
            style={{ textDecoration: 'none', marginBottom: '17px' }} to={{ pathname: ROUTE.LIST_WORD + '/' + id }}
        >
            <Button
                className='button-word'
                style={{ borderRadius: '20px', marginLeft: '20px', display: 'block', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px' }}
            >
                <div className='button-top'>
                    <span className='button-top-top'>{title}</span>
                    <span className='button-top-bottom'>{wordsCount} words</span>
                </div >
                <div className='button-bottom'>
                    <div style={{ display: 'block' }}>
                        <progress value={percentCompleted} max="100" style={{ width: '80px' }} backGround="red" > {percentCompleted}% </progress>
                        <Rating
                            style={{ fontSize: '17px', width: '80px' }}
                            name="customized-empty"
                            defaultValue={stars}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            max={3}
                            disabled={true}
                        />
                    </div>
                    <div>
                        <img alt='' style={{ width: '50px', height: '50px', zIndex: '1' }} src={linkPic}></img>
                    </div>
                </div>
            </Button>
        </Link>

    )
}

class SeeAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vocabulary: [],
            list_vocabulary: [],
            wordSets: [],
        }
    }
    async componentDidMount() {
        const res = await api.get("/vocabulary");
        if (res.status === 200) {
            this.setState({
                vocabulary: res.data,
            })
        }
        this.listVocabulary()
    }
    listVocabulary = () => {
        console.log(this.state.vocabulary);
        const list_vocabulary = this.state.vocabulary.filter((item) => (item.id === Number(this.props.match.params.id)))
        this.setState({
            list_vocabulary: list_vocabulary[0],
            wordSets: list_vocabulary[0].wordSets,
        })
    }
    render() {
        const { list_vocabulary, wordSets } = this.state;
        return (
            <div style={{ marginLeft: '10px', marginRight: '10px'}}>
                <Button
                    className="button-return"
                    style={{ marginRight: 'auto'}}
                    onClick={() => redirectRouter(this.props, '/learn/word')}
                >
                    <ArrowBack style={{ marginRight: 'auto' }} />
                </Button>
                <p style={{fontSize: '48px', textAlign: 'center', fontWeight: 'bold'}}>{list_vocabulary.titleNative}</p>
                <div style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap' }}>
                    {wordSets.map((item) => {
                        return (
                            <ItemWords {...item}/>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default SeeAll;
