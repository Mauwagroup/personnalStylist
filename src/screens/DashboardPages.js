import React, { useState, useEffect } from "react";
import { UploadImg, DashboadCard } from "../components"
import { COLORS } from "../constants"
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookIcon from '@mui/icons-material/Book';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
const axios = require('axios').default;

export default function DashboardPages(props) {

    const [subScreen, setSubScreen] = useState(0)
    const [subSubScreen, setSubSubScreen] = useState(() => null)
    const [img, setImg] = useState("")
    const [previous, setPrevious] = useState(() => null)
    const [values, setValues] = useState({})
    const [data, setData] = useState([])
    const [oldData, setOldData] = useState([])
    const [index, setIndex] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const [page, setPage] = useState("")
    const [key, setKey] = useState("")

    useEffect(() => {

        if (subScreen === 0) { // Home Page
            setPage("home")
            setOldData(props.data?.home ? props.data.home : {});
        } else if (subScreen === 1) { // About Me Page
            setPage("about")
            setOldData(props.data?.about ? props.data.about : {})
        } else if (subScreen === 2) { // Style Services Page
            setPage("services")
            setOldData(props.data?.services ? props.data.services : {})
        } else if (subScreen === 3) { // Before And After Page
            setPage("bNa")
            setOldData(props.data?.bNa ? props.data.bNa : [])
        } else if (subScreen === 4) { // Style Videos Page
            setPage("videos")
        }

    }, [subScreen, props.data])


    function handleChange(event, isCombobox) {
        var idx = isCombobox ? event.nativeEvent.target.selectedIndex : null;

        setValues(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
                ...(isCombobox ? { subtitle: event.nativeEvent.target[idx].text } : {})
            }
        })
    }

    function changeSubScreen(e, s) {
        e.preventDefault();
        if (s === 3) { // Before And After Page
            setData(props.data?.bNa || [])
        } else if (s === 4) { // Style Videos Page
            setData(props.data?.videos || [])
            console.log(props.data?.videos)
        }

        setSubScreen(s)
    }

    function Title(name, id, d, k) {
        return <>
            <Link to="#" onClick={e => {
                e.preventDefault();
                setData(d)
                setKey(k)
                setSubSubScreen((prev) => {
                    setPrevious(prev)
                    return id
                })
            }} data-bs-target="#exampleModal" data-bs-toggle="modal" style={{ justifyContent: "space-between" }} className={"dashboad-link nav-link flexDiv" + (subSubScreen === id ? "  active-link" : "")}>{name} <EditIcon /> </Link>
        </>
    }

    function saveAll() {

        let d = { ...oldData, [key]: data }
        setOldData(prev => {
            return { ...prev, [key]: data }
        })

        props.saveAll(d, page);
    }

    function saveAll2() {

        props.saveAll(data, page);
    }

    function Carousel(title, showCombobox) {

        function deleteItem(idx) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const newData = data.filter((item, index) => index !== idx)
                        setData(newData)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            let newData = [];

            if (index !== null) {
                for (let i = 0; i < data.length; i++) {
                    if (i === index) {
                        newData.push(values)
                    } else
                        newData.push(data[i]);
                }

                setData(newData)
            } else {
                setData(prev => {
                    return [
                        ...prev,
                        values
                    ]
                })
            }

            setShowEdit(false)
        }

        document.getElementById("exampleModalLabel").innerText = title

        if (!showEdit) {
            return <div style={{ width: "100%" }}>
                <h3 style={{ color: COLORS.white }}>Results</h3>
                <div className="row">
                    {!data || data.length < 1 ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> :
                        data.map((item, idx) => {
                            return <div className="col-sm-6" key={idx}>
                                {DashboadCard({ ...item, index: idx }, setImg, setShowEdit, setIndex, setValues, deleteItem)}
                            </div>
                        })}
                </div>
                <br />
                <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                    <button type="button" onClick={e => {
                        e.preventDefault();
                        setSubSubScreen(null)
                        setShowEdit(false)
                    }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" onClick={() => {
                        setValues({})
                        setIndex(null)
                        setShowEdit(true);
                    }} className="btn btn-primary">Add</button>
                    <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
                </div>
            </div>
        }

        return <div style={{ width: '100%', textAlign: 'center' }}>
            <br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="title" placeholder="Title" onChange={e => handleChange(e)} value={values?.title} /><br />
            {!showCombobox && <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="subtitle" placeholder="Sub Title" onChange={e => handleChange(e)} value={values?.subtitle} />}

            {/* Combobox for Dress Your Best */}
            {showCombobox && <>
                <h5 style={{ color: COLORS.white }}>Where should I redirect the user?</h5>
                <select className="animatedInput" onChange={e => handleChange(e, true)} style={{ padding: "8px 10px" }} name="link">
                    <option value="home">Home</option>
                    <option value="about">About Me</option>
                    <option value="testimonials">Testimonials</option>
                    <option value="services">Style Services</option>
                    <option value="before">Before & After</option>
                    <option value="style-videos">Style Videos</option>
                    <option value="blog">Blog</option>
                    <option value="contact">Contact Us</option>
                </select>
            </>
            }
            <br />
            <br />
            <UploadImg setImg={handleChange} img={values?.img} />

            <div className="flexDiv" style={{ justifyContent: "space-between", width: "100%", marginTop: 0 }}>
                <Link to="/" onClick={e => {
                    e.preventDefault();
                    setShowEdit(false)
                }} className="flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                <button type="button" onClick={e => save(e)} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save</button>
            </div>
        </div>;
    }

    function WelcomeSection(title, showName) {
        document.getElementById("exampleModalLabel").innerText = title

        function deleteItem() {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        setData(null)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            setData(values)
            setShowEdit(false)
        }

        if (!showEdit) {
            return <div style={{ width: "100%", position: "relative" }}>
                <h3 style={{ color: COLORS.white }}>Results</h3>
                {!data ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> : <>

                    <h4 style={{ color: COLORS.accent, marginTop: 40, fontWeight: 500 }}>Title: {data.title}</h4>
                    <h5 style={{ color: COLORS.white }}>Sub Title: {data.subtitle}</h5>
                    <h6 style={{ color: COLORS.white, lineHeight: 1.5 }}>Description: {data.desc}</h6>
                    {showName && <h6 style={{ color: COLORS.white }}>Name: {data.name}</h6>}
                    <div className="separator" ></div>

                    <div className="row">
                        {data?.img.map((item, idx) => {
                            return <div className="col-sm-4 img-link" key={idx}>
                                <img src={item} style={{ width: '100%', marginBottom: 20 }} alt="..." />
                            </div>
                        })}

                    </div>

                    <Link to="/" onClick={e => {
                        e.preventDefault();
                        setValues({
                            img: data.img,
                            title: data.title,
                            subtitle: data.subtitle,
                            desc: data.desc,
                            ...(showName ? { name: data.name } : {})
                        })
                        setShowEdit(true)
                    }} className={"flexDiv"} style={{ position: 'absolute', top: 0, right: 90 }}><EditIcon style={{ marginRight: 5 }} /> Edit</Link>

                    <Link to="/" onClick={e => {
                        e.preventDefault();
                        deleteItem();
                    }} className={"flexDiv"} style={{ position: 'absolute', top: 0, right: 0 }}><DeleteIcon style={{ marginRight: 5 }} /> Delete</Link>

                </>}
                <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                    <button type="button" onClick={e => {
                        e.preventDefault();
                        setSubSubScreen(null)
                        setShowEdit(false)
                    }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {!data && <button
                        type="button"
                        onClick={() => {
                            if (!data) {
                                setShowEdit(true);
                                setValues({})
                            }
                        }}
                        className="btn btn-primary">
                        Add
                    </button>}
                    <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
                </div>
            </div>
        }

        return <div style={{ width: '100%', textAlign: 'center' }}>
            <br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="title" placeholder="Title" onChange={e => handleChange(e)} value={values?.title} /><br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="subtitle" placeholder="Sub Title" onChange={e => handleChange(e)} value={values?.subtitle} />
            {showName && <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="name" placeholder="Name" onChange={e => handleChange(e)} value={values?.name} />}
            <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="desc" placeholder="Description" onChange={e => handleChange(e)} value={values?.desc} />
            <br />
            <br />
            <UploadImg setImg={handleChange} img={values?.img} array={true} />

            <div className="flexDiv" style={{ justifyContent: "space-between", width: "100%", marginTop: 0 }}>
                <Link to="/" onClick={e => {
                    e.preventDefault();
                    setShowEdit(false)
                }} className="flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                <button type="button" onClick={e => save(e)} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save</button>
            </div>
        </div>;
    }

    function AboutMeAboutMePage(title) {
        document.getElementById("exampleModalLabel").innerText = title

        function deleteItem() {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        setData(null)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            setData(values)
            setShowEdit(false)
        }

        if (!showEdit) {
            return <div style={{ width: "100%", position: "relative" }}>
                <h3 style={{ color: COLORS.white }}>Results</h3>
                {!data ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> : <>

                    <div className="row" style={{ marginBottom: 20 }}>
                        <div className="col-sm-6 img-link">
                            <img src={data.img} style={{ width: '100%' }} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div >
                                <h4 style={{ color: COLORS.accent, fontWeight: 500 }}>Title: {data.title}</h4><br />
                                <h5 style={{ color: COLORS.white }}>Sub Title: {data.subtitle}</h5><br />
                                <h6 style={{ color: COLORS.white, lineHeight: 1.5 }}>Description: {data.desc}</h6>
                            </div>
                        </div>
                    </div>

                    <Link to="/" onClick={e => {
                        e.preventDefault();
                        setValues({
                            img: data.img,
                            title: data.title,
                            subtitle: data.subtitle,
                            desc: data.desc
                        })
                        setShowEdit(true)
                    }} className={"flexDiv"} style={{ position: 'absolute', top: 0, right: 90 }}><EditIcon style={{ marginRight: 5 }} /> Edit</Link>

                    <Link to="/" onClick={e => {
                        e.preventDefault();
                        deleteItem();
                    }} className={"flexDiv"} style={{ position: 'absolute', top: 0, right: 0 }}><DeleteIcon style={{ marginRight: 5 }} /> Delete</Link>

                </>}
                <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                    <button type="button" onClick={e => {
                        e.preventDefault();
                        setSubSubScreen(null)
                        setShowEdit(false)
                    }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {!data && <button type="button" onClick={() => {
                        setShowEdit(true);
                        setValues({})
                    }} className="btn btn-primary">Add</button>}
                    <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
                </div>
            </div>
        }

        return <div style={{ width: '100%', textAlign: 'center' }}>
            <br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="title" placeholder="Title" onChange={e => handleChange(e)} value={values?.title} /><br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="subtitle" placeholder="Sub Title" onChange={e => handleChange(e)} value={values?.subtitle} />
            <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="desc" placeholder="Description" onChange={e => handleChange(e)} value={values?.desc} />
            <br />
            <br />
            <UploadImg setImg={handleChange} img={values?.img} array={false} />

            <div className="flexDiv" style={{ justifyContent: "space-between", width: "100%", marginTop: 0 }}>
                <Link to="/" onClick={e => {
                    e.preventDefault();
                    setShowEdit(false)
                }} className="flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                <button type="button" onClick={e => save(e)} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save</button>
            </div>
        </div>;
    }

    function AddServices() {

        function deleteItem(idx) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const newData = data.filter((item, index) => index !== idx)
                        setData(newData)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            let newData = [];

            if (index !== null) {
                for (let i = 0; i < data.length; i++) {
                    if (i === index) {
                        newData.push(values)
                    } else
                        newData.push(data[i]);
                }

                setData(newData)
            } else {
                setData(prev => {
                    return [
                        ...prev,
                        values
                    ]
                })
            }

            setShowEdit(false)
        }

        document.getElementById("exampleModalLabel").innerText = "Services"

        if (!showEdit) {
            return <div style={{ width: "100%" }}>
                <h3 style={{ color: COLORS.white }}>Results</h3>
                <div className="row">
                    {!data || data.length < 1 ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> :
                        data.map((item, idx) => {
                            return <div className="col-sm-6" key={idx}>
                                {DashboadCard({ ...item, index: idx }, setImg, setShowEdit, setIndex, setValues, deleteItem)}
                            </div>
                        })}
                </div>
                <br />
                <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                    <button type="button" onClick={e => {
                        e.preventDefault();
                        setSubSubScreen(null)
                        setShowEdit(false)
                    }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" onClick={() => {
                        setValues({
                            id: uuidv4()
                        })
                        setIndex(null)
                        setShowEdit(true);
                    }} className="btn btn-primary">Add</button>
                    <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
                </div>
            </div>
        }

        return <div style={{ width: '100%', textAlign: 'center' }}>
            <br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="title" placeholder="Title" onChange={e => handleChange(e)} value={values?.title} /><br />
            <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="subtitle" placeholder="Sub Title" onChange={e => handleChange(e)} value={values?.subtitle} />
            <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="desc" placeholder="Description" onChange={e => handleChange(e)} value={values?.desc} />
            <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="why" placeholder="Enter The Why" onChange={e => handleChange(e)} value={values?.why} />
            <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="how" placeholder="How It Works" onChange={e => handleChange(e)} value={values?.how} />
            <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="pricing" placeholder="Explain The Pricing" onChange={e => handleChange(e)} value={values?.pricing} />
            <br />
            <br />
            <UploadImg setImg={handleChange} img={values?.img} />

            <div className="flexDiv" style={{ justifyContent: "space-between", width: "100%", marginTop: 0 }}>
                <Link to="/" onClick={e => {
                    e.preventDefault();
                    setShowEdit(false)
                }} className="flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                <button type="button" onClick={e => save(e)} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save</button>
            </div>
        </div>;
    }

    function Benefits(title, isStylingProcess) {
        document.getElementById("exampleModalLabel").innerText = title

        function deleteItem(index) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const newData = data.filter((item, idx) => index !== idx)

                        setData(newData)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            if (values.index !== null) {
                const newData = [];
                for (let i = 0; i < data.length; i++) {
                    if (i !== values.index)
                        newData.push(data[i]);
                    else {
                        if (!isStylingProcess) {
                            newData.push(values.title)
                        } else {
                            newData.push(values)
                        }
                    }
                }

                setData(newData)
            } else {
                if (!isStylingProcess) {
                    setData(prev => [...prev, values.title]);
                } else {
                    setData(prev => [...prev, values]);
                }
            }

            setShowEdit(false)
        }

        function Card(item, idx) {
            return <><div key={idx} className="flexDiv" style={{ justifyContent: "space-between" }}>
                {!showEdit || values?.index !== idx ? <div style={{ width: "100%" }}>
                    <h5 style={{ color: (!isStylingProcess ? COLORS.white : COLORS.accent), fontWeight: 500 }}>{isStylingProcess ? item.title : item}</h5>
                    {isStylingProcess && <h6 style={{ color: COLORS.white, fontWeight: 500 }}>{item.desc}</h6>}
                </div> : <div style={{ width: "100%" }}>
                    <input className="animatedInput" style={{ padding: "8px 10px" }} type="text" name="title" placeholder={isStylingProcess ? "Title" : "Type in something"} autoFocus onChange={e => handleChange(e)} value={values?.title} />
                    {isStylingProcess && <><br /> <textarea className="animatedInput" style={{ width: "80%", minHeight: 200 }} type="text" name="desc" placeholder="Description" onChange={e => handleChange(e)} value={values?.desc} /> </>}
                </div>}
                <div className="flexDiv">
                    <Link to="/" onClick={e => {
                        e.preventDefault();
                        if (!showEdit || values.index !== idx) {
                            setValues({
                                index: idx,
                                ...(isStylingProcess ? { title: item.title, desc: item.desc } : { title: item })
                            })
                            setShowEdit(true)
                        } else {
                            save(e)
                        }
                    }} className={"flexDiv"} ><EditIcon style={{ marginRight: 5 }} /> {!showEdit || values?.index !== idx ? "Edit" : "Save"}</Link>

                    <Link to="/" onClick={e => {
                        e.preventDefault();
                        if (idx !== null)
                            deleteItem(idx);
                        else
                            setShowEdit(false);
                    }} className={"flexDiv"} style={{ marginLeft: 15 }} ><DeleteIcon style={{ marginRight: 5 }} /> Delete</Link>
                </div>
            </div>
                <div className="separator" style={{ margin: "10px auto 20px", width: "100%" }}></div>
            </>
        }

        return <div style={{ width: "100%", position: "relative" }}>
            <h3 style={{ color: COLORS.white }}>Results</h3>
            {!data || data.length < 1 ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> : <>
                <br />
                {data.map((item, idx) => {
                    return Card(item, idx)
                })}
            </>}
            {showEdit && values.index === null && Card("", null)}
            <br />
            <br />

            <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                <button type="button" onClick={e => {
                    e.preventDefault();
                    setSubSubScreen(null)
                    setShowEdit(false)
                }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={() => {
                    setShowEdit(true);
                    setValues({ title: "", index: null, ...(isStylingProcess ? { desc: "" } : {}) })
                }} className="btn btn-primary">Add</button>
                <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
            </div>
        </div>

    }

    function WToffer() {
        document.getElementById("exampleModalLabel").innerText = "What Do I Offer"

        function deleteItem(idx) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const newData = data.filter((item, index) => index !== idx)
                        setData(newData)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }


        function add(id) {
            if (data.length >= 3) {
                swal("Sorry!", "You cannot add more than 3 featured services", "warning")
            } else {
                setData(prev => [...prev, id])
            }
        }

        return <div>
            <div className="row">
                <div className="col-md-6">
                    <h4 style={{ color: COLORS.white, fontWeight: 500 }}>Featured Services</h4>
                    <div className="separator" style={{ width: "100%" }}></div>
                    {data.length > 0 &&
                        data.map((id, idx) => {
                            let item = props?.data?.services?.services.filter((item) => item.id === id)[0]
                            return <div key={idx}>
                                {DashboadCard({ ...item, index: idx }, setImg, setShowEdit, setIndex, setValues, deleteItem, false)}
                            </div>;
                        })
                    }
                </div>
                <div className="col-md-6 divLine">
                    <h4 style={{ color: COLORS.white, fontWeight: 500 }}>Services</h4>
                    <div className="separator" style={{ width: "100%" }}></div>
                    {props?.data && props?.data?.services?.services.length > 0 &&
                        props?.data?.services?.services.map((item, idx) => {
                            return <div>
                                <div key={idx} className="flexDiv" style={{ justifyContent: "space-between" }}>
                                    <div style={{ width: "80%" }}>
                                        <h5 style={{ color: COLORS.accent, fontWeight: 500 }}>{item.title}</h5>
                                        <h6 style={{ color: COLORS.white, fontWeight: 500 }}>{item.desc.slice(0, 100)}...</h6>
                                    </div>
                                    <div className="flexDiv">
                                        <Link to="/" onClick={e => {
                                            e.preventDefault();
                                            if (data.includes(item.id)) {
                                                swal("Sorry!", "This service is already a featured service", "warning")
                                            } else
                                                add(item.id);
                                        }} className={"flexDiv"} >{data.includes(item.id) ? <DoneAllIcon style={{ marginRight: 5 }} /> : <AddIcon style={{ marginRight: 5 }} />} {data.includes(item.id) ? "Okay" : "Add"}</Link>
                                    </div>
                                </div>
                                <div className="separator" style={{ margin: "10px auto 20px", width: "100%" }}></div>
                            </div>
                        })

                    }
                </div>
            </div>

            <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                <button type="button" onClick={e => {
                    e.preventDefault();
                    setSubSubScreen(null)
                    setShowEdit(false)
                }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
            </div>
        </div>
    }

    function Home() {

        return <>
            {Title("Carousel", 0, oldData?.carousel || [], "carousel")}
            {Title("Welcome To Me Section", 1, oldData?.wTm || null, "wTm")}
            {Title("What Do I offer", 2, oldData?.featuredServices || [], "featuredServices")}
            {Title("What Clients Say", "reviews")}
            {Title("About Me", 4, oldData?.about || null, "about")}
            {Title("Blog Articles", "articles")}
        </>
    }

    function About() {
        return <>
            {Title("About Me", 0, oldData?.about || null, "about")}
            {Title("Dress Your Best", 1, oldData?.dress || [], "dress")}
            {Title("Benefits", 2, oldData?.benefits || [], "benefits")}
            {Title("Let's Get In Touch", 3, oldData?.gIt, "gIt")}
        </>
    }

    function Services() {
        return <>
            {Title("Services", 0, oldData?.services || [], "services")}
            {Title("Packages", 1, oldData?.packages || [], "packages")}
            {Title("Styling Process", 2, oldData?.process || [], "process")}
        </>
    }

    function Before() {

        function deleteItem(idx) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const newData = data.filter((item, index) => index !== idx)
                        setData(newData)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            let newData = [];

            if (index !== null) {
                for (let i = 0; i < data.length; i++) {
                    if (i === index) {
                        newData.push(values)
                    } else
                        newData.push(data[i]);
                }

                setData(newData)
            } else {
                setData(prev => {
                    return [
                        ...prev,
                        values
                    ]
                })
            }

            setShowEdit(false)
        }

        if (!showEdit) {
            return <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div className="main-container" style={{ left: "0", right: 0, bottom: 0, height: '100%', paddingBottom: 0 }}>
                    <div style={{ width: "100%", padding: "0 20px" }}>
                        <h3 style={{ color: COLORS.white, marginLeft: 10 }}>Results</h3>
                        <div className="row" style={{ padding: 0, margin: 0 }}>
                            {!data || data.length < 1 ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> :
                                (data).map((item, idx) => {
                                    return <div className="col-sm-6" key={idx}>
                                        {DashboadCard({ ...item, index: idx }, setImg, setShowEdit, setIndex, setValues, deleteItem)}
                                    </div>
                                })}
                        </div>
                        <br />
                        <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%", }}>
                            <button type="button" onClick={() => {
                                setValues({
                                    id: uuidv4()
                                })
                                setIndex(null)
                                setShowEdit(true);
                            }} className="btn btn-primary">Add</button>
                            <button type="button" onClick={() => saveAll2()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        }

        return <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div className="main-container" style={{ height: '100%', paddingBottom: 0 }}>
                <div style={{ width: '100%', textAlign: 'center', padding: "0 20px" }}>
                    <h4 className="grey-text" style={{ fontWeight: 'bold' }}>Add Makeover</h4>
                    <br />
                    <input className="animatedInput" style={{ width: "80%", padding: "8px 10px" }} type="text" name="name" placeholder="Name" onChange={e => handleChange(e)} value={values?.name} /><br />
                    <textarea className="animatedInput" style={{ width: "80%", minHeight: 300 }} type="text" name="desc" placeholder="Description" onChange={e => handleChange(e)} value={values?.desc}></textarea>

                    <br />
                    <br />
                    <UploadImg setImg={handleChange} img={values?.img} />

                    <div className="flexDiv" style={{ justifyContent: "space-between", width: "100%", marginTop: 0 }}>
                        <Link to="/" onClick={e => {
                            e.preventDefault();
                            setShowEdit(false)
                        }} className="flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                        <button type="button" onClick={e => save(e)} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    }

    function Videos() {

        function deleteItem(idx) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover it!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const newData = data.filter((item, index) => index !== idx)
                        setData(newData)

                        swal("Deleted succesfully", {
                            icon: "success",
                        });
                    } else {
                        swal("Good choice, your item is safe!", {
                            icon: "success",
                        });
                    }
                });
        }

        function save(e) {
            e.preventDefault();
            if (values.index !== null) {
                const newData = [];
                for (let i = 0; i < data.length; i++) {
                    if (i !== values.index)
                        newData.push(data[i]);
                    else {
                        newData.push(values)
                    }
                }

                setData(newData)
            } else {
                setData(prev => [...prev, values]);
            }

            setShowEdit(false)
        }

        function Card(item, idx) {
            return <>
                <div key={idx} className="flexDiv" style={{ justifyContent: "space-between" }}>
                    {!showEdit || values?.index !== idx ? <div style={{ width: "100%" }}>
                        <h5 style={{ color: COLORS.accent, fontWeight: 500 }}>{item.title}</h5>
                        <h6 style={{ color: COLORS.white, fontWeight: 500 }}>{item.link}</h6>
                    </div> : <div style={{ width: "100%" }}>
                        <input className="animatedInput" style={{ padding: "8px 10px" }} type="text" name="title" placeholder="Title" autoFocus onChange={e => handleChange(e)} value={values?.title} />
                        <><br /> <input className="animatedInput" style={{ padding: "8px 10px" }} type="text" name="link" placeholder="Youtube Link" onChange={e => handleChange(e)} value={values?.link} /> </>
                    </div>}
                    <div className="flexDiv">
                        <Link to="/" onClick={e => {
                            e.preventDefault();
                            if (!showEdit || values.index !== idx) {
                                setValues({
                                    ...item,
                                    index: idx,
                                })
                                setShowEdit(true)
                            } else {
                                save(e)
                            }
                        }} className={"flexDiv"} ><EditIcon style={{ marginRight: 5 }} /> {!showEdit || values?.index !== idx ? "Edit" : "Save"}</Link>

                        <Link to="/" onClick={e => {
                            e.preventDefault();
                            if (idx !== null)
                                deleteItem(idx);
                            else
                                setShowEdit(false);
                        }} className={"flexDiv"} style={{ marginLeft: 15 }} ><DeleteIcon style={{ marginRight: 5 }} /> Delete</Link>
                    </div>
                </div>
                <div className="separator" style={{ margin: "10px auto 20px", width: "100%" }}></div>
            </>
        }

        return <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div className="main-container" style={{ left: "0", right: 0, bottom: 0, height: '100%', paddingBottom: 0 }}>
                <div style={{ width: "100%", padding: "0 20px" }}>
                    <div style={{ width: "100%", position: "relative" }}>
                        <h3 style={{ color: COLORS.white }}>Results</h3>
                        {!data || data.length < 1 ? <h5 style={{ color: COLORS.white, margin: "40px 0" }}>There is no items to be shown!</h5> : <>
                            <br />
                            {data.map((item, idx) => {
                                return Card(item, idx)
                            })}
                        </>}
                        {showEdit && values.index === null && Card("", null)}
                        <br />
                        <br />

                        <div className="flexDiv" style={{ justifyContent: "flex-end", width: "100%" }}>
                            <button type="button" onClick={() => {
                                setShowEdit(true);
                                setValues({ title: "", index: null, link: "", id: uuidv4() })
                            }} className="btn btn-primary">Add</button>
                            <button type="button" onClick={() => saveAll2()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

    function Blog() {
        return <>

        </>
    }

    return <div style={{ height: '90%' }}>
        <div className="row" style={{ margin: 0, padding: 0, height: '100%' }}>
            <div className="col-md-3" style={{ margin: 0, padding: 0, height: '100%' }}>
                <div className="box" style={{ height: '100%' }}>

                    <div >
                        <Link to="/" onClick={e => props.goBack(e)} className="dashboad-link nav-link flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                        <div className="separator" style={{ width: "100%" }}></div>
                    </div>
                    <div style={{ position: "relative", width: "100%", height: "85%" }}>
                        <div className="main-container" style={{ left: "0", top: -10 }}>
                            <Link to="#" onClick={e => changeSubScreen(e, 0)} className={"dashboad-link nav-link flexDiv" + (subScreen === 0 ? "  active-link" : "")}><HomeIcon style={{ marginRight: 10 }} />  Home</Link>
                            <Link to="#" onClick={e => changeSubScreen(e, 1)} className={"dashboad-link nav-link flexDiv" + (subScreen === 1 ? "  active-link" : "")}><InfoIcon style={{ marginRight: 10 }} />  About Me</Link>
                            <Link to="#" onClick={e => changeSubScreen(e, 2)} className={"dashboad-link nav-link flexDiv" + (subScreen === 2 ? "  active-link" : "")}><WorkIcon style={{ marginRight: 10 }} />  Style Services</Link>
                            <Link to="#" onClick={e => changeSubScreen(e, 3)} className={"dashboad-link nav-link flexDiv" + (subScreen === 3 ? "  active-link" : "")}><ChangeCircleIcon style={{ marginRight: 10 }} />  Before & After</Link>
                            <Link to="#" onClick={e => changeSubScreen(e, 4)} className={"dashboad-link nav-link flexDiv" + (subScreen === 4 ? "  active-link" : "")}><VideoLibraryIcon style={{ marginRight: 10 }} />  Style Videos</Link>
                            <Link to="#" onClick={e => changeSubScreen(e, 5)} className={"dashboad-link nav-link flexDiv" + (subScreen === 5 ? "  active-link" : "")}><BookIcon style={{ marginRight: 10 }} />  Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9" style={{ height: '100%' }}>
                <div style={{ width: '100%', textAlign: "left", position: "relative", height: '100%' }}>
                    {subScreen !== 3 && subScreen !== 4 && <div className="box" style={{ margin: "auto" }}>
                        {subScreen === 0 && Home()}
                        {subScreen === 1 && About()}
                        {subScreen === 2 && Services()}
                        {subScreen === 5 && Blog()}
                    </div>}
                    {(subScreen === 3 || subScreen === 4) && <div className="box" style={{ margin: "auto", padding: "20px 0", height: "100%" }}>
                        {subScreen === 3 && Before()}
                        {subScreen === 4 && Videos()}
                    </div>}
                </div>
            </div>
        </div>



        {/* <!-- Add An Item Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-xl modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel" style={{ color: COLORS.white }}>.</h3>
                        <button onClick={e => {
                            e.preventDefault();
                            setSubSubScreen(null)
                            setShowEdit(false)
                        }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {subScreen === 0 && <>
                            {subSubScreen === 0 && Carousel("Carousel", false)}
                            {subSubScreen === 1 && WelcomeSection("Welcome To Me", false)}
                            {subSubScreen === 2 && WToffer()}
                            {subSubScreen === 4 && WelcomeSection("About Me (Home Page)", true)}
                        </>}
                        {subScreen === 1 && <>
                            {subSubScreen === 0 && AboutMeAboutMePage("About Me (About Me Page)")}
                            {subSubScreen === 1 && Carousel("Dress Your Best", true)}
                            {subSubScreen === 2 && Benefits("Benefits", false)}
                            {subSubScreen === 3 && AboutMeAboutMePage("Let's Get In Touch")}
                        </>}
                        {subScreen === 2 && <>
                            {subSubScreen === 0 && AddServices()}
                            {subSubScreen === 1 && WelcomeSection("Welcome To Me", false)}
                            {subSubScreen === 2 && Benefits("Styling Process", true)}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
