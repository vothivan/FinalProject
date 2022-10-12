import React from 'react';
import './style.css';
import { Component } from 'react';
// const Data = {
//     'Du Lịch': ['Tại sân bay', 'Tại khách sạn', 'Tại nhà hàng', 'Tại bảo tàng'],
//     'Thức ăn': ['Trái cây', 'Rau củ', 'Thức ăn nhanh', 'Thức uống'],
//     'Mối quan hệ': ['Buổi đầu hẹn hò', 'Lễ cưới', 'Những món quà'],
// }
class Words extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Words</h1>
                {/* <header className='header'>
                    <span className='header-left'>Du Lich</span>
                    <button className='header-right'>Xem tat ca <ArrowForwardIosSharpIcon style={{ fontSize: '15px' }}></ArrowForwardIosSharpIcon></button>
                </header> */}
                {/* <div className='list-vocabulary'>
                {for (key in Data) {

                }}
            </div> */}
            </div>
        )
    }
}

export default Words