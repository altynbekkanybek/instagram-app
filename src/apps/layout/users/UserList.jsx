

import React from 'react';

import { Components } from '../../../components';
import NoneAvatar from "../../../assets/images/profile/noneAvatar.jpg";

import cls from "../../../assets/styles/users/Users.module.scss"
import { REQUEST } from '../../../api';
import { Link } from 'react-router-dom';

export default function UserList({base}) {
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    if(!base?.avatar) {
      setAvatar(NoneAvatar)
    } else {
      setAvatar(base?.avatar)
    }
  }, [base]);

  const followToUser = async (id) => {
    if(id) {
      const newData = {
        to_user: parseInt(id)
      }
      const request = REQUEST.FOLLOW_TO_USER(newData)

      await request
        .then(res => {
          console.log(res.data)
        })
    }
  };
  return (
    <div className={cls.users}>
      <Link to={`/profile/${base?.id}`}>
        <section className={cls.users_info}>
          <div className={cls.avatar}>
            <Components.Image src={avatar} />
            {base?.is_online && <div className={cls.online} />}
          </div>
          <div>
            <h4>{base?.username}</h4>

            <p>{base?.first_name} {base?.last_name}</p>
          </div>
        </section>
      </Link>
      <section> 
        <button onClick={() => followToUser(base?.id)}>Подписаться</button>
      </section>
    </div>
  )
};
