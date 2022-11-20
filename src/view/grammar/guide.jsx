import { Paper, TableCell, TableContainer, Table, TableBody, TableRow } from '@material-ui/core';
// import { Table, TableBody } from 'material-ui';
import React from 'react';
import './style.css'

function toStyle(obj = {}) {
    const style = {};
    for (const [key, value] of Object.entries(obj)) {
        if (key !== 'text') {
            style['--' + key] = value;

        }
    }
    return style;
}

function Guide({ guide = {} }) {
    const { items=[], title, header } = guide;
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <h1 style={{textAlign: 'center'}}>{header}</h1>
            {
                items.map((item, index) => <GuideItem key={index} item={item} />)
            }
        </div>

    )
}

function GuideItem({ item }) {
    switch (item.type) {
        case "text":
            return (<p>
                <GuideItemContent contents={item.content} />
            </p>)

        case "table_two_columns":
            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {
                                item.content.map((content, idx) => (
                                    <TableRow key={idx} >
                                        <TableCell>
                                            <GuideItemContent contents={content.text} />
                                        </TableCell>
                                        <TableCell>
                                            <GuideItemContent contents={content.value} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                </TableContainer>
            )
        case "table_one_column":
            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {
                                item.content.map((content, idx) => (
                                    <TableRow key={idx} >
                                        <TableCell>
                                            <GuideItemContent contents={content.text} />
                                            <br />
                                            <GuideItemContent contents={content.value} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                </TableContainer>
            )
        default:
            return (
                <div>
                    {item.type}
                </div>
            )
    }

}

function GuideItemContent({ contents = [] }) {
    return (
        contents.map((content, idx) => (
            <span className={'txt_guide'} key={idx} style={toStyle(content)}>{content.text || ' '}</span>
        ))
    );
}

export default Guide;