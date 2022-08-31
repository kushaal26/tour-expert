import React from 'react';
import './FeatureModal.css';
import { Modal } from 'antd';
import {Video} from "../Video"



export const FeatureModal = (props) => {
    const {isModalVisible, handleCancel, handleOk, product } = props
    
    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {product && <> <p>{ product.content} </p>
        <Video url={product.videoSource}></Video> </>}
      </Modal>
        
    )
}