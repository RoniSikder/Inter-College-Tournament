import { axios } from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


const Admin_Collage_DataBase = () => {
    let [hold, setHold] = useState([])
    useEffect(
        axios.get("http://localhost:8000/collage_view")
            .then((res) => {
                setHold(res.data);
                console.log(res.data);
            }),[]
    )
    return (
        <>
            <div className="containera">
                <h2>College DataBase</h2>
                <div className="content">
                    {
                        hold.map(x => {
                            return (
                                <div class="card text-bg-success mb-3" style="max-width: 18rem;">
                                    <div class="card-header">{x.college}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Mail : {x.email}</h5>
                                        <p class="card-text">College Id :{x.pass}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Admin_Collage_DataBase