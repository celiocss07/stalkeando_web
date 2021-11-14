import React, { useState } from 'react';
import HeaderAuth from '../../Components/HeaderAuth'
import Footer from '../../Components/Footer'
import image from '../../assets/Image.png'
import Plus from '../../assets/PlusCircle.png'
import Feacture1 from '../../assets/Feacture1.png'
import Feacture2 from '../../assets/Feacture2.png'
import Feacture3 from '../../assets/Feacture3.png'
import Feacture4 from '../../assets/Feacture4.png'
import Feacture5 from '../../assets/Feacture5.png'
import Feacture6 from '../../assets/Feacture6.png'
import Feacture7 from '../../assets/Feacture7.png'
import Feacture8 from '../../assets/Feacture8.png'
import Feacture9 from '../../assets/Feacture9.png'
import Feacture10 from '../../assets/Feacture10.png'
import DownloadIcon from '../../assets/Download.png'
import './styles.css';

function Home({ history }) {


    const [users, setUsers] = useState([
        {
            img: image,
            username: 'CSS',
            posts: 999,
            countFollowers: 9999,
            followings: 9999,
            followers: [
                { username: 'CSS07' },
                { username: 'Boleano' },
                { username: 'madiadia' },
                { username: 'infinitytec' },
                { username: 'deivid' },
                { username: 'marquinhos' },
                { username: 'junior' },
                { username: 'cacau' },

            ]
        },
        {
            img: image,
            username: 'spideuser',
            posts: 9455,
            countFollowers: 2021,
            followings: 34,
            followers: [
                { username: 'salvaodr' },
                { username: 'félix' },
                { username: 'madiadia' },
                { username: 'deivid' },

            ]
        },
        {
            img: image,
            username: 'gilberto',
            posts: 879,
            countFollowers: 975,
            followings: 1000,
            followers: [
                { username: 'deivid' },
                { username: 'marquinhos' },
                { username: 'junior' },
                { username: 'cacau' },

            ]
        }
    ])
    const [selectedUser, setSelectedUser] = useState(users[0])

    function handleSelectUser(id) {
        users.map((item, index) => {
            if (index == id)
                document.getElementById(`userBox${id}`).style =
                    "height: 90px; width: 90px; border: 1px solid black; "
            else document.getElementById(`userBox${index}`).style = "height: 80px;width: 80px;border:none;"
        })
        setSelectedUser(users[id])

    }

    function handleAddUser() {
        setUsers([
            ...users,
            {
                img: image
            }
        ])
    }

    function handleSelectedAction(index) {
        //console.log(index)
        for (var i = 1; i <= 10; i++) {
            //console.log(i)
            //document.getElementById(`actionBox${index}`).style ="background-color: #ddd;"
            document.getElementById(`actionBox${i}`).style = "background-color: #F2F2F7;"
        }

        document.getElementById(`actionBox${index}`).style = "background-color: #ddd;"
    }
    return (
        <main>
            <HeaderAuth history={history}  />

            <div className='usersContainer'>
                {
                    users.map((item, index) => (

                        <article id={`userBox${index}`} className='userBox' onClick={() => {
                            handleSelectUser(index)
                        }}>

                            <img src={item.img} />
                        </article>


                    ))
                }
                <a href='#' > <img src={Plus} onClick={() => handleAddUser()} /></a>
            </div>
            <div className='userInfo'>

                <h4 id='username'>@{selectedUser.username}</h4>

                <ul>
                    <li>{selectedUser.posts} posts</li>
                    <li>{selectedUser.countFollowers} seguidores</li>
                    <li>{selectedUser.followings} seguindo</li>
                </ul>

            </div>

            <div className='containerActions'>

                <ul>
                    <li id='actionBox1' onClick={() => {
                        handleSelectedAction(1)
                    }} >
                        <img src={Feacture1} />
                    </li>
                    <li id='actionBox2' onClick={() => {
                        handleSelectedAction(2)
                    }}>
                        <img src={Feacture2} />
                    </li>
                    <li id='actionBox3' onClick={() => {
                        handleSelectedAction(3)
                    }}>
                        <img src={Feacture3} />
                    </li>
                    <li id='actionBox4' onClick={() => {
                        handleSelectedAction(4)
                    }}>
                        <img src={Feacture4} />
                    </li>
                    <li id='actionBox5' onClick={() => {
                        handleSelectedAction(5)
                    }}>
                        <img src={Feacture5} />
                    </li>
                    <li id='actionBox6' onClick={() => {
                        handleSelectedAction(6)
                    }}>
                        <img src={Feacture6} />
                    </li>
                    <li id='actionBox7' onClick={() => {
                        handleSelectedAction(7)
                    }}>
                        <img src={Feacture7} />
                    </li>
                    <li id='actionBox8' onClick={() => {
                        handleSelectedAction(8)
                    }}>
                        <img src={Feacture8} />
                    </li>
                    <li id='actionBox9' onClick={() => {
                        handleSelectedAction(9)
                    }}>
                        <img src={Feacture9} />
                    </li>
                    <li id='actionBox10' onClick={() => {
                        handleSelectedAction(10)
                    }}>
                        <img src={Feacture10} />
                    </li>
                </ul>
            </div>

            <div className='middle'>
                <h4>Pessoas que começaram a seguir @{selectedUser.username}</h4>
                <a href='#'> Baixar relatório <img src={DownloadIcon} /> </a>
            </div>

            <div className='handleFollowers'>
                <ul>
                    {
                        selectedUser.followers.map((item, index) => (
                            <li>
                                <div className='img'>
                                    <img src={image} />
                                </div>
                                @{item.username} começou a seguir @{selectedUser.username}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Footer history={history} />

        </main>
    )
}

export default Home;