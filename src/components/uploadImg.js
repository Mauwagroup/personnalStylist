import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';


export default function UploadImg(props) {
    const [images, setImages] = useState([]);
    const maxNumber = props.array ? 10 : 1;

    useEffect(() => {
        if (props.array) {
            if (props.img) {
                const list = [];
                for (let i = 0; i < props.img.length; i++) {
                    list.push({ data_url: props.img[i] })
                }

                setImages(list)
            }
        }
    }, []);

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        let imgs = [];
        if (props.array) {
            for (let i = 0; i < imageList.length; i++) {
                imgs.push(imageList[i].data_url)
            }
        } else {
            imgs = imageList[0]?.data_url || "";
        }

        props.setImg({
            target: {
                name: "img",
                value: imgs
            }
        })
    };

    function showButton(id, idImg) {
        let x = document.getElementById(id);
        let img = document.getElementById(idImg);

        if (x.style.display === "none") {
            x.style.display = "block"
            img.classList.add("filter-img");
        } else {
            x.style.display = "none"
            img.classList.remove("filter-img");
        }
    }

    return (<>
        <div className="upload-container" style={{textAlign: "center"}}>
            {!props.array && <><img style={{ width: '50%' }} src={images[0]?.data_url || props.img} alt="..." /><br /><br /></>}
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {props.array && <div className="row">
                            {imageList.map((image, index) => (
                                <div className="col-md-4" style={{ marginBottom: 30 }} onMouseOver={() => showButton(index, (index + "img"))} onMouseOut={() => showButton(index, (index + "img"))} >
                                    <div key={index} style={{ position: "relative", width: "100%", height: "100%" }}>
                                        <img id={index + "img"} src={image['data_url']} style={{ width: "100%" }} />
                                        <div className="centerItem" style={{ position: "absolute", top: "0", left: "0" }}>
                                            <button id={index} className="btn btn-outline-danger btn-remove" style={{ display: 'none', transition: "0.7s" }} onClick={() => onImageRemove(index)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        {maxNumber > images.length && <button
                            className="btn btn-outline-primary"
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Ajouter une photo
                        </button>}
                        <br />
                        <br />
                        <button className="btn btn-outline-primary" onClick={onImageRemoveAll}>{props.array ? "Supprimer toutes les photos" : "Supprimer la photo"}</button> <br /> <br /> <br />
                    </div>
                )}
            </ImageUploading>
        </div>
    </>
    );
}